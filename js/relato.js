// Apariciones al hacer scroll: cada bloque .rv / .rvg anima su entrada cuando llega a la pantalla,
// y las animaciones continuas (criaturas, olas) quedan en pausa mientras están fuera de ella.
(function () {
  var items = document.querySelectorAll('.rv, .rvg');
  if (!items.length) return;

  if (!('IntersectionObserver' in window)) {
    for (var i = 0; i < items.length; i++) items[i].classList.add('on');
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      e.target.classList.toggle('on', e.isIntersecting);
    });
  }, { rootMargin: '0px 0px -6% 0px' });

  for (var j = 0; j < items.length; j++) io.observe(items[j]);
})();

// Índice del artículo: marca la sección que se está leyendo y, en pantallas chicas,
// abre y cierra la lista desde la píldora fija.
(function () {
  var nav = document.getElementById('indice');
  if (!nav) return;

  var btn = nav.querySelector('.toc-btn');
  var cur = nav.querySelector('.toc-cur');
  var links = nav.querySelectorAll('.toc-list a');
  var targets = [];
  for (var i = 0; i < links.length; i++) {
    var el = document.getElementById(links[i].hash.slice(1));
    if (el) targets.push({ a: links[i], el: el, parent: parentLink(links[i]) });
  }
  if (!targets.length) return;

  function parentLink(a) {
    var sub = a.closest('.toc-sub');
    return sub ? sub.parentNode.querySelector('a') : null;
  }

  var active = null;
  function setActive(t) {
    if (t === active) return;
    active = t;
    for (var k = 0; k < targets.length; k++) {
      var a = targets[k].a;
      a.classList.remove('is-on', 'is-parent');
      a.removeAttribute('aria-current');
      var li = a.closest('.toc-has');
      if (li) li.classList.remove('open');
    }
    t.a.classList.add('is-on');
    t.a.setAttribute('aria-current', 'location');
    if (t.parent) t.parent.classList.add('is-parent');
    var group = (t.parent || t.a).closest('.toc-has');
    if (group) group.classList.add('open');
    if (cur) cur.textContent = t.a.getAttribute('data-label') || t.a.textContent;
  }

  // La sección activa es la última cuyo inicio ya pasó la línea de lectura (35% de la pantalla).
  function update() {
    var line = Math.min(window.innerHeight * 0.35, 320);
    var found = targets[0];
    for (var k = 0; k < targets.length; k++) {
      if (targets[k].el.getBoundingClientRect().top <= line) found = targets[k];
    }
    setActive(found);
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      ticking = false;
      update();
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();

  if (!btn) return;
  function setOpen(open) {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
  }
  btn.addEventListener('click', function () {
    setOpen(!nav.classList.contains('open'));
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('.toc-list a')) setOpen(false);
  });
  document.addEventListener('click', function (e) {
    if (nav.classList.contains('open') && !nav.contains(e.target)) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      setOpen(false);
      btn.focus();
    }
  });
})();
