/* srdphub.com — shared behaviour: language toggle, mobile menu, forms */
(function () {
  var KEY = 'srdphub-lang';

  function setLang(lang, persist) {
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('.lang-toggle button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });
    if (persist) { try { localStorage.setItem(KEY, lang); } catch (e) {} }
  }

  function detectLang() {
    var saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) {}
    if (saved === 'en' || saved === 'nl') return saved; /* explicit choice wins */
    /* No stored preference: Dutch browser -> nl, anything else -> en */
    var langs = (navigator.languages && navigator.languages.length)
      ? navigator.languages
      : [navigator.language || navigator.userLanguage || ''];
    return langs.some(function (l) { return /^nl/i.test(l); }) ? 'nl' : 'en';
  }

  setLang(detectLang(), false);

  document.addEventListener('click', function (ev) {
    var btn = ev.target.closest('.lang-toggle button');
    if (btn) setLang(btn.dataset.lang, true);

    var burger = ev.target.closest('.nav-burger');
    if (burger) {
      var nav = burger.closest('.nav');
      var open = nav.classList.toggle('menu-open');
      burger.setAttribute('aria-expanded', String(open));
    }
  });

  /* Forms — Formspree-ready.
     Set the real endpoint in each <form action="https://formspree.io/f/XXXX">.
     While the action still contains FORMSPREE_ID, submissions are intercepted
     and the visitor is pointed to hello@srdphub.com instead. */
  document.addEventListener('submit', function (ev) {
    var form = ev.target.closest('form[data-contact]');
    if (!form) return;
    if (form.getAttribute('action').indexOf('FORMSPREE_ID') === -1) return; /* live endpoint: submit normally */
    ev.preventDefault();
    form.querySelectorAll('.form-sent').forEach(function (n) { n.hidden = false; });
    var btn = form.querySelector('button[type="submit"]');
    if (btn) btn.disabled = true;
  });
})();
