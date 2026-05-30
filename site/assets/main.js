/* ============================================================================
   Behaviour: language toggle (state lives in the URL, never localStorage),
   internal-link language persistence, copy-email, and a gentle scroll reveal.
   Vanilla JS, no dependencies. English is already in the HTML; this only swaps
   to German when ?lang=de is present, then lets you toggle back and forth.
   ========================================================================== */
(function () {
  "use strict";

  var SUPPORTED = ["en", "de"];

  function getLang() {
    var p = new URLSearchParams(window.location.search).get("lang");
    return SUPPORTED.indexOf(p) !== -1 ? p : "en";
  }

  // Wire CONFIG-driven links (Calendly, LinkedIn, email, CV) into the page.
  function applyConfig() {
    document.querySelectorAll("[data-href='calendly']").forEach(function (a) {
      a.setAttribute("href", CONFIG.calendly);
    });
    document.querySelectorAll("[data-href='linkedin']").forEach(function (a) {
      a.setAttribute("href", CONFIG.linkedin);
    });
    document.querySelectorAll("[data-href='email']").forEach(function (a) {
      a.setAttribute("href", "mailto:" + CONFIG.email);
    });
    document.querySelectorAll("[data-href='cv']").forEach(function (a) {
      a.setAttribute("href", CONFIG.cvPath);
    });
  }

  // Swap every translatable string for the chosen language.
  function applyLang(lang) {
    var dict = I18N[lang] || I18N.en;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });

    // <html lang> for assistive tech + correct hyphenation.
    document.documentElement.setAttribute("lang", lang);

    // <title> + meta description per page (page sets its own keys).
    var titleKey = document.body.getAttribute("data-title-key");
    var descKey = document.body.getAttribute("data-desc-key");
    if (titleKey && dict[titleKey]) document.title = dict[titleKey];
    if (descKey && dict[descKey]) {
      var m = document.querySelector('meta[name="description"]');
      if (m) m.setAttribute("content", dict[descKey]);
    }

    // Reflect state on the EN/DE toggle.
    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      var on = btn.getAttribute("data-lang-btn") === lang;
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      btn.classList.toggle("is-active", on);
    });

    // Keep the language when moving between our own pages.
    document.querySelectorAll("[data-internal]").forEach(function (a) {
      var url = new URL(a.getAttribute("href"), window.location.origin);
      if (lang === "en") url.searchParams.delete("lang");
      else url.searchParams.set("lang", lang);
      a.setAttribute("href", url.pathname + url.search);
    });
  }

  function setLang(lang, push) {
    var url = new URL(window.location.href);
    if (lang === "en") url.searchParams.delete("lang");
    else url.searchParams.set("lang", lang);
    history[push ? "pushState" : "replaceState"]({}, "", url.pathname + url.search + url.hash);
    applyLang(lang);
  }

  function wireToggle() {
    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        setLang(btn.getAttribute("data-lang-btn"), true);
      });
    });
    // Honour browser back/forward.
    window.addEventListener("popstate", function () {
      applyLang(getLang());
    });
  }

  // Copy-email button with graceful fallback to a mailto link.
  function wireCopyEmail() {
    document.querySelectorAll("[data-copy-email]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var done = (I18N[getLang()] || I18N.en).cta_email_done;
        var original = btn.textContent;
        function flash() {
          btn.textContent = done;
          setTimeout(function () {
            applyLang(getLang()); // restores the correct label in current lang
          }, 1600);
        }
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(CONFIG.email).then(flash, function () {
            window.location.href = "mailto:" + CONFIG.email;
          });
        } else {
          window.location.href = "mailto:" + CONFIG.email;
        }
      });
    });
  }

  // Subtle fade-up as sections enter view; fully skipped for reduced motion.
  function wireReveal() {
    var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var els = document.querySelectorAll("[data-reveal]");
    if (prefersReduced || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  function init() {
    applyConfig();
    applyLang(getLang());
    wireToggle();
    wireCopyEmail();
    wireReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
