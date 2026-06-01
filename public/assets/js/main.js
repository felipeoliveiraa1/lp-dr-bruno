/* CLINIC PERFECT FACE — interactions */
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Header scroll state ---- */
  var header = document.querySelector('.header');
  var waFloat = document.querySelector('.wa-float');
  function onScroll() {
    var y = window.scrollY;
    if (header) header.classList.toggle('scrolled', y > 40);
    if (waFloat) waFloat.classList.toggle('show', y > 600);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu ---- */
  var burger = document.querySelector('.burger');
  if (burger) {
    burger.addEventListener('click', function () {
      document.body.classList.toggle('menu-open');
    });
    document.querySelectorAll('.mobile-menu a').forEach(function (a) {
      a.addEventListener('click', function () { document.body.classList.remove('menu-open'); });
    });
  }

  /* ---- Reveal on scroll ---- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- Duplicate marquee content for seamless loop ---- */
  document.querySelectorAll('.marquee__track').forEach(function (t) {
    t.innerHTML = t.innerHTML + t.innerHTML;
  });

  /* ---- Hero parallax (subtle) ---- */
  var heroFrame = document.querySelector('[data-parallax]');
  if (heroFrame && !reduce) {
    window.addEventListener('scroll', function () {
      var y = window.scrollY;
      if (y < window.innerHeight) {
        heroFrame.style.transform = 'translateY(' + (y * 0.06) + 'px)';
      }
    }, { passive: true });
  }

  /* ---- Smooth scroll for anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (ev) {
      var id = a.getAttribute('href');
      if (id.length > 1) {
        var el = document.querySelector(id);
        if (el) {
          ev.preventDefault();
          var top = el.getBoundingClientRect().top + window.scrollY - 70;
          window.scrollTo({ top: top, behavior: reduce ? 'auto' : 'smooth' });
        }
      }
    });
  });

  /* ---- Custom gold cursor (fine pointer only) ---- */
  if (window.matchMedia('(pointer:fine)').matches && !reduce) {
    var dot = document.createElement('div'); dot.className = 'cursor-dot';
    var ring = document.createElement('div'); ring.className = 'cursor-ring';
    document.body.appendChild(dot); document.body.appendChild(ring);
    document.body.classList.add('cursor-on');
    var rx = 0, ry = 0, dx = 0, dy = 0;
    document.addEventListener('mousemove', function (e) {
      dx = e.clientX; dy = e.clientY;
      dot.style.transform = 'translate(' + dx + 'px,' + dy + 'px) translate(-50%,-50%)';
    });
    (function loop() {
      rx += (dx - rx) * 0.18; ry += (dy - ry) * 0.18;
      ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px) translate(-50%,-50%)';
      requestAnimationFrame(loop);
    })();
    document.querySelectorAll('a,button,.tcard,.gitem,.pillar').forEach(function (el) {
      el.addEventListener('mouseenter', function () { ring.classList.add('hover'); });
      el.addEventListener('mouseleave', function () { ring.classList.remove('hover'); });
    });
  }

  /* ---- Year ---- */
  var y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
