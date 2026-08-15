/**
 * AFROSYNTHESE — Gallery Archive & Lightbox Controller
 * Manages category filters, multi-criteria filtering (Location, Year, Category),
 * and fullscreen lightbox viewer with camera EXIF metadata.
 */

document.addEventListener('DOMContentLoaded', () => {
  initGalleryArchive();
  initLightbox();
});

let currentGalleryList = [];
let currentLightboxIndex = 0;

function initGalleryArchive() {
  const galleryGrid = document.querySelector('.masonry-grid');
  if (!galleryGrid || !window.AfroSyntheseData) return;

  currentGalleryList = window.AfroSyntheseData.galleryItems;
  const filterBtns = document.querySelectorAll('.filter-btn');
  const locationSelect = document.getElementById('filterLocation');
  const yearSelect = document.getElementById('filterYear');
  const searchInput = document.getElementById('gallerySearch');

  // Check URL param for initial category
  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get('cat') || 'all';

  function renderGallery(items) {
    galleryGrid.innerHTML = '';

    if (items.length === 0) {
      galleryGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align:center; padding: 4rem 1rem; color: var(--text-muted);">
          <h3>No visual records match your selected criteria.</h3>
          <p style="margin-top:0.5rem;">Try resetting your filters or search terms.</p>
        </div>
      `;
      return;
    }

    items.forEach((item, index) => {
      const el = document.createElement('div');
      el.className = `gallery-item aspect-${item.aspect || 'landscape'} reveal-on-scroll`;
      el.setAttribute('data-id', item.id);
      el.setAttribute('data-index', index);
      el.innerHTML = `
        <div class="gallery-img-wrapper">
          <img src="${item.image}" alt="${item.title}" loading="lazy">
        </div>
        <div class="gallery-item-overlay">
          <span class="gallery-item-cat">${item.categoryLabel}</span>
          <h3 class="gallery-item-title">${item.title}</h3>
          <div class="gallery-item-meta">
            <span>${item.location}</span>
            <span>•</span>
            <span>${item.year}</span>
          </div>
        </div>
      `;

      el.addEventListener('click', () => {
        openLightbox(index, items);
      });

      galleryGrid.appendChild(el);
    });

    // Re-trigger scroll reveal observer
    if (window.initScrollReveal) window.initScrollReveal();
  }

  function applyFilters() {
    const activeCatBtn = document.querySelector('.filter-btn.active');
    const selectedCategory = activeCatBtn ? activeCatBtn.getAttribute('data-filter') : 'all';
    const selectedLocation = locationSelect ? locationSelect.value : 'all';
    const selectedYear = yearSelect ? yearSelect.value : 'all';
    const searchQuery = searchInput ? searchInput.value.trim().toLowerCase() : '';

    const filtered = window.AfroSyntheseData.galleryItems.filter(item => {
      const matchCat = (selectedCategory === 'all' || item.category === selectedCategory);
      const matchLoc = (selectedLocation === 'all' || item.location.toLowerCase().includes(selectedLocation.toLowerCase()));
      const matchYear = (selectedYear === 'all' || String(item.year) === selectedYear);
      const matchSearch = (!searchQuery || item.title.toLowerCase().includes(searchQuery) || item.client.toLowerCase().includes(searchQuery));
      return matchCat && matchLoc && matchYear && matchSearch;
    });

    currentGalleryList = filtered;
    renderGallery(filtered);
  }

  // Bind filter events
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilters();
    });
  });

  locationSelect?.addEventListener('change', applyFilters);
  yearSelect?.addEventListener('change', applyFilters);
  searchInput?.addEventListener('input', applyFilters);

  // Set initial active button if category supplied in URL
  if (initialCategory !== 'all') {
    const targetBtn = document.querySelector(`.filter-btn[data-filter="${initialCategory}"]`);
    if (targetBtn) {
      filterBtns.forEach(b => b.classList.remove('active'));
      targetBtn.classList.add('active');
    }
  }

  applyFilters();
}

/* ==========================================================================
   FULLSCREEN LIGHTBOX MODAL
   ========================================================================== */
function initLightbox() {
  let modal = document.querySelector('.lightbox-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'lightbox-modal';
    modal.innerHTML = `
      <button class="lightbox-close-btn" aria-label="Close Lightbox">✕</button>
      <button class="lightbox-nav-btn prev" aria-label="Previous Image">‹</button>
      <button class="lightbox-nav-btn next" aria-label="Next Image">›</button>
      <div class="lightbox-content">
        <div class="lightbox-media-box">
          <img src="" alt="Enlarged Visual" id="lightboxImg">
        </div>
        <div class="lightbox-info-box">
          <div>
            <span class="eyebrow" id="lightboxCat">EDITORIAL ARCHIVE</span>
            <h2 id="lightboxTitle" style="font-size:1.85rem; margin-bottom:1rem;">Photo Title</h2>
            <p id="lightboxDesc" style="font-size:0.9rem; color:var(--text-secondary); line-height:1.6; margin-bottom:1.5rem;">Description</p>
            <div style="display:flex; flex-direction:column; gap:0.6rem; padding-top:1rem; border-top:1px solid var(--border-subtle); font-size:0.8rem; color:var(--text-muted);">
              <div><strong style="color:var(--text-primary);">Location:</strong> <span id="lightboxLoc">Berlin</span></div>
              <div><strong style="color:var(--text-primary);">Client / Project:</strong> <span id="lightboxClient">AfroSynthese</span></div>
              <div><strong style="color:var(--text-primary);">Year:</strong> <span id="lightboxYear">2026</span></div>
              <div><strong style="color:var(--text-primary);">Equipment & Optics:</strong> <span id="lightboxCamera">Sony FX6</span></div>
              <div><strong style="color:var(--text-primary);">Capture Settings:</strong> <span id="lightboxExif">1/500s • f/2.8 • ISO 800</span></div>
            </div>
          </div>
          <div style="margin-top:2rem; display:flex; gap:0.75rem;">
            <a href="booking.html" class="btn btn-gold btn-sm" style="flex:1;">Inquire Coverage</a>
            <button class="btn btn-secondary btn-sm" id="lightboxShareBtn" title="Copy Link">Share</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  modal.querySelector('.lightbox-close-btn').addEventListener('click', closeLightbox);
  modal.querySelector('.lightbox-nav-btn.prev').addEventListener('click', () => changeLightboxIndex(-1));
  modal.querySelector('.lightbox-nav-btn.next').addEventListener('click', () => changeLightboxIndex(1));

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  window.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') changeLightboxIndex(-1);
    if (e.key === 'ArrowRight') changeLightboxIndex(1);
  });

  modal.querySelector('#lightboxShareBtn')?.addEventListener('click', () => {
    navigator.clipboard?.writeText(window.location.href);
    if (window.showToast) window.showToast('Link copied to clipboard.');
  });
}

