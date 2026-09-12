document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("[data-header]");
  const menu = document.querySelector("[data-menu]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const navLinks = Array.from(document.querySelectorAll(".nav__links a[href^='#']"));
  const progressBar = document.querySelector(".scroll-progress__bar");
  const analytics = window.siteAnalytics || {};

  function closeMenu() {
    if (!menu || !menuToggle) {
      return;
    }

    menu.classList.remove("is-open");
    header.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Mở menu");
  }

  function updateScrollState() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;

    header.classList.toggle("is-scrolled", window.scrollY > 18);
    if (progressBar) {
      progressBar.style.width = `${Math.min(progress, 100)}%`;
    }
  }

  function setupNavigation() {
    if (menuToggle) {
      menuToggle.addEventListener("click", () => {
        const isOpen = menu.classList.toggle("is-open");
        header.classList.toggle("is-open", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Đóng menu" : "Mở menu");
      });
    }

    navLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
        closeActiveDetail();
      }
    });
  }

  function setupRevealObserver() {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
  }

  function setupSectionObserver() {
    const observedSections = document.querySelectorAll(".section-observed[id]");
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const id = entry.target.id;
          const theme = entry.target.dataset.theme;

          navLinks.forEach((link) => {
            link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
          });

          if (theme) {
            document.body.className = document.body.className
              .split(" ")
              .filter((name) => !name.startsWith("theme-"))
              .concat(`theme-${theme}`)
              .join(" ");
          }

          if (entry.target.dataset.mountain && analytics.trackMountainView) {
            analytics.trackMountainView(entry.target.dataset.mountain);
          }
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      }
    );

    observedSections.forEach((section) => sectionObserver.observe(section));
  }

  function setupMountainSelector() {
    const buttons = document.querySelectorAll("[data-filter]");
    const cards = document.querySelectorAll("[data-mountain-card]");
    const map = {
      cloud: ["ta-chi-nhu", "lao-than"],
      challenge: ["ky-quan-san", "fansipan"],
      culture: ["yen-tu"],
      beginner: ["lao-than"],
    };

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        const activeCards = map[filter] || [];

        buttons.forEach((item) => item.classList.toggle("is-active", item === button));
        cards.forEach((card) => {
          card.classList.toggle("is-highlighted", activeCards.includes(card.dataset.mountainCard));
        });
      });
    });
  }

  function setupAltitudeAnimation() {
    const chart = document.querySelector("[data-altitude-chart]");
    if (!chart) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          chart.classList.add("is-animated");
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(chart);
  }

  function setupMountainDetails() {
    const detailButtons = document.querySelectorAll("[data-detail-toggle]");
    const detailPanels = document.querySelectorAll(".mountain-detail");

    function openDetail(detail, button) {
      detailPanels.forEach((panel) => {
        if (panel !== detail) {
          panel.classList.remove("is-open");
          panel.hidden = true;
        }
      });

      detail.hidden = false;
      requestAnimationFrame(() => {
        detail.classList.add("is-open");
      });
      document.body.classList.add("is-detail-open");

      detailButtons.forEach((item) => {
        item.setAttribute("aria-expanded", String(item === button));
      });

      if (button && analytics.trackExploreDetailOpen) {
        analytics.trackExploreDetailOpen(button.dataset.mountainLink);
      }

      if (window.location.hash !== `#${detail.id}`) {
        window.history.pushState({ detailId: detail.id }, "", `#${detail.id}`);
      }
    }

    function handleDetailRoute() {
      const detailId = window.location.hash.slice(1);
      const detail = detailId ? document.getElementById(detailId) : null;
      const button = detail ? document.querySelector(`[data-detail-toggle="${detailId}"]`) : null;

      if (detail && detail.classList.contains("mountain-detail")) {
        openDetail(detail, button);
      } else {
        closeActiveDetail();
      }
    }

    detailButtons.forEach((button) => {
      const detail = document.getElementById(button.dataset.detailToggle);
      if (!detail) {
        return;
      }

      button.dataset.defaultLabel = button.textContent;
      button.setAttribute("aria-controls", detail.id);
      button.setAttribute("aria-expanded", "false");

      button.addEventListener("click", () => {
        openDetail(detail, button);
      });
    });

    document.querySelectorAll("[data-detail-back]").forEach((button) => {
      button.addEventListener("click", () => {
        if (window.history.length > 1 && window.location.hash.endsWith("-details")) {
          window.history.back();
        } else {
          closeActiveDetail();
        }
      });
    });

    window.addEventListener("hashchange", handleDetailRoute);
    window.addEventListener("popstate", handleDetailRoute);

    const initialDetail = document.getElementById(window.location.hash.slice(1));
    if (initialDetail && initialDetail.classList.contains("mountain-detail")) {
      const button = document.querySelector(`[data-detail-toggle="${initialDetail.id}"]`);
      openDetail(initialDetail, button);
    }
  }

  function closeActiveDetail() {
    const openPanel = document.querySelector(".mountain-detail.is-open");
    if (!openPanel) {
      document.body.classList.remove("is-detail-open");
      return;
    }

    openPanel.classList.remove("is-open");
    document.body.classList.remove("is-detail-open");
    document.querySelectorAll("[data-detail-toggle]").forEach((button) => {
      button.setAttribute("aria-expanded", "false");
    });

    window.setTimeout(() => {
      openPanel.hidden = true;
    }, 320);
  }

  function setupQuiz() {
    const quiz = document.querySelector("[data-quiz]");
    const result = document.querySelector("[data-quiz-result]");
    if (!quiz || !result) {
      return;
    }

    let started = false;
    const mountains = {
      lao_than: {
        title: "Lảo Thẩn",
        text: "Bạn phù hợp với một chuyến trekking vừa sức, cắm trại và săn mây vào sáng sớm.",
        href: "#lao-than",
      },
      yen_tu: {
        title: "Yên Tử",
        text: "Bạn hợp với hành trình văn hóa, lịch sử và không gian tĩnh tại giữa rừng núi.",
        href: "#yen-tu",
      },
      fansipan: {
        title: "Fansipan",
        text: "Bạn muốn một cột mốc biểu tượng: đứng trên đỉnh cao nhất Việt Nam.",
        href: "#fansipan",
      },
      ta_chi_nhu: {
        title: "Tà Chì Nhù",
        text: "Bạn hợp với biển mây, màu sắc mộng và những khung hình giàu cảm xúc.",
        href: "#ta-chi-nhu",
      },
      ky_quan_san: {
        title: "Ky Quan San",
        text: "Bạn đang tìm một cung đường giàu thử thách, rừng sâu và bình minh Núi Muối.",
        href: "#ky-quan-san",
      },
    };

    quiz.addEventListener("change", () => {
      if (!started && analytics.trackQuizStart) {
        analytics.trackQuizStart();
      }
      started = true;
    });

    quiz.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(quiz);
      const pace = data.get("pace");
      const interest = data.get("interest");
      const priority = data.get("priority");
      let key = "lao_than";

      if (interest === "culture") {
        key = "yen_tu";
      } else if (pace === "hard" || priority === "achievement") {
        key = interest === "cloud" ? "fansipan" : "ky_quan_san";
      } else if (interest === "trekking") {
        key = "fansipan";
      } else if (interest === "cloud" && priority === "view") {
        key = "ta_chi_nhu";
      } else if (interest === "camping" || pace === "easy" || priority === "access") {
        key = "lao_than";
      }

      const selected = mountains[key];
      result.innerHTML = `
        <span>Your peak</span>
        <h3>${selected.title}</h3>
        <p>${selected.text}</p>
        <a class="button button--ghost" href="${selected.href}">Xem ${selected.title}</a>
      `;

      if (analytics.trackQuizResult) {
        analytics.trackQuizResult(key);
      }
    });
  }

  setupNavigation();
  setupRevealObserver();
  setupSectionObserver();
  setupMountainSelector();
  setupAltitudeAnimation();
  setupMountainDetails();
  setupQuiz();
  updateScrollState();

  window.addEventListener("scroll", updateScrollState, { passive: true });
});
