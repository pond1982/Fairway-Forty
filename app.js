const MANGA = {
  title: "Fairway Forty",
  seoTitle: "Fairway Forty | Golf Manga Reader",
  subtitle: "Five Lessons, One Tiny Coach, and a Dad Who Refuses to Slice Forever",
  tagline: "Not fast. Not perfect. Repeatable.",
  description:
    "A full-color golf manga about a working dad learning Ben Hogan-inspired fundamentals through family comedy and sports manga action.",
  availablePages: 40,
  plannedPages: 45,
};

const pageFiles = [
  "ChatGPT Image 7 พ.ค. 2569 16_06_06 (1).png",
  "ChatGPT Image 7 พ.ค. 2569 16_06_06 (2).png",
  "ChatGPT Image 7 พ.ค. 2569 16_06_06 (3).png",
  "ChatGPT Image 7 พ.ค. 2569 16_06_06 (4).png",
  "ChatGPT Image 7 พ.ค. 2569 16_06_06 (5).png",
  "ChatGPT Image 7 พ.ค. 2569 16_06_06 (6).png",
  "ChatGPT Image 7 พ.ค. 2569 16_06_06 (7).png",
  "ChatGPT Image 7 พ.ค. 2569 16_06_06 (8).png",
  "ChatGPT Image 7 พ.ค. 2569 16_06_06 (9).png",
  "ChatGPT Image 7 พ.ค. 2569 16_06_06 (10).png",
  "ChatGPT Image 7 พ.ค. 2569 16_06_34 (1).png",
  "ChatGPT Image 7 พ.ค. 2569 16_06_34 (2).png",
  "ChatGPT Image 7 พ.ค. 2569 16_06_34 (3).png",
  "ChatGPT Image 7 พ.ค. 2569 16_06_34 (4).png",
  "ChatGPT Image 7 พ.ค. 2569 16_06_34 (5).png",
  "ChatGPT Image 7 พ.ค. 2569 16_06_34 (6).png",
  "ChatGPT Image 7 พ.ค. 2569 16_06_34 (7).png",
  "ChatGPT Image 7 พ.ค. 2569 16_06_34 (8).png",
  "ChatGPT Image 7 พ.ค. 2569 16_06_34 (9).png",
  "ChatGPT Image 7 พ.ค. 2569 16_06_34 (10).png",
  "ChatGPT Image 7 พ.ค. 2569 16_06_48 (1).png",
  "ChatGPT Image 7 พ.ค. 2569 16_06_48 (2).png",
  "ChatGPT Image 7 พ.ค. 2569 16_06_48 (3).png",
  "ChatGPT Image 7 พ.ค. 2569 16_06_48 (4).png",
  "ChatGPT Image 7 พ.ค. 2569 16_06_48 (5).png",
  "ChatGPT Image 7 พ.ค. 2569 16_06_48 (6).png",
  "ChatGPT Image 7 พ.ค. 2569 16_06_48 (7).png",
  "ChatGPT Image 7 พ.ค. 2569 16_06_48 (8).png",
  "ChatGPT Image 7 พ.ค. 2569 16_06_48 (9).png",
  "ChatGPT Image 7 พ.ค. 2569 16_06_48 (10).png",
  "fairway-forty-page-31.png",
  "fairway-forty-page-32.png",
  "fairway-forty-page-33.png",
  "fairway-forty-page-34.png",
  "fairway-forty-page-35.png",
  "fairway-forty-page-36.png",
  "fairway-forty-page-37.png",
  "fairway-forty-page-38.png",
  "fairway-forty-page-39.png",
  "fairway-forty-page-40.png",
];

