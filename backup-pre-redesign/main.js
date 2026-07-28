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

  /* ---- Active nav link on scroll ---- */
  var sections = [].slice.call(document.querySelectorAll('section[id], header[id]'));
  var linkFor = {};
  [].slice.call(document.querySelectorAll('.nav-links a')).forEach(function (a) {
    var id = (a.getAttribute('href') || '').replace('#', '');
    if (id) linkFor[id] = a;
  });
  if ('IntersectionObserver' in window && sections.length) {
    var navObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var id = en.target.id;
        Object.keys(linkFor).forEach(function (k) {
          linkFor[k].classList.toggle('active', k === id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach(function (s) { navObs.observe(s); });
  }

  /* ---- Scroll reveal (restrained) ---- */
  var revealTargets = [].slice.call(document.querySelectorAll(
    '.section-head, .work-card, .mini-card, .edu-row, .cert-item, .skill-group, .stack-grid, .hero-bottom, .contact-actions, .contact-lines'
  ));
  if ('IntersectionObserver' in window && revealTargets.length) {
    revealTargets.forEach(function (el) { el.classList.add('reveal'); });
    var revObs = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          obs.unobserve(en.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    revealTargets.forEach(function (el) { revObs.observe(el); });
    // Safety net: if the observer clearly isn't firing (nothing revealed after
    // 1.5s), force everything visible so content is never stuck hidden. When the
    // observer IS working, this is a no-op and scroll-reveal proceeds normally.
    setTimeout(function () {
      if (!document.querySelector('.reveal.in')) {
        revealTargets.forEach(function (el) { el.classList.add('in'); });
      }
    }, 1500);
  } else {
    revealTargets.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- Project category modals ---- */
  function playAll(dlg) { [].slice.call(dlg.querySelectorAll('video')).forEach(function (v) { try { v.currentTime = 0; var pr = v.play(); if (pr && pr.catch) pr.catch(function () {}); } catch (e) {} }); }
  function pauseAll(dlg) { [].slice.call(dlg.querySelectorAll('video')).forEach(function (v) { try { v.pause(); } catch (e) {} }); }
  [].slice.call(document.querySelectorAll('[data-modal]')).forEach(function (btn) {
    btn.addEventListener('click', function () {
      var dlg = document.getElementById(btn.getAttribute('data-modal'));
      if (!dlg || !dlg.showModal) return;
      dlg.showModal();
      playAll(dlg);
    });
  });
  [].slice.call(document.querySelectorAll('.proj-modal')).forEach(function (dlg) {
    function closeDlg() { pauseAll(dlg); if (dlg.open) dlg.close(); }
    var closeBtn = dlg.querySelector('[data-close]');
    if (closeBtn) closeBtn.addEventListener('click', closeDlg);
    dlg.addEventListener('click', function (e) { if (e.target === dlg) closeDlg(); });
    dlg.addEventListener('cancel', function () { pauseAll(dlg); });
  });
})();
