/* ============================================================
   Bedour Ahmad Alayyad — Portfolio interactions
   - Bilingual toggle (EN / AR) with RTL switching
   - Mobile nav
   - Footer year
   ============================================================ */
(function () {
  'use strict';

  var htmlEl = document.documentElement;
  var langToggle = document.getElementById('langToggle');
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  var STORAGE_KEY = 'portfolio-lang';

  /* ---- Language ---- */
  function applyLang(lang) {
    if (lang === 'ar') {
      htmlEl.setAttribute('lang', 'ar');
      htmlEl.setAttribute('dir', 'rtl');
    } else {
      htmlEl.setAttribute('lang', 'en');
      htmlEl.setAttribute('dir', 'ltr');
    }
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  // Restore saved preference (default: English)
  var saved = 'en';
  try { saved = localStorage.getItem(STORAGE_KEY) || 'en'; } catch (e) {}
  applyLang(saved);

  if (langToggle) {
    langToggle.addEventListener('click', function () {
      var next = htmlEl.getAttribute('dir') === 'rtl' ? 'en' : 'ar';
      applyLang(next);
    });
  }

  /* ---- Mobile nav ---- */
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    // Close menu after clicking a link
    navLinks.addEventListener('click', function (e) {
      if (e.target.closest('a')) navLinks.classList.remove('open');
    });
  }

  /* ---- Footer year ---- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