const pageTitles = [
  "The Adult Life Opening Splash",
  "The Challenge Appears",
  "The Household Negotiation",
  "First Contact with Golf",
  "The Book Finds You",
  "Lesson One Title Page: The Grip",
  "Angry Hands",
  "The Crayon Revelation",
  "Rebuilding the Hold",
  "The Lunch-Break Montage",
  "Office Grip",
  "First Clean Contact",
  "Lesson One Badge",
  "Lesson Two Title Page",
  "Feet Are Soup",
  "The Toy Cleanup Drill",
  "Building the Base",
  "Zoom Meeting Posture Curse",
  "The First Real Sound",
  "The Toddler Ball Position Test",
  "Lesson Three Title Page",
  "The Panic Takeaway",
  "Brad's Bad Advice",
  "Stroller Takeaway",
  "The Slow Start Montage",
  "Mid-Backswing Mechanics",
  "Top of the Swing, Top of the Panic",
  "The First Arc",
  "Lesson Four Title Page",
  "The Lunge Monster",
  "The Napkin Sequence",
  "Playground Transition",
  "Learning to Shift",
  "Impact Is a Doorway",
  "The Work-Life Sequence",
  "Last Practice Before the Scramble",
  "Full Swing Spread",
  "Tournament Morning",
  "First Tee Terror",
  "The Comedy Hole",
];

const allPages = pageFiles.map((file, index) => ({
  file,
  number: index + 1,
  title: pageTitles[index],
}));

const chapters = [
  {
    id: "chapter-1",
    title: "Opening: The Call to Golf",
    note: "Pages 1-5",
    pages: allPages.slice(0, 5),
  },
  {
    id: "chapter-2",
    title: "Lesson One: The Grip",
    note: "Pages 6-13",
    pages: allPages.slice(5, 13),
  },
  {
    id: "chapter-3",
    title: "Lesson Two: Stance and Posture",
    note: "Pages 14-20",
    pages: allPages.slice(13, 20),
  },
  {
    id: "chapter-4",
    title: "Lesson Three: The First Part",
    note: "Pages 21-28",
    pages: allPages.slice(20, 28),
  },
  {
    id: "chapter-5",
    title: "Lesson Four: The Second Part",
    note: "Pages 29-30 available",
    pages: allPages.slice(28, 30),
  },
  {
    id: "chapter-6",
    title: "Lesson Five: Sequence and Review",
    note: "Pages 31-40",
    pages: allPages.slice(30, 40),
  },
];

const STORAGE_KEY = "fairway-forty-reader";

const dom = {
  chapterCount: document.querySelector("#chapterCount"),
  chapterList: document.querySelector("#chapterList"),
  chapterSelect: document.querySelector("#chapterSelect"),
  chapterTitle: document.querySelector("#chapterTitle"),
  directionToggle: document.querySelector("#directionToggle"),
  nextPage: document.querySelector("#nextPage"),
  pageCounter: document.querySelector("#pageCounter"),
  pages: document.querySelector("#pages"),
  previousPage: document.querySelector("#previousPage"),
  progressFill: document.querySelector("#progressFill"),
  seriesSubtitle: document.querySelector("#seriesSubtitle"),
  seriesTitle: document.querySelector("#seriesTitle"),
  storyBibleLink: document.querySelector("#storyBibleLink"),
  toggleMode: document.querySelector("#toggleMode"),
  toggleTheme: document.querySelector("#toggleTheme"),
  zoomRange: document.querySelector("#zoomRange"),
};

const savedState = readSavedState();
const state = {
  chapterIndex: savedState.chapterIndex ?? 0,
  direction: savedState.direction ?? "ltr",
  mode: savedState.mode ?? "scroll",
  pageIndex: savedState.pageIndex ?? 0,
  theme: savedState.theme ?? "dark",
  zoom: savedState.zoom ?? 96,
};

let pageObserver = null;
let saveTimer = null;

init();

function init() {
  renderSeriesMeta();
  hydrateStateFromHash();
  clampState();
  renderLibrary();
  renderChapterSelect();
  attachEvents();
  applyPreferences();
  renderReader({ scrollToPage: Boolean(window.location.hash) });
  trackEvent("manga_open", getTrackingContext({ source: "initial_load" }));
  trackCurrentPage("initial_load");
}

