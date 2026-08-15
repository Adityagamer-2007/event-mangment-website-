/**
 * AFROSYNTHESE — Main Application Scripts
 * Initializes core interactions: Custom Cursor, Scroll Reveal, Search Overlay,
 * Cookie Preferences, Toast Notifications, Magnetic Buttons, and 3D Tilts.
 */

document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
  initScrollReveal();
  initGlobalSearch();
  initCookieBanner();
  initPageTransitions();
  initTiltCards();
  initMagneticButtons();
  initParallaxMouse();
});

/* ==========================================================================
   CUSTOM MINIMAL DESKTOP CURSOR (CONTEXT-AWARE & LERPED)
   ========================================================================== */
function initCustomCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const dot = document.createElement('div');
  dot.className = 'custom-cursor-dot';
  const follower = document.createElement('div');
  follower.className = 'custom-cursor-follower';

  document.body.appendChild(dot);
  document.body.appendChild(follower);

  let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
  let followerX = mouseX, followerY = mouseY;
  let isVisible = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

    if (!isVisible) {
      dot.style.opacity = '1';
      follower.style.opacity = '1';
      isVisible = true;
    }
  });

  document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    follower.style.opacity = '0';
    isVisible = false;
  });

  function renderCursor() {
    followerX += (mouseX - followerX) * 0.16;
    followerY += (mouseY - followerY) * 0.16;
    follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Dynamic context-aware cursor labels
  function bindCursorInteractions() {
    const clickables = document.querySelectorAll('a, button, .filter-btn, .nav-link, .brand-logo');
    clickables.forEach(el => {
      el.addEventListener('mouseenter', () => {
        follower.classList.add('hover-media');
        follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) scale(1.15)`;
      });
      el.addEventListener('mouseleave', () => {
        follower.classList.remove('hover-media');
        follower.textContent = '';
      });
    });

    const galleryItems = document.querySelectorAll('.gallery-item, .aspect-portrait, .aspect-square');
    galleryItems.forEach(el => {
      el.addEventListener('mouseenter', () => {
        follower.classList.add('hover-media');
        follower.textContent = 'VIEW';
      });
      el.addEventListener('mouseleave', () => {
        follower.classList.remove('hover-media');
        follower.textContent = '';
      });
    });

    const magCards = document.querySelectorAll('.mag-card, .mag-cover-frame');
    magCards.forEach(el => {
      el.addEventListener('mouseenter', () => {
        follower.classList.add('hover-media');
        follower.textContent = 'READ';
      });
      el.addEventListener('mouseleave', () => {
        follower.classList.remove('hover-media');
        follower.textContent = '';
      });
    });

    const videoCards = document.querySelectorAll('.play-film-btn, #videoGrid .tilt-card');
    videoCards.forEach(el => {
      el.addEventListener('mouseenter', () => {
        follower.classList.add('hover-media');
        follower.textContent = 'PLAY';
      });
      el.addEventListener('mouseleave', () => {
        follower.classList.remove('hover-media');
        follower.textContent = '';
      });
    });

    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(el => {
      el.addEventListener('mouseenter', () => {
        follower.classList.add('hover-media');
        follower.textContent = 'EXPLORE';
      });
      el.addEventListener('mouseleave', () => {
        follower.classList.remove('hover-media');
        follower.textContent = '';
      });
    });
  }

  bindCursorInteractions();
  // Rebind after dynamic data injections if needed
  window.rebindCursorInteractions = bindCursorInteractions;
}

/* ==========================================================================
   MAGNETIC BUTTONS (DESKTOP ONLY)
   ========================================================================== */
function initMagneticButtons() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const magneticBtns = document.querySelectorAll('.btn-gold, .btn-primary, .btn-magnetic, .slider-nav-btn');
  magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      btn.style.transform = `translate3d(${x * 0.22}px, ${y * 0.22}px, 0)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate3d(0, 0, 0)';
    });
  });
}

/* ==========================================================================
   3D CARD TILTS WITH PERSPECTIVE & LERP
   ========================================================================== */
function initTiltCards() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const cards = document.querySelectorAll('.tilt-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotX = (y / (rect.height / 2)) * -4;
      const rotY = (x / (rect.width / 2)) * 4;
      card.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

/* ==========================================================================
   MOUSE-FOLLOW PARALLAX DEPTH (FEATURED INTRO & HERO)
   ========================================================================== */
function initParallaxMouse() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const introImage = document.querySelector('.intro-img-frame img');
  if (!introImage) return;

  window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 12;
    const y = (e.clientY / window.innerHeight - 0.5) * 12;
    introImage.style.transform = `translate3d(${x}px, ${y}px, 0) scale(1.02)`;
  });
}

/* ==========================================================================
   INTERSECTION OBSERVER SCROLL REVEAL
   ========================================================================== */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll, .reveal-fade-up, .reveal-fade-left, .reveal-fade-right, .reveal-scale, .reveal-clip');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  elements.forEach((el) => observer.observe(el));
}
window.initScrollReveal = initScrollReveal;

/* ==========================================================================
   GLOBAL FULLSCREEN SEARCH MODAL
   ========================================================================== */
