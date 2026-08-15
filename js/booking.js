/**
 * AFROSYNTHESE — Interactive Booking Engine & Price Estimator
 * Handles step-by-step service customization, interactive calendar date selection,
 * real-time deposit/balance calculation, and localStorage demo storage.
 */

document.addEventListener('DOMContentLoaded', () => {
  initBookingWizard();
  initCalendar();
});

let bookingState = {
  eventType: 'Weddings',
  serviceType: 'combo', // 'photography', 'videography', 'combo'
  hours: 6,
  photographers: 1,
  videographers: 1,
  date: null,
  timeStart: '14:00',
  locationCity: 'Berlin, Germany',
  addonDrone: false,
  addonPhotobook: false,
  addonExpress: false,
  clientName: '',
  clientEmail: '',
  clientPhone: '',
  notes: ''
};

function initBookingWizard() {
  const form = document.getElementById('bookingForm');
  if (!form) return;

  // Listen to form input changes
  document.getElementById('serviceTypeSelect')?.addEventListener('change', (e) => {
    bookingState.serviceType = e.target.value;
    updateCrewDefaults();
    calculatePrice();
  });

  document.getElementById('eventTypeSelect')?.addEventListener('change', (e) => {
    bookingState.eventType = e.target.value;
    calculatePrice();
  });

  document.getElementById('durationSelect')?.addEventListener('change', (e) => {
    bookingState.hours = parseInt(e.target.value, 10) || 6;
    calculatePrice();
  });

  document.getElementById('photographerCount')?.addEventListener('input', (e) => {
    bookingState.photographers = parseInt(e.target.value, 10) || 1;
    calculatePrice();
  });

  document.getElementById('videographerCount')?.addEventListener('input', (e) => {
    bookingState.videographers = parseInt(e.target.value, 10) || 0;
    calculatePrice();
  });

  document.getElementById('addonDrone')?.addEventListener('change', (e) => {
    bookingState.addonDrone = e.target.checked;
    calculatePrice();
  });

  document.getElementById('addonPhotobook')?.addEventListener('change', (e) => {
    bookingState.addonPhotobook = e.target.checked;
    calculatePrice();
  });

  document.getElementById('addonExpress')?.addEventListener('change', (e) => {
    bookingState.addonExpress = e.target.checked;
    calculatePrice();
  });

  document.getElementById('locationCity')?.addEventListener('input', (e) => {
    bookingState.locationCity = e.target.value;
    document.getElementById('summaryLocation').textContent = e.target.value || 'Not specified';
  });

  form.addEventListener('submit', handleBookingSubmit);

  updateCrewDefaults();
  calculatePrice();
}

function updateCrewDefaults() {
  const photoInput = document.getElementById('photographerCount');
  const videoInput = document.getElementById('videographerCount');
  if (!photoInput || !videoInput) return;

  if (bookingState.serviceType === 'photography') {
    photoInput.value = 1;
    videoInput.value = 0;
    videoInput.disabled = true;
    photoInput.disabled = false;
  } else if (bookingState.serviceType === 'videography') {
    photoInput.value = 0;
    videoInput.value = 1;
    photoInput.disabled = true;
    videoInput.disabled = false;
  } else {
    photoInput.value = 1;
    videoInput.value = 1;
    photoInput.disabled = false;
    videoInput.disabled = false;
  }
  bookingState.photographers = parseInt(photoInput.value, 10);
  bookingState.videographers = parseInt(videoInput.value, 10);
}

function calculatePrice() {
  if (!window.AfroSyntheseData) return;

  const tiers = window.AfroSyntheseData.pricingTiers[bookingState.serviceType] || window.AfroSyntheseData.pricingTiers.combo;
  // Match closest hours tier
  const tier = tiers.find(t => t.hours === bookingState.hours) || tiers[2];

  let basePrice = tier ? tier.price : 950;

  // Additional crew adjustments
  if (bookingState.serviceType === 'photography' && bookingState.photographers > 1) {
    basePrice += (bookingState.photographers - 1) * (bookingState.hours * 45);
  }
  if (bookingState.serviceType === 'videography' && bookingState.videographers > 1) {
    basePrice += (bookingState.videographers - 1) * (bookingState.hours * 60);
  }
  if (bookingState.serviceType === 'combo') {
    if (bookingState.photographers > 1) basePrice += (bookingState.photographers - 1) * (bookingState.hours * 45);
    if (bookingState.videographers > 1) basePrice += (bookingState.videographers - 1) * (bookingState.hours * 60);
  }

  // Add-ons
  if (bookingState.addonDrone) basePrice += 250;
  if (bookingState.addonPhotobook) basePrice += 180;
  if (bookingState.addonExpress) basePrice += 150;

  const deposit = Math.round(basePrice * 0.3);
  const balance = basePrice - deposit;

  // Update summary UI
  const setTxt = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };

  setTxt('summaryService', bookingState.serviceType === 'photography' ? 'Photography Only' : bookingState.serviceType === 'videography' ? 'Videography Only' : 'Photo + Video Combo');
  setTxt('summaryEvent', bookingState.eventType);
  setTxt('summaryHours', `${bookingState.hours} Hours`);
  setTxt('summaryCrew', `${bookingState.photographers} Photographer(s), ${bookingState.videographers} Videographer(s)`);
  setTxt('summaryTotal', `€${basePrice.toLocaleString()}`);
  setTxt('summaryDeposit', `€${deposit.toLocaleString()}`);
  setTxt('summaryBalance', `€${balance.toLocaleString()}`);
}

