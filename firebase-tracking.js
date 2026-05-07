import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import {
  getAnalytics,
  isSupported,
  logEvent,
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-analytics.js";

const FIREBASE_INIT_CONFIG_URL = "/__/firebase/init.json";
const queuedEvents = window.fairwayAnalyticsQueue || [];

let analytics = null;

loadFirebaseConfig()
  .then((firebaseConfig) => {
    if (!firebaseConfig) {
      disableTracking("Firebase runtime config was not found.");
      return;
    }

    const app = initializeApp(firebaseConfig);
    window.fairwayFirebaseApp = app;

    return isSupported().then((supported) => {
      if (!supported) {
        disableTracking("Firebase analytics is not supported in this browser.");
        return;
      }

      analytics = getAnalytics(app);
      window.fairwayFirebaseAnalytics = analytics;
      window.trackFairwayEvent = trackFairwayEvent;

      while (queuedEvents.length > 0) {
        const [name, params] = queuedEvents.shift();
        trackFairwayEvent(name, params);
      }

      trackFairwayEvent("firebase_tracking_ready", {
        project_id: app.options.projectId,
      });
    });
  })
  .catch((error) => {
    disableTracking("Firebase analytics could not start.");
    console.warn("Firebase analytics could not start.", error);
  });

async function loadFirebaseConfig() {
  if (window.FAIRWAY_FIREBASE_CONFIG) {
    return window.FAIRWAY_FIREBASE_CONFIG;
  }

  if (isLocalPreview()) {
    return null;
  }

  try {
    const response = await fetch(FIREBASE_INIT_CONFIG_URL, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) return null;

    const firebaseConfig = await response.json();
    if (!firebaseConfig?.apiKey || !firebaseConfig?.appId || !firebaseConfig?.projectId) {
      return null;
    }

    return firebaseConfig;
  } catch {
    return null;
  }
}

function isLocalPreview() {
  return (
    location.protocol === "file:" ||
    location.hostname === "localhost" ||
    location.hostname === "127.0.0.1" ||
    location.hostname === "::1"
  );
}

function disableTracking(reason) {
  queuedEvents.length = 0;
  window.trackFairwayEvent = () => {};
  window.fairwayAnalyticsDisabledReason = reason;
}

function trackFairwayEvent(name, params = {}) {
  if (!analytics) {
    queuedEvents.push([name, params]);
    return;
  }

  try {
    logEvent(analytics, name, normalizeParams(params));
  } catch (error) {
    console.warn(`Firebase analytics event failed: ${name}`, error);
  }
}

function normalizeParams(params) {
  return Object.fromEntries(
    Object.entries(params)
      .filter(([, value]) => value !== undefined && value !== null)
      .map(([key, value]) => [key, normalizeValue(value)]),
  );
}

function normalizeValue(value) {
  if (typeof value === "number" || typeof value === "string") {
    return typeof value === "string" ? value.slice(0, 100) : value;
  }

  if (typeof value === "boolean") {
    return value ? "true" : "false";
  }

  return JSON.stringify(value).slice(0, 100);
}