function renderSeriesMeta() {
  document.title = MANGA.seoTitle;
  dom.seriesTitle.textContent = MANGA.title;
  dom.seriesSubtitle.textContent = `${MANGA.availablePages} of ${MANGA.plannedPages} pages available`;
}

function readSavedState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveState() {
  window.clearTimeout(saveTimer);
  saveTimer = window.setTimeout(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Some browsers restrict storage for file:// pages.
    }
  }, 80);
}

function hydrateStateFromHash() {
  const match = window.location.hash.match(/chapter-(\d+)\/page-(\d+)/);
  if (!match) return;

  state.chapterIndex = Number(match[1]) - 1;
  state.pageIndex = Number(match[2]) - 1;
}

function clampState() {
  state.chapterIndex = clamp(state.chapterIndex, 0, chapters.length - 1);
  state.pageIndex = clamp(state.pageIndex, 0, getCurrentChapter().pages.length - 1);
  state.zoom = clamp(state.zoom, Number(dom.zoomRange.min), Number(dom.zoomRange.max));
  if (!["scroll", "single"].includes(state.mode)) state.mode = "scroll";
  if (!["dark", "light"].includes(state.theme)) state.theme = "dark";
  if (!["ltr", "rtl"].includes(state.direction)) state.direction = "ltr";
}

function attachEvents() {
  dom.chapterSelect.addEventListener("change", () => {
    setChapter(Number(dom.chapterSelect.value), 0);
  });

  dom.previousPage.addEventListener("click", () => turnPage(-1));
  dom.nextPage.addEventListener("click", () => turnPage(1));

  dom.toggleMode.addEventListener("click", () => {
    state.mode = state.mode === "scroll" ? "single" : "scroll";
    renderReader({ scrollToPage: true });
    trackEvent("reader_mode_change", getTrackingContext({ reader_mode: state.mode }));
    saveState();
  });

  dom.toggleTheme.addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    applyPreferences();
    trackEvent("reader_theme_change", getTrackingContext({ theme: state.theme }));
    saveState();
  });

  dom.zoomRange.addEventListener("input", () => {
    state.zoom = Number(dom.zoomRange.value);
    applyPreferences();
    saveState();
  });

  dom.zoomRange.addEventListener("change", () => {
    trackEvent("reader_zoom_change", getTrackingContext({ zoom: state.zoom }));
  });

  dom.directionToggle.addEventListener("change", () => {
    state.direction = dom.directionToggle.checked ? "rtl" : "ltr";
    trackEvent("reader_direction_change", getTrackingContext({ direction: state.direction }));
    saveState();
  });

  dom.storyBibleLink.addEventListener("click", () => {
    trackEvent("story_bible_open", getTrackingContext({ destination: "FairwayForty.md" }));
  });

  window.addEventListener("keydown", (event) => {
    if (event.metaKey || event.ctrlKey || event.altKey) return;

    const nextKey = state.direction === "rtl" ? "ArrowLeft" : "ArrowRight";
    const previousKey = state.direction === "rtl" ? "ArrowRight" : "ArrowLeft";

    if (event.key === nextKey) {
      event.preventDefault();
      turnPage(1);
    }

    if (event.key === previousKey) {
      event.preventDefault();
      turnPage(-1);
    }
  });

  window.addEventListener("hashchange", () => {
    const previousChapter = state.chapterIndex;
    hydrateStateFromHash();
    clampState();

    if (previousChapter !== state.chapterIndex) {
      renderReader({ scrollToPage: true });
      trackCurrentPage("hash_navigation");
    } else {
      syncUi();
      if (state.mode === "single") {
        renderReader({ scrollToPage: true });
      } else {
        scrollToCurrentPage();
      }
      trackCurrentPage("hash_navigation");
    }
  });
}

