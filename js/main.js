/* ============================================================
   Bedour Alayyad — XR Portfolio
   Editable content lives in CONTACT + PROJECTS below.
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Editable content ---------- */
  var CONTACT = {
    email: 'bedourahmadal@gmail.com',
    whatsapp: '966549466436',
    whatsappMessage: 'Hi Bedour, I saw your XR portfolio and would love to connect.',
    linkedin: 'https://www.linkedin.com/in/bedour-a-alayyad-9b4511218'
  };

  var PROJECTS = [
    {
      id: 'beautymr',
      featured: true,
      title: { en: 'BeautyMR', ar: 'BeautyMR' },
      category: { en: 'Mixed Reality · Intelligent Interaction', ar: 'واقع مختلط · تفاعل ذكي' },
      description: {
        en: 'A Mixed Reality beauty experience that explores intelligent, immersive interaction and spatial user interfaces.',
        ar: 'تجربة تجميل بالواقع المختلط تستكشف التفاعل الغامر الذكي وواجهات المستخدم المكانية.'
      },
      mediaType: 'video',
      media: 'images/beautymr.mp4',
      poster: 'images/poster-beautymr.jpg',
      technologies: ['Unity', 'C#', 'Meta Quest', 'Meta XR SDK', 'Computer Vision']
    },
    {
      id: 'mineral',
      featured: true,
      title: { en: 'Mineral Intelligence', ar: 'Mineral Intelligence' },
      category: { en: 'XR · Industry · Spatial Computing', ar: 'واقع ممتد · صناعة · حوسبة مكانية' },
      description: {
        en: 'An immersive concept that presents industrial and mineral information through spatial and interactive visualisation.',
        ar: 'مفهوم غامر يعرض المعلومات الصناعية والمعدنية عبر تصوّر مكاني تفاعلي.'
      },
      mediaType: 'video',
      media: 'images/mineral.mp4',
      poster: 'images/poster-mineral.jpg',
      technologies: ['Unity', 'C#', 'Computer Vision', 'Artificial Intelligence']
    },
    {
      id: 'vrlingo',
      title: { en: 'VRlingo', ar: 'VRlingo' },
      category: { en: 'Virtual Reality · Education', ar: 'واقع افتراضي · تعليم' },
      description: {
        en: 'A Virtual Reality learning experience designed to make language practice more immersive, engaging, and interactive.',
        ar: 'تجربة تعلّم بالواقع الافتراضي تجعل ممارسة اللغة أكثر غمرًا وتشويقًا وتفاعلًا.'
      },
      mediaType: 'video',
      media: 'images/vrlingo.mp4',
      poster: 'images/poster-vrlingo.jpg',
      technologies: ['Unity', 'C#', 'Meta Quest']
    },
    {
      id: 'emergency',
      title: { en: 'Emergency Response Training', ar: 'التدريب على الاستجابة للطوارئ' },
      category: { en: 'VR Training · Simulation', ar: 'تدريب افتراضي · محاكاة' },
      description: {
        en: 'An immersive training simulation designed to support emergency preparedness and practical decision-making in realistic scenarios.',
        ar: 'محاكاة تدريبية غامرة تدعم الجاهزية للطوارئ واتخاذ القرار العملي في سيناريوهات واقعية.'
      },
      mediaType: 'video',
      media: 'images/emergency.mp4',
      poster: 'images/poster-emergency.jpg',
      technologies: ['Unity', 'C#']
    },
    {
      id: 'arbook',
      title: { en: 'AR Book App', ar: 'تطبيق الكتاب المعزّز' },
      category: { en: 'Augmented Reality · Culture · Education', ar: 'واقع معزّز · ثقافة · تعليم' },
      description: {
        en: 'An Augmented Reality cultural application that uses book covers as image targets to reveal interactive 3D content and additional information about each book.',
        ar: 'تطبيق ثقافي بالواقع المعزّز يستخدم أغلفة الكتب كأهداف صورية لإظهار محتوى ثلاثي الأبعاد تفاعلي ومعلومات إضافية عن كل كتاب.'
      },
      features: {
        en: ['Scan book covers as target images', 'Display a related 3D book model', 'Show book details', 'Provide audio content'],
        ar: ['مسح أغلفة الكتب كصور هدف', 'عرض نموذج ثلاثي الأبعاد للكتاب', 'إظهار تفاصيل الكتاب', 'توفير محتوى صوتي']
      },
      mediaType: 'video',
      media: 'images/arbook.mp4',
      poster: 'images/poster-arbook.jpg',
      technologies: ['Unity', 'C#', 'Vuforia', 'Augmented Reality', 'Android']
    },
    {
      id: 'arplants',
      title: { en: 'AR Plants Application', ar: 'تطبيق النباتات المعزّز' },
      category: { en: 'Augmented Reality · Education', ar: 'واقع معزّز · تعليم' },
      description: {
        en: 'An educational Augmented Reality application that allows users to place and explore interactive 3D plant models in real space and access essential plant-care information.',
        ar: 'تطبيق تعليمي بالواقع المعزّز يتيح وضع نماذج نباتات ثلاثية الأبعاد تفاعلية في الفضاء الحقيقي واستكشافها والاطّلاع على إرشادات العناية.'
      },
      features: {
        en: ['Real-time AR plant visualisation', 'Interactive 3D plant models', 'Plant information and care guidance', 'Model scaling and rotation'],
        ar: ['عرض آني للنباتات بالواقع المعزّز', 'نماذج نباتات ثلاثية الأبعاد تفاعلية', 'معلومات النبات وإرشادات العناية', 'تكبير النموذج وتدويره']
      },
      mediaType: 'image',
      media: 'images/plants.jpg',
      technologies: ['Unity', 'C#', 'Vuforia', 'Augmented Reality', 'Android']
    }
  ];

  /* ---------- Helpers ---------- */
  var htmlEl = document.documentElement;
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function bi(obj) {
    return '<span class="lang-en">' + esc(obj.en) + '</span><span class="lang-ar">' + esc(obj.ar) + '</span>';
  }
  function tags(list) {
    if (!list || !list.length) return '';
    return '<ul class="tags">' + list.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>';
  }

  /* ---------- Language ---------- */
  var STORAGE_KEY = 'portfolio-lang';
  function applyLang(lang) {
    htmlEl.setAttribute('lang', lang === 'ar' ? 'ar' : 'en');
    htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }
  var savedLang = 'en';
  try { savedLang = localStorage.getItem(STORAGE_KEY) || 'en'; } catch (e) {}
  applyLang(savedLang);

  var langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', function () {
      applyLang(htmlEl.getAttribute('dir') === 'rtl' ? 'en' : 'ar');
    });
  }

  /* ---------- Navigation ---------- */
  var nav = document.getElementById('nav');
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  function onScroll() {
    var y = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
    if (nav) nav.classList.toggle('is-scrolled', y > 12);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var open = navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    navLinks.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        navLinks.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- Contact links ---------- */
  var ICONS = {
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" stroke="none"><path d="M17.5 14.4c-.3-.15-1.7-.84-2-.93-.27-.1-.47-.14-.66.15-.2.29-.76.93-.93 1.12-.17.2-.34.22-.63.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.05-.17-.29-.02-.45.13-.6.13-.13.3-.34.44-.51.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.6-.9-2.19-.24-.57-.48-.5-.66-.5h-.56c-.2 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.2 3.03c.15.2 2.06 3.14 5 4.4.7.3 1.24.48 1.67.62.7.22 1.34.19 1.84.12.56-.08 1.7-.7 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.27-.2-.56-.34zM12 2.2C6.6 2.2 2.2 6.6 2.2 12c0 1.73.45 3.35 1.25 4.76L2.2 21.8l5.18-1.36A9.76 9.76 0 0 0 12 21.8c5.4 0 9.8-4.4 9.8-9.8S17.4 2.2 12 2.2z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" stroke="none"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.64h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.75c0-1.37-.03-3.13-1.95-3.13-1.96 0-2.26 1.49-2.26 3.03V21h-4z"/></svg>'
  };

  var contactLinks = document.getElementById('contactLinks');
  if (contactLinks) {
    var items = [];
    if (CONTACT.email) {
      items.push('<a class="contact__link" href="mailto:' + esc(CONTACT.email) + '">' + ICONS.mail +
        '<span><span class="lang-en">Email</span><span class="lang-ar">البريد</span></span></a>');
    }
    if (CONTACT.whatsapp) {
      items.push('<a class="contact__link" target="_blank" rel="noopener" href="https://wa.me/' + esc(CONTACT.whatsapp) +
        '?text=' + encodeURIComponent(CONTACT.whatsappMessage || '') + '">' + ICONS.whatsapp +
        '<span><span class="lang-en">WhatsApp</span><span class="lang-ar">واتساب</span></span></a>');
    }
    if (CONTACT.linkedin) {
      items.push('<a class="contact__link" target="_blank" rel="noopener" href="' + esc(CONTACT.linkedin) + '">' + ICONS.linkedin +
        '<span>LinkedIn</span></a>');
    }
    contactLinks.innerHTML = items.join('');
  }

  /* ---------- Work grid ---------- */
  var grid = document.getElementById('workGrid');
  if (grid) {
    grid.innerHTML = PROJECTS.map(function (p) {
      var media = p.mediaType === 'video'
        ? '<video src="' + esc(p.media) + '" poster="' + esc(p.poster || '') + '" muted loop playsinline preload="none"></video>'
        : '<img src="' + esc(p.media) + '" alt="' + esc(p.title.en) + '" loading="lazy" />';
      return '<article class="card' + (p.featured ? ' card--featured' : '') + '">' +
        '<button class="card__btn" type="button" data-project="' + esc(p.id) + '" aria-label="' + esc(p.title.en) + '">' +
          '<span class="card__media">' + media + '</span>' +
          '<span class="card__body">' +
            '<span class="card__category">' + bi(p.category) + '</span>' +
            '<span class="card__title">' + bi(p.title) + '</span>' +
            '<span class="card__desc">' + bi(p.description) + '</span>' +
            '<span class="card__more"><span class="lang-en">View project</span><span class="lang-ar">عرض المشروع</span>' +
              '<svg class="i-arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>' +
          '</span>' +
        '</button>' +
      '</article>';
    }).join('');
  }

  /* Play a card video only while it is on screen (never all at once) */
  var cardVideos = [].slice.call(document.querySelectorAll('.card__media video'));
  if ('IntersectionObserver' in window && cardVideos.length) {
    var vidObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var v = en.target;
        if (en.isIntersecting) {
          if (v.preload === 'none') v.preload = 'metadata';
          var pr = v.play(); if (pr && pr.catch) pr.catch(function () {});
        } else { try { v.pause(); } catch (e) {} }
      });
    }, { threshold: 0.35 });
    cardVideos.forEach(function (v) { vidObs.observe(v); });
  }

  /* ---------- Project modal ---------- */
  var modal = document.getElementById('projectModal');
  var modalBody = document.getElementById('modalBody');
  var modalClose = document.getElementById('modalClose');

  function openProject(id) {
    var p = PROJECTS.filter(function (x) { return x.id === id; })[0];
    if (!p || !modal || !modal.showModal) return;

    var media = p.mediaType === 'video'
      ? '<video src="' + esc(p.media) + '" poster="' + esc(p.poster || '') + '" controls playsinline preload="metadata" controlslist="nodownload"></video>'
      : '<img src="' + esc(p.media) + '" alt="' + esc(p.title.en) + '" />';

    var features = '';
    if (p.features) {
      features = '<ul class="modal__features">' +
        p.features.en.map(function (f, i) {
          return '<li><span class="lang-en">' + esc(f) + '</span><span class="lang-ar">' + esc(p.features.ar[i] || f) + '</span></li>';
        }).join('') + '</ul>';
    }

    modalBody.innerHTML =
      '<div class="modal__media">' + media + '</div>' +
      '<div class="modal__text">' +
        '<p class="card__category">' + bi(p.category) + '</p>' +
        '<h3 class="modal__title">' + bi(p.title) + '</h3>' +
        '<p class="modal__desc">' + bi(p.description) + '</p>' +
        features +
        tags(p.technologies) +
      '</div>';

    modal.showModal();
    var v = modal.querySelector('video');
    if (v) { var pr = v.play(); if (pr && pr.catch) pr.catch(function () {}); }
  }

  function closeModal() {
    var v = modal && modal.querySelector('video');
    if (v) { try { v.pause(); } catch (e) {} }
    if (modal && modal.open) modal.close();
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-project]');
    if (btn) openProject(btn.getAttribute('data-project'));
  });
  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
    modal.addEventListener('close', function () { if (modalBody) modalBody.innerHTML = ''; });
    modal.addEventListener('cancel', function () {
      var v = modal.querySelector('video'); if (v) { try { v.pause(); } catch (e) {} }
    });
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Active nav link ---------- */
  var linkFor = {};
  [].slice.call(document.querySelectorAll('.nav__links a')).forEach(function (a) {
    var id = (a.getAttribute('href') || '').replace('#', '');
    if (id) linkFor[id] = a;
  });
  var sections = [].slice.call(document.querySelectorAll('section[id]'));
  if ('IntersectionObserver' in window && sections.length) {
    var navObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        Object.keys(linkFor).forEach(function (k) {
          linkFor[k].classList.toggle('is-active', k === en.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach(function (s) { navObs.observe(s); });
  }

  /* ---------- Scroll reveal ---------- */
  var reveals = [].slice.call(document.querySelectorAll(
    '.section__head, .expertise__item, .card, .about__copy, .about__highlight, .tech, .foundation__item, .contact'
  ));
  if ('IntersectionObserver' in window && reveals.length) {
    reveals.forEach(function (el) { el.classList.add('reveal'); });
    var revObs = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); obs.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    reveals.forEach(function (el) { revObs.observe(el); });
    setTimeout(function () {
      if (!document.querySelector('.reveal.is-in')) {
        reveals.forEach(function (el) { el.classList.add('is-in'); });
      }
    }, 1500);
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }
})();