function initGlobalSearch() {
  const searchToggles = document.querySelectorAll('.search-toggle-btn');
  let searchModal = document.querySelector('.search-modal');

  if (!searchModal) {
    searchModal = document.createElement('div');
    searchModal.className = 'search-modal';
    searchModal.innerHTML = `
      <button class="lightbox-close-btn search-close" aria-label="Close search">✕</button>
      <div class="search-input-wrapper">
        <input type="text" class="search-input-field" placeholder="Type to search AfroSynthese archive..." autofocus>
      </div>
      <div class="search-results-box"></div>
    `;
    document.body.appendChild(searchModal);
  }

  const inputField = searchModal.querySelector('.search-input-field');
  const resultsBox = searchModal.querySelector('.search-results-box');
  const closeBtn = searchModal.querySelector('.search-close');

  function openSearch() {
    searchModal.classList.add('active');
    setTimeout(() => inputField.focus(), 100);
    renderSearchResults('');
  }

  function closeSearch() {
    searchModal.classList.remove('active');
    inputField.value = '';
  }

  searchToggles.forEach(btn => btn.addEventListener('click', openSearch));
  closeBtn.addEventListener('click', closeSearch);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchModal.classList.contains('active')) closeSearch();
  });

  inputField.addEventListener('input', (e) => {
    renderSearchResults(e.target.value.trim().toLowerCase());
  });

  function renderSearchResults(query) {
    if (!window.AfroSyntheseData) return;

    let html = '';
    const { services, galleryItems, magazines, articles } = window.AfroSyntheseData;

    const matchedServices = services.filter(s => !query || s.title.toLowerCase().includes(query) || s.description.toLowerCase().includes(query));
    const matchedGalleries = galleryItems.filter(g => !query || g.title.toLowerCase().includes(query) || g.location.toLowerCase().includes(query));
    const matchedArticles = articles.filter(a => !query || a.title.toLowerCase().includes(query) || a.excerpt.toLowerCase().includes(query));
    const matchedMagazines = magazines.filter(m => !query || m.title.toLowerCase().includes(query));

    if (matchedServices.length) {
      matchedServices.slice(0, 3).forEach(s => {
        html += `
          <a href="${s.page}" class="search-result-item">
            <div>
              <span class="eyebrow">Service</span>
              <h4 style="margin:0.2rem 0;">${s.title}</h4>
              <p class="text-muted" style="font-size:0.8rem">${s.tagline}</p>
            </div>
            <span class="link-arrow">→</span>
          </a>
        `;
      });
    }

    if (matchedGalleries.length) {
      matchedGalleries.slice(0, 3).forEach(g => {
        html += `
          <a href="galleries.html?item=${g.id}" class="search-result-item">
            <div>
              <span class="eyebrow">Gallery Archive</span>
              <h4 style="margin:0.2rem 0;">${g.title}</h4>
              <p class="text-muted" style="font-size:0.8rem">${g.location} • ${g.year}</p>
            </div>
            <span class="link-arrow">→</span>
          </a>
        `;
      });
    }

    if (matchedArticles.length) {
      matchedArticles.slice(0, 2).forEach(a => {
        html += `
          <a href="articles.html" class="search-result-item">
            <div>
              <span class="eyebrow">Editorial Story</span>
              <h4 style="margin:0.2rem 0;">${a.title}</h4>
              <p class="text-muted" style="font-size:0.8rem">${a.author} • ${a.date}</p>
            </div>
            <span class="link-arrow">→</span>
          </a>
        `;
      });
    }

    if (matchedMagazines.length) {
      matchedMagazines.slice(0, 2).forEach(m => {
        html += `
          <a href="magazine.html" class="search-result-item">
            <div>
              <span class="eyebrow">Magazine</span>
              <h4 style="margin:0.2rem 0;">${m.title}</h4>
              <p class="text-muted" style="font-size:0.8rem">${m.issueNumber} • ${m.releaseDate}</p>
            </div>
            <span class="link-arrow">→</span>
          </a>
        `;
      });
    }

    if (!html) {
      html = `<div style="text-align:center; padding: 2rem; color: var(--text-muted);">No matching results found for "${query}".</div>`;
    }

    resultsBox.innerHTML = html;
  }
}

/* ==========================================================================
   COOKIE CONSENT MODAL
   ========================================================================== */
function initCookieBanner() {
  const consent = localStorage.getItem('afrosynthese_cookie_consent');
  if (consent) return;

  const banner = document.createElement('div');
  banner.className = 'cookie-banner active';
  banner.innerHTML = `
    <div>
      <h4 style="margin-bottom:0.4rem; color:var(--accent-gold);">Privacy & Cookies</h4>
      <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.5;">
        We use essential cookies to enhance your experience, preserve demo session preferences, and deliver cinematic media assets across our platform.
      </p>
    </div>
    <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
      <button id="acceptAllCookies" class="btn btn-gold btn-sm">Accept All</button>
      <button id="rejectCookies" class="btn btn-secondary btn-sm">Reject Non-Essential</button>
      <a href="cookies.html" class="btn btn-secondary btn-sm">Manage</a>
    </div>
  `;
  document.body.appendChild(banner);

  document.getElementById('acceptAllCookies')?.addEventListener('click', () => {
    localStorage.setItem('afrosynthese_cookie_consent', 'accepted_all');
    banner.remove();
    showToast('Cookie preferences saved.');
  });

  document.getElementById('rejectCookies')?.addEventListener('click', () => {
    localStorage.setItem('afrosynthese_cookie_consent', 'essential_only');
    banner.remove();
    showToast('Non-essential cookies declined.');
  });
}

/* ==========================================================================
   TOAST NOTIFICATION SYSTEM
   ========================================================================== */
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.innerHTML = `<span style="color:var(--accent-gold);">★</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
window.showToast = showToast;

/* ==========================================================================
   PAGE TRANSITIONS
   ========================================================================== */
function initPageTransitions() {
  const overlay = document.createElement('div');
  overlay.className = 'page-transition-overlay';
  document.body.appendChild(overlay);

  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('javascript') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('https://wa.me') || link.target === '_blank') {
      return;
    }

    link.addEventListener('click', (e) => {
      if (e.metaKey || e.ctrlKey) return;
      e.preventDefault();
      overlay.classList.add('active');
      setTimeout(() => {
        window.location.href = href;
      }, 250);
    });
  });
}