function renderLibrary() {
  dom.chapterCount.textContent = chapters.length;
  dom.chapterList.replaceChildren(
    ...chapters.map((chapter, index) => {
      const button = document.createElement("button");
      button.className = "chapter-card";
      button.type = "button";
      button.dataset.chapterIndex = String(index);
      button.innerHTML = `
        <span class="chapter-cover">
          <img src="${chapter.pages[0].file}" alt="" loading="lazy" />
        </span>
        <span class="chapter-copy">
          <strong>${chapter.title}</strong>
          <span>${chapter.pages.length} pages</span>
          <em>${chapter.note}</em>
        </span>
      `;
      button.addEventListener("click", () => setChapter(index, 0));
      return button;
    }),
  );
}

function renderChapterSelect() {
  dom.chapterSelect.replaceChildren(
    ...chapters.map((chapter, index) => {
      const option = document.createElement("option");
      option.value = String(index);
      option.textContent = `${chapter.title} (${chapter.note})`;
      return option;
    }),
  );
}

function renderReader({ scrollToPage = false } = {}) {
  const chapter = getCurrentChapter();
  document.body.classList.toggle("single-mode", state.mode === "single");
  disconnectObserver();

  if (state.mode === "single") {
    dom.pages.replaceChildren(createPageFrame(chapter, state.pageIndex, false));
  } else {
    dom.pages.replaceChildren(
      ...chapter.pages.map((_, pageIndex) => createPageFrame(chapter, pageIndex, true)),
    );
    observePages();
  }

  syncUi();

  if (scrollToPage && state.mode === "scroll") {
    requestAnimationFrame(scrollToCurrentPage);
  }
}

function createPageFrame(chapter, pageIndex, lazy) {
  const page = chapter.pages[pageIndex];
  const frame = document.createElement("figure");
  frame.className = "page-frame";
  frame.dataset.pageIndex = String(pageIndex);

  const img = document.createElement("img");
  img.src = page.file;
  img.alt = `${MANGA.title} golf manga page ${page.number}: ${page.title}`;
  img.decoding = "async";
  if (page.number === 1 || pageIndex === 0) img.fetchPriority = "high";
  if (lazy) img.loading = "lazy";

  frame.append(img);
  return frame;
}

function observePages() {
  pageObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      const nextPageIndex = Number(visible.target.dataset.pageIndex);
      if (nextPageIndex === state.pageIndex) return;

      state.pageIndex = nextPageIndex;
      syncUi({ updateHash: false });
      trackCurrentPage("scroll");
      saveState();
    },
    {
      rootMargin: "-44% 0px -48% 0px",
      threshold: [0.2, 0.45, 0.7],
    },
  );

  document.querySelectorAll(".page-frame").forEach((page) => pageObserver.observe(page));
}

function disconnectObserver() {
  if (!pageObserver) return;
  pageObserver.disconnect();
  pageObserver = null;
}

function syncUi({ updateHash = true } = {}) {
  const chapter = getCurrentChapter();
  const page = chapter.pages[state.pageIndex];
  dom.chapterTitle.textContent = `${chapter.title} · ${page.title}`;
  dom.pageCounter.textContent = `P${page.number} / ${MANGA.plannedPages} · ${state.pageIndex + 1} / ${chapter.pages.length}`;
  dom.chapterSelect.value = String(state.chapterIndex);
  dom.directionToggle.checked = state.direction === "rtl";
  dom.zoomRange.value = String(state.zoom);
  dom.toggleMode.setAttribute(
    "title",
    state.mode === "single" ? "Switch to scroll mode" : "Switch to single page mode",
  );
  dom.toggleMode.setAttribute(
    "aria-label",
    state.mode === "single" ? "Switch to scroll mode" : "Switch to single page mode",
  );
  dom.previousPage.disabled = state.chapterIndex === 0 && state.pageIndex === 0;
  dom.nextPage.disabled =
    state.chapterIndex === chapters.length - 1 && state.pageIndex === chapter.pages.length - 1;
  dom.progressFill.style.width = `${(page.number / MANGA.plannedPages) * 100}%`;

  document.querySelectorAll(".chapter-card").forEach((card) => {
    card.classList.toggle("active", Number(card.dataset.chapterIndex) === state.chapterIndex);
  });

  if (updateHash) {
    const nextHash = `#chapter-${state.chapterIndex + 1}/page-${state.pageIndex + 1}`;
    if (window.location.hash !== nextHash) {
      history.replaceState(null, "", nextHash);
    }
  }
}