function initCalendar() {
  const calGrid = document.querySelector('.calendar-grid');
  const calMonthTitle = document.getElementById('calMonthTitle');
  if (!calGrid || !calMonthTitle) return;

  const date = new Date();
  let currentYear = date.getFullYear();
  let currentMonth = date.getMonth(); // 0-indexed

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  function renderCalendarDays(year, month) {
    calMonthTitle.textContent = `${monthNames[month]} ${year}`;
    calGrid.querySelectorAll('.calendar-day').forEach(el => el.remove());

    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    // Adjust for Monday start (0: Sun -> 6, 1: Mon -> 0)
    const startOffset = (firstDay + 6) % 7;

    for (let i = 0; i < startOffset; i++) {
      const blank = document.createElement('div');
      blank.className = 'calendar-day disabled';
      blank.style.opacity = '0.1';
      calGrid.appendChild(blank);
    }

    const today = new Date();

    for (let d = 1; d <= totalDays; d++) {
      const dayEl = document.createElement('div');
      dayEl.className = 'calendar-day';
      dayEl.textContent = d;

      const thisDate = new Date(year, month, d);
      // Disable past dates
      if (thisDate < new Date(today.getFullYear(), today.getMonth(), today.getDate())) {
        dayEl.classList.add('disabled');
      } else {
        dayEl.addEventListener('click', () => {
          calGrid.querySelectorAll('.calendar-day').forEach(c => c.classList.remove('selected'));
          dayEl.classList.add('selected');
          const formatted = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
          bookingState.date = formatted;
          const summaryDate = document.getElementById('summaryDate');
          if (summaryDate) summaryDate.textContent = `${monthNames[month]} ${d}, ${year}`;
        });
      }

      calGrid.appendChild(dayEl);
    }
  }

  document.getElementById('calPrevBtn')?.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) { currentMonth = 11; currentYear--; }
    renderCalendarDays(currentYear, currentMonth);
  });

  document.getElementById('calNextBtn')?.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) { currentMonth = 0; currentYear++; }
    renderCalendarDays(currentYear, currentMonth);
  });

  renderCalendarDays(currentYear, currentMonth);
}

function handleBookingSubmit(e) {
  e.preventDefault();

  if (!bookingState.date) {
    alert('Please select a date from the calendar before submitting your booking request.');
    return;
  }

  const name = document.getElementById('clientName')?.value || 'Valued Client';
  const email = document.getElementById('clientEmail')?.value || 'client@example.com';
  const phone = document.getElementById('clientPhone')?.value || '';
  const notes = document.getElementById('clientNotes')?.value || '';

  const bookingRecord = {
    id: 'BK-' + Math.floor(100000 + Math.random() * 900000),
    clientName: name,
    clientEmail: email,
    clientPhone: phone,
    eventType: bookingState.eventType,
    serviceType: bookingState.serviceType,
    date: bookingState.date,
    hours: bookingState.hours,
    location: bookingState.locationCity || 'Berlin',
    status: 'Confirmed (Deposit Pending)',
    notes: notes,
    createdAt: new Date().toISOString()
  };

  // Save to demo localStorage
  const existing = JSON.parse(localStorage.getItem('afrosynthese_bookings') || '[]');
  existing.unshift(bookingRecord);
  localStorage.setItem('afrosynthese_bookings', JSON.stringify(existing));

  if (window.showToast) window.showToast('Reservation request submitted successfully!');

  // Redirect to client dashboard after 1.2s
  setTimeout(() => {
    window.location.href = 'client-dashboard.html';
  }, 1200);
}
