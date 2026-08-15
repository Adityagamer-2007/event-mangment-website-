/**
 * AFROSYNTHESE — Cinematic Hero Slider
 * Features smooth Ken Burns zoom, autoplay, slide counter (01 / 06),
 * touch swipe, keyboard navigation, and pause-on-hover.
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
});

function initHeroSlider() {
  const sliderContainer = document.querySelector('.hero-slider-container');
  if (!sliderContainer || !window.AfroSyntheseData) return;

  const slidesData = window.AfroSyntheseData.heroSlides;
  let currentSlide = 0;
  const totalSlides = slidesData.length;
  let autoplayTimer = null;
  let isPaused = false;

  // Build slides markup dynamically if empty
  if (sliderContainer.children.length === 0) {
    slidesData.forEach((slide, index) => {
      const slideEl = document.createElement('div');
      slideEl.className = `hero-slide ${index === 0 ? 'active' : ''}`;
      slideEl.innerHTML = `
        <div class="hero-bg-wrapper">
          <img src="${slide.image}" alt="${slide.title}" class="hero-bg-img" fetchpriority="${index === 0 ? 'high' : 'auto'}">
          <div class="hero-overlay"></div>
        </div>
        <div class="container hero-content">
          <div class="hero-textbox">
            <span class="hero-badge">${slide.badge}</span>
            <h1 class="hero-title">${slide.title}</h1>
            <p class="hero-subtitle">${slide.subtitle}</p>
            <div class="hero-btn-group">
              <a href="${slide.ctaLink}" class="btn btn-gold">${slide.ctaText}</a>
              <a href="${slide.secondaryLink}" class="btn btn-secondary">${slide.secondaryText}</a>
            </div>
          </div>
        </div>
      `;
      sliderContainer.appendChild(slideEl);
    });
  }

  const slides = sliderContainer.querySelectorAll('.hero-slide');
  const counterEl = document.querySelector('.slide-counter');

  function updateCounter() {
    if (!counterEl) return;
    const formattedCurrent = String(currentSlide + 1).padStart(2, '0');
    const formattedTotal = String(totalSlides).padStart(2, '0');
    counterEl.innerHTML = `<span class="current-num">${formattedCurrent}</span> / ${formattedTotal}`;
  }

  function goToSlide(index) {
    slides[currentSlide]?.classList.remove('active');
    currentSlide = (index + totalSlides) % totalSlides;
    slides[currentSlide]?.classList.add('active');
    updateCounter();
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  // Next / Prev Button Controls
  document.querySelector('.slider-nav-btn.next')?.addEventListener('click', () => {
    nextSlide();
    resetAutoplay();
  });

  document.querySelector('.slider-nav-btn.prev')?.addEventListener('click', () => {
    prevSlide();
    resetAutoplay();
  });

  // Autoplay
  function startAutoplay() {
    autoplayTimer = setInterval(() => {
      if (!isPaused) nextSlide();
    }, 7000);
  }

  function resetAutoplay() {
    clearInterval(autoplayTimer);
    startAutoplay();
  }

  sliderContainer.addEventListener('mouseenter', () => { isPaused = true; });
  sliderContainer.addEventListener('mouseleave', () => { isPaused = false; });

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { nextSlide(); resetAutoplay(); }
    if (e.key === 'ArrowLeft') { prevSlide(); resetAutoplay(); }
  });

  // Touch Swipe for mobile
  let touchStartX = 0;
  sliderContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  sliderContainer.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) { nextSlide(); resetAutoplay(); }
    if (touchEndX - touchStartX > 50) { prevSlide(); resetAutoplay(); }
  }, { passive: true });

  updateCounter();
  startAutoplay();
}