function applyPreferences() {
  document.body.classList.toggle("light-theme", state.theme === "light");
  document.documentElement.style.setProperty("--reader-width", `${state.zoom * 10}px`);
  dom.zoomRange.value = String(state.zoom);
}

function setChapter(chapterIndex, pageIndex) {
  state.chapterIndex = chapterIndex;
  state.pageIndex = pageIndex;
  clampState();
  renderReader({ scrollToPage: true });
  trackEvent("chapter_select", getTrackingContext({ source: "chapter_control" }));
  trackCurrentPage("chapter_select");
  saveState();
}

function turnPage(step) {
  const chapter = getCurrentChapter();
  let nextPage = state.pageIndex + step;
  let nextChapter = state.chapterIndex;

  if (nextPage >= chapter.pages.length) {
    if (state.chapterIndex >= chapters.length - 1) return;
    nextChapter += 1;
    nextPage = 0;
  }

  if (nextPage < 0) {
    if (state.chapterIndex <= 0) return;
    nextChapter -= 1;
    nextPage = chapters[nextChapter].pages.length - 1;
  }

  const chapterChanged = nextChapter !== state.chapterIndex;
  state.chapterIndex = nextChapter;
  state.pageIndex = nextPage;
  clampState();

  if (state.mode === "single") {
    renderReader({ scrollToPage: true });
  } else if (chapterChanged) {
    renderReader({ scrollToPage: true });
  } else {
    syncUi();
    scrollToCurrentPage();
  }

  trackEvent(
    "reader_page_turn",
    getTrackingContext({
      step,
      source: "page_button_or_keyboard",
    }),
  );
  trackCurrentPage("page_turn");
  saveState();
}

function scrollToCurrentPage() {
  const page = document.querySelector(`[data-page-index="${state.pageIndex}"]`);
  if (!page) return;

  const targetTop = page.getBoundingClientRect().top + window.scrollY - getStickyOffset();
  window.scrollTo({ behavior: "smooth", top: Math.max(0, targetTop) });
}

function getStickyOffset() {
  const topbar = document.querySelector(".reader-topbar")?.getBoundingClientRect().height || 0;
  const toolbar = document.querySelector(".reader-toolbar")?.getBoundingClientRect().height || 0;
  return topbar + toolbar + 14;
}

function getCurrentChapter() {
  return chapters[state.chapterIndex];
}

function getTrackingContext(extra = {}) {
  const chapter = getCurrentChapter();
  const page = chapter.pages[state.pageIndex];

  return {
    series_title: MANGA.title,
    chapter_id: chapter.id,
    chapter_index: state.chapterIndex + 1,
    chapter_title: chapter.title,
    page_number: page.number,
    page_index_in_chapter: state.pageIndex + 1,
    page_title: page.title,
    planned_pages: MANGA.plannedPages,
    available_pages: MANGA.availablePages,
    reader_mode: state.mode,
    theme: state.theme,
    direction: state.direction,
    zoom: state.zoom,
    ...extra,
  };
}

function trackCurrentPage(source) {
  trackEvent("manga_page_view", getTrackingContext({ source }));
}

function trackEvent(name, params = {}) {
  window.trackFairwayEvent?.(name, params);
}

function clamp(value, min, max) {
  return Math.min(Math.max(Number(value) || 0, min), max);
}
