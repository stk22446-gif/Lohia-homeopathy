/**
 * Lohia's Homoeopathy – Core Interactions
 * Established Since 1992 | Homeopathic Clinic
 */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    initHeaderScroll();
    initMobileNav();
    initScrollReveal();
    initActiveNav();
    initGalleryCarousel();
    initBranchSwitcher();
    initBackToTop();
    initSmoothAnchors();
    setCurrentYear();
  });

  /* ============================================================
     1. STICKY HEADER SCROLL STATE
  ============================================================ */
  function initHeaderScroll() {
    var header = document.getElementById("botanicalHeader") || document.getElementById("siteHeader");
    if (!header) return;
    function onScroll() {
      header.classList.toggle("is-scrolled", window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ============================================================
     2. MOBILE NAVIGATION DRAWER
  ============================================================ */
  function initMobileNav() {
    var toggles = document.querySelectorAll("#mobileToggle, #mobileNavToggle, .mobile-toggle, .mobile-nav-toggle");
    var drawer = document.getElementById("mobileEditorialDrawer") || document.getElementById("mobileDrawer");
    var backdrop = document.getElementById("mobileDrawerBackdrop") || document.getElementById("mobileBackdrop");
    var closeButtons = document.querySelectorAll("#mobileDrawerClose, #mobileClose, .drawer-close, .mobile-close");
    if (!drawer) return;

    function open() {
      drawer.classList.add("is-open");
      if (backdrop) backdrop.classList.add("is-open");
      toggles.forEach(function (btn) { btn.setAttribute("aria-expanded", "true"); });
      document.body.style.overflow = "hidden";
    }
    function closeMenu() {
      drawer.classList.remove("is-open");
      if (backdrop) backdrop.classList.remove("is-open");
      toggles.forEach(function (btn) { btn.setAttribute("aria-expanded", "false"); });
      document.body.style.overflow = "";
    }

    toggles.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        drawer.classList.contains("is-open") ? closeMenu() : open();
      });
    });

    closeButtons.forEach(function (btn) {
      btn.addEventListener("click", closeMenu);
    });

    if (backdrop) backdrop.addEventListener("click", closeMenu);

    drawer.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && drawer.classList.contains("is-open")) closeMenu();
    });
  }

  /* ============================================================
     3. SCROLL REVEAL
  ============================================================ */
  function initScrollReveal() {
    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var els     = document.querySelectorAll(".reveal-on-scroll");

    if (reduced || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-revealed"); });
      return;
    }

    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -48px 0px" });

    els.forEach(function (el) { io.observe(el); });
  }

  /* ============================================================
     4. ACTIVE NAV LINK
  ============================================================ */
  function initActiveNav() {
    var page = window.location.pathname.split("/").pop() || "index.html";
    if (page === "") page = "index.html";
    var links = document.querySelectorAll(".header-nav .header-nav-link, .nav-menu .nav-link, .drawer-nav a, .mobile-nav .mobile-nav-link");
    links.forEach(function (link) {
      var href = (link.getAttribute("href") || "").split("#")[0].split("?")[0];
      if (href === page) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      } else {
        link.classList.remove("active");
        link.removeAttribute("aria-current");
      }
    });
  }

  /* ============================================================
     5. GALLERY CAROUSEL — 3s auto-slide, touch/swipe
  ============================================================ */
  function initGalleryCarousel() {
    var carousel  = document.getElementById("galleryCarousel");
    if (!carousel) return;

    var track     = document.getElementById("galleryTrack");
    var slides    = carousel.querySelectorAll(".gallery-slide");
    var dots      = carousel.querySelectorAll(".gallery-dot");
    var prevBtn   = document.getElementById("galleryPrev");
    var nextBtn   = document.getElementById("galleryNext");
    if (!track || slides.length === 0) return;

    var current = 0;
    var paused  = false;
    var timer   = null;

    function goTo(index) {
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;
      current = index;
      track.style.transform = "translateX(-" + (current * 100) + "%)";
      dots.forEach(function (dot, i) {
        var active = i === current;
        dot.classList.toggle("active", active);
        dot.setAttribute("aria-selected", String(active));
      });
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    function startTimer() {
      clearInterval(timer);
      timer = setInterval(function () { if (!paused) next(); }, 3000);
    }

    // Controls
    if (nextBtn) nextBtn.addEventListener("click", function () { next(); startTimer(); });
    if (prevBtn) prevBtn.addEventListener("click", function () { prev(); startTimer(); });
    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () { goTo(i); startTimer(); });
    });

    // Pause on hover
    carousel.addEventListener("mouseenter", function () { paused = true; });
    carousel.addEventListener("mouseleave", function () { paused = false; });

    // Touch / swipe
    var txStart = 0, txEnd = 0, swiping = false;
    carousel.addEventListener("touchstart", function (e) {
      txStart = e.touches[0].clientX;
      swiping = true;
      paused  = true;
    }, { passive: true });
    carousel.addEventListener("touchmove", function (e) {
      if (swiping) txEnd = e.touches[0].clientX;
    }, { passive: true });
    carousel.addEventListener("touchend", function () {
      if (!swiping) return;
      swiping = false;
      var diff = txStart - txEnd;
      if (Math.abs(diff) > 44) { diff > 0 ? next() : prev(); startTimer(); }
      setTimeout(function () { paused = false; }, 400);
    });

    goTo(0);
    startTimer();
  }

  /* ============================================================
     6. BRANCH SELECTOR (homepage + clinics page)
  ============================================================ */
  function initBranchSwitcher() {
    // Generic selectors covering both homepage (.branch-tab) 
    // and clinics page (.branch-toggle-btn)
    var tabSets = document.querySelectorAll("[data-branch]");
    if (tabSets.length === 0) return;

    function activateBranch(targetBranch) {
      // Update tab buttons
      document.querySelectorAll("[data-branch]").forEach(function (btn) {
        var match = btn.getAttribute("data-branch") === targetBranch;
        btn.classList.toggle("active", match);
        btn.setAttribute("aria-pressed", String(match));
      });
      // Show/hide panels
      var allPanels = document.querySelectorAll(".branch-panel");
      allPanels.forEach(function (panel) {
        var isBengaluru = panel.classList.contains("branch-panel-bengaluru");
        var isAkola     = panel.classList.contains("branch-panel-akola");
        if (targetBranch === "akola") {
          panel.style.display = isAkola ? "block" : "none";
        } else {
          panel.style.display = isBengaluru ? "block" : "none";
        }
      });
    }

    tabSets.forEach(function (btn) {
      // only wire buttons, not hidden inputs or non-button elements
      if (btn.tagName === "BUTTON" || btn.tagName === "A") {
        btn.addEventListener("click", function () {
          activateBranch(this.getAttribute("data-branch"));
        });
      }
    });

    // Check URL param for pre-selecting branch
    var params = new URLSearchParams(window.location.search);
    var branchParam = params.get("branch");
    if (branchParam === "akola") activateBranch("akola");
  }

  /* ============================================================
     7. BACK TO TOP
  ============================================================ */
  function initBackToTop() {
    var btn = document.getElementById("backToTop");
    if (!btn) return;
    window.addEventListener("scroll", function () {
      btn.classList.toggle("is-visible", window.scrollY > 500);
    }, { passive: true });
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ============================================================
     8. SMOOTH SCROLL FOR HASH ANCHORS
  ============================================================ */
  function initSmoothAnchors() {
    document.querySelectorAll("a[href^=\"#\"]:not([href=\"#\"])").forEach(function (link) {
      link.addEventListener("click", function (e) {
        var id = this.getAttribute("href");
        if (!id || !/^#[a-zA-Z0-9_-]+$/.test(id)) return;
        var target = null;
        try {
          target = document.querySelector(id);
        } catch (err) {
          return;
        }
        if (!target) return;
        e.preventDefault();
        var header = document.getElementById("botanicalHeader") || document.getElementById("siteHeader");
        var offset = header ? header.offsetHeight + 16 : 80;
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - offset,
          behavior: "smooth"
        });
      });
    });
  }

  /* ============================================================
     9. CURRENT YEAR
  ============================================================ */
  function setCurrentYear() {
    var year = new Date().getFullYear();
    document.querySelectorAll(".current-year").forEach(function (el) {
      el.textContent = year;
    });
  }

})();