function openLightbox(index, items) {
  const modal = document.querySelector('.lightbox-modal');
  if (!modal || !items || !items[index]) return;

  currentGalleryList = items;
  currentLightboxIndex = index;
  updateLightboxContent();

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const modal = document.querySelector('.lightbox-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function changeLightboxIndex(delta) {
  if (!currentGalleryList.length) return;
  currentLightboxIndex = (currentLightboxIndex + delta + currentGalleryList.length) % currentGalleryList.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const modal = document.querySelector('.lightbox-modal');
  const item = currentGalleryList[currentLightboxIndex];
  if (!modal || !item) return;

  modal.querySelector('#lightboxImg').src = item.image;
  modal.querySelector('#lightboxCat').textContent = item.categoryLabel || 'EDITORIAL ARCHIVE';
  modal.querySelector('#lightboxTitle').textContent = item.title;
  modal.querySelector('#lightboxDesc').textContent = item.description || '';
  modal.querySelector('#lightboxLoc').textContent = item.location || 'Europe / Kinshasa';
  modal.querySelector('#lightboxClient').textContent = item.client || 'AfroSynthese';
  modal.querySelector('#lightboxYear').textContent = item.year || '2026';
  modal.querySelector('#lightboxCamera').textContent = item.camera || 'High-Resolution Cinema Gear';
  modal.querySelector('#lightboxExif').textContent = item.exif || 'Fine-Art Editorial Grade';
}
