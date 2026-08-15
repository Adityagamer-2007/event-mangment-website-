/**
 * AFROSYNTHESE — Luxury Digital Magazine Flip Reader
 * Implements double-page reading, realistic page transitions,
 * zoom controls, table of contents, thumbnails, and reading progress.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMagazineReader();
});

function initMagazineReader() {
  const container = document.querySelector('.magazine-spread-container');
  if (!container || !window.AfroSyntheseData) return;

  const pages = window.AfroSyntheseData.magazinePages || [];
  let currentSpreadIndex = 0; // Each spread represents 2 pages on desktop (0 = pages 1-2, 1 = pages 3-4, etc.)
  let isZoomed = false;

  const totalSpreads = Math.ceil(pages.length / 2);

  const leftPageEl = document.getElementById('readerPageLeft');
  const rightPageEl = document.getElementById('readerPageRight');
  const pageCounterEl = document.getElementById('readerPageCounter');
  const progressFill = document.getElementById('readerProgressFill');

  function renderSpread(spreadIdx) {
    currentSpreadIndex = Math.max(0, Math.min(spreadIdx, totalSpreads - 1));

    const leftIdx = currentSpreadIndex * 2;
    const rightIdx = leftIdx + 1;

    const leftData = pages[leftIdx];
    const rightData = pages[rightIdx];

    if (leftPageEl) {
      leftPageEl.innerHTML = leftData ? `
        <div style="height:100%; display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <span class="eyebrow" style="color:var(--accent-gold);">${leftData.title}</span>
            <img src="${leftData.image}" alt="${leftData.title}" class="reader-page-img">
            <p style="font-size:0.95rem; color:var(--text-secondary); line-height:1.7; font-family:var(--font-serif);">${leftData.text}</p>
          </div>
          <div class="reader-page-number">
            <span>AFROSYNTHESE NO. 06</span>
            <span>PAGE ${leftData.pageNum}</span>
          </div>
        </div>
      ` : `<div style="display:flex; align-items:center; justify-content:center; height:100%; color:var(--text-muted);">End of Issue</div>`;
    }

    if (rightPageEl) {
      rightPageEl.innerHTML = rightData ? `
        <div style="height:100%; display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <span class="eyebrow" style="color:var(--accent-gold);">${rightData.title}</span>
            <img src="${rightData.image}" alt="${rightData.title}" class="reader-page-img">
            <p style="font-size:0.95rem; color:var(--text-secondary); line-height:1.7; font-family:var(--font-serif);">${rightData.text}</p>
          </div>
          <div class="reader-page-number">
            <span>EDITORIAL SPREAD</span>
            <span>PAGE ${rightData.pageNum}</span>
          </div>
        </div>
      ` : `<div style="display:flex; align-items:center; justify-content:center; height:100%; color:var(--text-muted); font-size:0.85rem;">AfroSynthese Publishing • 2026</div>`;
    }

    if (pageCounterEl) {
      const p1 = leftData ? leftData.pageNum : '-';
      const p2 = rightData ? rightData.pageNum : '-';
      pageCounterEl.textContent = `Pages ${p1}-${p2} of ${pages.length}`;
    }

    if (progressFill) {
      const pct = Math.round(((currentSpreadIndex + 1) / totalSpreads) * 100);
      progressFill.style.width = `${pct}%`;
    }

    // Save reading position
    localStorage.setItem('afrosynthese_mag_progress', JSON.stringify({
      issue: 'Issue No. 06',
      page: (currentSpreadIndex * 2) + 1,
      timestamp: new Date().toISOString()
    }));
  }

  function nextSpread() {
    if (currentSpreadIndex < totalSpreads - 1) {
      container.classList.add('magazine-page-flip');
      setTimeout(() => {
        renderSpread(currentSpreadIndex + 1);
        container.classList.remove('magazine-page-flip');
      }, 150);
    }
  }

  function prevSpread() {
    if (currentSpreadIndex > 0) {
      container.classList.add('magazine-page-flip');
      setTimeout(() => {
        renderSpread(currentSpreadIndex - 1);
        container.classList.remove('magazine-page-flip');
      }, 150);
    }
  }

  // Bind Buttons
  document.getElementById('readerNextBtn')?.addEventListener('click', nextSpread);
  document.getElementById('readerPrevBtn')?.addEventListener('click', prevSpread);

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'PageDown') nextSpread();
    if (e.key === 'ArrowLeft' || e.key === 'PageUp') prevSpread();
  });

  // Zoom Button
  document.getElementById('readerZoomBtn')?.addEventListener('click', () => {
    isZoomed = !isZoomed;
    const viewport = document.querySelector('.reader-viewport');
    if (viewport) {
      viewport.style.transform = isZoomed ? 'scale(1.25)' : 'scale(1)';
      viewport.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
    }
  });

  // Fullscreen Button
  document.getElementById('readerFullscreenBtn')?.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  });

  renderSpread(0);
}
