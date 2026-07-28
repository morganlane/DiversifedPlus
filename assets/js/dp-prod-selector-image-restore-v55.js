(function () {
  'use strict';

  function restoreProductSelectorImages() {
    document.querySelectorAll('.wrapper-section-prod-selector .prod-selector-bg-image[data-bg]').forEach(function (el) {
      var bg = (el.getAttribute('data-bg') || '').trim();
      if (!bg) return;
      el.style.setProperty('background-image', "url('" + bg.replace(/'/g, '%27') + "')", 'important');
      el.style.setProperty('background-size', 'cover', 'important');
      el.style.setProperty('background-position', 'center', 'important');
      el.style.setProperty('background-repeat', 'no-repeat', 'important');
      el.style.setProperty('opacity', '1', 'important');
      el.style.setProperty('visibility', 'visible', 'important');
      el.style.setProperty('display', 'block', 'important');
    });
  }

  function installHomepageStyles() {
    if (!document.body.classList.contains('dp-page-index')) return;
    if (document.getElementById('dp-homepage-menu-type-fix')) return;

    var style = document.createElement('style');
    style.id = 'dp-homepage-menu-type-fix';
    style.textContent = `
body.dp-page-index #site-header,
body.dp-page-index #site-header .container-fluid,
body.dp-page-index #site-header .row,
body.dp-page-index #site-header .col,
body.dp-page-index #site-header .header-wrapper,
body.dp-page-index #site-header .links-wrapper,
body.dp-page-index #site-header .navs-wrapper,
body.dp-page-index #site-header .main-nav-wrapper {
  overflow: visible !important;
}

body.dp-page-index .section-hero .hero-text .title {
  font-size: clamp(3rem, 5vw, 4.75rem) !important;
  line-height: .98 !important;
  letter-spacing: -.045em !important;
  max-width: 13ch !important;
}
body.dp-page-index .section-home-intro .text-wrapper h1 {
  font-size: clamp(2rem, 3.4vw, 3rem) !important;
  line-height: 1.08 !important;
  letter-spacing: -.035em !important;
}
body.dp-page-index .prod-selector-header {
  font-size: clamp(2rem, 3.2vw, 2.85rem) !important;
  line-height: 1.08 !important;
  letter-spacing: -.035em !important;
}
body.dp-page-index .dp-overview__card h2 {
  font-size: clamp(2rem, 3.1vw, 2.75rem) !important;
  line-height: 1.1 !important;
  letter-spacing: -.035em !important;
}
body.dp-page-index .heading-centered {
  font-size: clamp(2rem, 3vw, 2.75rem) !important;
  line-height: 1.1 !important;
  letter-spacing: -.035em !important;
}
body.dp-page-index .dp-product-logos-band h2 {
  font-size: clamp(1.85rem, 2.7vw, 2.45rem) !important;
  line-height: 1.12 !important;
  letter-spacing: -.03em !important;
}
body.dp-page-index .dp-case-insight-head h2 {
  font-size: clamp(2rem, 2.9vw, 2.55rem) !important;
  line-height: 1.12 !important;
  letter-spacing: -.035em !important;
}
body.dp-page-index .dp-case-cta h2 {
  font-size: clamp(2rem, 3vw, 2.7rem) !important;
  line-height: 1.1 !important;
  letter-spacing: -.035em !important;
}
body.dp-page-index .dp-case-insight-card h3 {
  font-size: clamp(1.2rem, 1.45vw, 1.5rem) !important;
  line-height: 1.25 !important;
}

@media (min-width: 1200px) {
  body.dp-page-index #menu-main-nav,
  body.dp-page-index #menu-main-nav > li {
    position: static !important;
  }
  body.dp-page-index .dp-services-mega-menu,
  body.dp-page-index .dp-news-mega-menu {
    position: fixed !important;
    top: var(--dp-home-mega-top, 142px) !important;
    left: 50% !important;
    right: auto !important;
    width: min(1180px, calc(100vw - 40px)) !important;
    max-width: 1180px !important;
    max-height: calc(100vh - var(--dp-home-mega-top, 142px) - 18px) !important;
    margin: 0 !important;
    overflow-x: hidden !important;
    overflow-y: auto !important;
    box-sizing: border-box !important;
    z-index: 10050 !important;
    opacity: 0 !important;
    visibility: hidden !important;
    pointer-events: none !important;
    transform: translate(-50%, 12px) !important;
    transition: opacity .18s ease, transform .18s ease, visibility .18s ease !important;
  }

  body.dp-page-index .dp-services-mega-parent:hover > .dp-services-mega-menu,
  body.dp-page-index .dp-services-mega-parent:focus-within > .dp-services-mega-menu,
  body.dp-page-index .dp-services-mega-parent.dp-mega-open > .dp-services-mega-menu,
  body.dp-page-index .dp-services-mega-parent.dp-home-mega-open > .dp-services-mega-menu,
  body.dp-page-index .dp-news-mega-parent:hover > .dp-news-mega-menu,
  body.dp-page-index .dp-news-mega-parent:focus-within > .dp-news-mega-menu,
  body.dp-page-index .dp-news-mega-parent.dp-news-open > .dp-news-mega-menu,
  body.dp-page-index .dp-news-mega-parent.dp-mega-open > .dp-news-mega-menu,
  body.dp-page-index .dp-news-mega-parent.dp-home-mega-open > .dp-news-mega-menu {
    opacity: 1 !important;
    visibility: visible !important;
    pointer-events: auto !important;
    transform: translate(-50%, 0) !important;
  }

  body.dp-page-index .dp-services-mega-shell {
    width: 100% !important;
    display: grid !important;
    grid-template-columns: minmax(230px, .78fr) minmax(0, 2.22fr) !important;
    gap: 24px !important;
    padding: 24px !important;
    align-items: stretch !important;
    box-sizing: border-box !important;
  }
  body.dp-page-index .dp-services-mega-grid {
    min-width: 0 !important;
    display: grid !important;
    grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
    gap: 14px !important;
  }
  body.dp-page-index .dp-services-mega-title {
    font-size: clamp(1.45rem, 1.8vw, 2rem) !important;
    line-height: 1.1 !important;
  }
  body.dp-page-index .dp-services-mega-card-title {
    font-size: clamp(.88rem, .95vw, 1rem) !important;
    line-height: 1.2 !important;
  }
  body.dp-page-index .dp-services-mega-card-body p {
    font-size: clamp(.75rem, .78vw, .86rem) !important;
    line-height: 1.45 !important;
  }
  body.dp-page-index .dp-news-mega-shell {
    width: 100% !important;
    display: grid !important;
    grid-template-columns: minmax(0, 1.2fr) minmax(320px, .8fr) !important;
    gap: 24px !important;
    padding: 24px !important;
    box-sizing: border-box !important;
  }
  body.dp-page-index .dp-news-feature-title {
    font-size: clamp(1.45rem, 1.8vw, 2rem) !important;
    line-height: 1.12 !important;
  }
}

@media (max-width: 1199px) {
  body.dp-page-index .section-hero .hero-text .title {
    font-size: clamp(2.7rem, 7vw, 4rem) !important;
  }
}
@media (max-width: 767px) {
  body.dp-page-index .section-hero .hero-text .title {
    font-size: clamp(2.35rem, 11vw, 3.25rem) !important;
    line-height: 1.02 !important;
    max-width: 12ch !important;
  }
  body.dp-page-index .section-home-intro .text-wrapper h1,
  body.dp-page-index .prod-selector-header,
  body.dp-page-index .dp-overview__card h2,
  body.dp-page-index .heading-centered,
  body.dp-page-index .dp-product-logos-band h2,
  body.dp-page-index .dp-case-insight-head h2,
  body.dp-page-index .dp-case-cta h2 {
    font-size: clamp(1.8rem, 8.5vw, 2.35rem) !important;
    line-height: 1.12 !important;
  }
}`;
    document.head.appendChild(style);
  }

  function initHomepageMegaMenus() {
    if (!document.body.classList.contains('dp-page-index')) return;

    var parents = Array.prototype.slice.call(document.querySelectorAll(
      '#menu-main-nav > li.dp-services-mega-parent, #menu-main-nav > li.dp-news-mega-parent'
    ));
    if (!parents.length) return;

    var header = document.getElementById('site-header');
    var frame = 0;

    function positionMenus() {
      if (window.innerWidth < 1200) {
        document.documentElement.style.removeProperty('--dp-home-mega-top');
        return;
      }
      if (!header) return;
      var top = Math.max(8, Math.round(header.getBoundingClientRect().bottom + 8));
      document.documentElement.style.setProperty('--dp-home-mega-top', top + 'px');
    }

    function queuePosition() {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(positionMenus);
    }

    function setOpen(parent, open) {
      parent.classList.toggle('dp-home-mega-open', open);
      var trigger = parent.querySelector('a[aria-haspopup="true"]');
      if (trigger) trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    function closeAll(except) {
      parents.forEach(function (parent) {
        if (parent !== except) setOpen(parent, false);
      });
    }

    parents.forEach(function (parent) {
      var trigger = parent.querySelector('a[aria-haspopup="true"]');
      var menu = parent.querySelector('.dp-services-mega-menu, .dp-news-mega-menu');
      var closeTimer = 0;

      function openMenu() {
        clearTimeout(closeTimer);
        closeAll(parent);
        positionMenus();
        setOpen(parent, true);
      }

      function closeSoon() {
        clearTimeout(closeTimer);
        closeTimer = setTimeout(function () { setOpen(parent, false); }, 180);
      }

      parent.addEventListener('mouseenter', openMenu);
      parent.addEventListener('mouseleave', closeSoon);
      parent.addEventListener('focusin', openMenu);
      parent.addEventListener('focusout', function (event) {
        if (!parent.contains(event.relatedTarget)) closeSoon();
      });
      if (menu) {
        menu.addEventListener('mouseenter', openMenu);
        menu.addEventListener('mouseleave', closeSoon);
      }
      if (trigger) {
        trigger.addEventListener('click', function (event) {
          if (window.innerWidth < 1200) return;
          event.preventDefault();
          event.stopImmediatePropagation();
          var willOpen = !parent.classList.contains('dp-home-mega-open');
          closeAll(parent);
          setOpen(parent, willOpen);
          positionMenus();
        }, true);
      }
    });

    document.addEventListener('pointerdown', function (event) {
      if (!event.target.closest('#menu-main-nav')) closeAll(null);
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeAll(null);
    });
    window.addEventListener('resize', queuePosition, { passive: true });
    window.addEventListener('scroll', queuePosition, { passive: true });
    positionMenus();
  }

  function boot() {
    restoreProductSelectorImages();
    installHomepageStyles();
    initHomepageMegaMenus();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }

  window.addEventListener('load', restoreProductSelectorImages);
  document.addEventListener('click', function (event) {
    if (event.target.closest && event.target.closest('.wrapper-section-prod-selector')) {
      setTimeout(restoreProductSelectorImages, 0);
      setTimeout(restoreProductSelectorImages, 250);
    }
  });
}());
