(function () {
  const sentScrollDepths = new Set();

  function canTrack() {
    return typeof window.gtag === "function";
  }

  function trackEvent(name, params) {
    if (!canTrack()) {
      return;
    }

    window.gtag("event", name, params || {});
  }

  function setupClickTracking() {
    document.querySelectorAll("[data-track-cta]").forEach((element) => {
      element.addEventListener("click", () => {
        trackEvent("cta_click", {
          button_name: element.dataset.trackCta,
        });
      });
    });

    document.querySelectorAll("[data-mountain-link]").forEach((element) => {
      element.addEventListener("click", () => {
        trackEvent("mountain_view", {
          mountain_name: element.dataset.mountainLink,
        });
      });
    });
  }

  function setupScrollDepthTracking() {
    const depths = [25, 50, 75, 90];

    window.addEventListener(
      "scroll",
      () => {
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (documentHeight <= 0) {
          return;
        }

        const percent = Math.round((window.scrollY / documentHeight) * 100);
        depths.forEach((depth) => {
          if (percent >= depth && !sentScrollDepths.has(depth)) {
            sentScrollDepths.add(depth);
            trackEvent("scroll_depth", { percent: depth });
          }
        });
      },
      { passive: true }
    );
  }

  window.siteAnalytics = {
    trackEvent,
    trackMountainView(mountainName) {
      trackEvent("mountain_view", { mountain_name: mountainName });
    },
    trackQuizStart() {
      trackEvent("quiz_start");
    },
    trackQuizResult(mountainName) {
      trackEvent("quiz_result", { mountain_name: mountainName });
    },
    trackGalleryOpen(mountainName) {
      trackEvent("gallery_open", { mountain_name: mountainName });
    },
  };

  document.addEventListener("DOMContentLoaded", () => {
    setupClickTracking();
    setupScrollDepthTracking();
  });
})();
