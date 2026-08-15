/**
 * AFROSYNTHESE — Navigation & Header Controller
 * Handles sticky transparent-to-solid transitions, mobile drawer menu,
 * dropdown interactions, and active page detection.
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileDrawer();
  highlightActiveNav();
});

function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  function checkScroll() {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', checkScroll, { passive: true });
  checkScroll();
}

function initMobileDrawer() {
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  let drawer = document.querySelector('.mobile-drawer');
  let overlay = document.querySelector('.mobile-drawer-overlay');

  if (!drawer && toggleBtn) {
    // Generate mobile drawer if not already in markup
    drawer = document.createElement('div');
    drawer.className = 'mobile-drawer';
    overlay = document.createElement('div');
    overlay.className = 'mobile-drawer-overlay';

    drawer.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2rem;">
        <a href="index.html" class="brand-logo">
          <img src="assets/logos/logo.png" alt="AfroSynthese Logo" style="height:36px;">
        </a>
        <button class="lightbox-close-btn mobile-drawer-close" aria-label="Close menu">✕</button>
      </div>
      <nav class="mobile-nav-list">
        <a href="index.html" class="mobile-nav-link">Home <span>→</span></a>
        <a href="about.html" class="mobile-nav-link">About <span>→</span></a>
        <a href="services.html" class="mobile-nav-link">Services <span>→</span></a>
        <a href="photography.html" class="mobile-nav-link">Photography <span>→</span></a>
        <a href="videography.html" class="mobile-nav-link">Videography <span>→</span></a>
        <a href="galleries.html" class="mobile-nav-link">Galleries <span>→</span></a>
        <a href="magazine.html" class="mobile-nav-link">Magazine <span>→</span></a>
        <a href="cineamisi.html" class="mobile-nav-link">Cinéamisi <span>→</span></a>
        <a href="booking.html" class="mobile-nav-link">Booking <span>→</span></a>
        <a href="pricing.html" class="mobile-nav-link">Pricing <span>→</span></a>
        <a href="community.html" class="mobile-nav-link">Community <span>→</span></a>
        <a href="contact.html" class="mobile-nav-link">Contact <span>→</span></a>
      </nav>
      <div class="mobile-drawer-footer">
        <a href="login.html" class="btn btn-secondary" style="width:100%;">Account Portal</a>
        <a href="booking.html" class="btn btn-gold" style="width:100%;">Book Your Date</a>
        <div style="font-size:0.75rem; color:var(--text-muted); text-align:center; margin-top:0.5rem;">
          Berlin • Kinshasa • Europe
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(drawer);
  }

  function openDrawer() {
    drawer?.classList.add('active');
    overlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer?.classList.remove('active');
    overlay?.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggleBtn?.addEventListener('click', openDrawer);
  drawer?.querySelector('.mobile-drawer-close')?.addEventListener('click', closeDrawer);
  overlay?.addEventListener('click', closeDrawer);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer?.classList.contains('active')) {
      closeDrawer();
    }
  });
}

function highlightActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link, .dash-nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}
