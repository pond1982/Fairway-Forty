import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import {
  getAnalytics,
  isSupported,
  logEvent,
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDr8PlVWZps2ivtj-vSa79_O1-WbvBe7ds",
  authDomain: "fairway-forty.firebaseapp.com",
  projectId: "fairway-forty",
  storageBucket: "fairway-forty.firebasestorage.app",
  messagingSenderId: "622054965649",
  appId: "1:622054965649:web:a33c0dcaed0231e4219a30",
  measurementId: "G-CKFWX2FXFB",
};

const app = initializeApp(firebaseConfig);
const queuedEvents = window.fairwayAnalyticsQueue || [];

let analytics = null;

window.fairwayFirebaseApp = app;

isSupported()
  .then((supported) => {
    if (!supported) {
      queuedEvents.length = 0;
      window.trackFairwayEvent = () => {};
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
      project_id: firebaseConfig.projectId,
    });
  })
  .catch((error) => {
    queuedEvents.length = 0;
    window.trackFairwayEvent = () => {};
    console.warn("Firebase analytics could not start.", error);
  });

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
