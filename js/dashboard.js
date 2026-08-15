/**
 * AFROSYNTHESE — Client & Agent Portal Controller
 * Manages bookings list, media downloads, call sheets, overtime logger,
 * daily field reports, and invoice views.
 */

document.addEventListener('DOMContentLoaded', () => {
  initClientDashboard();
  initAgentDashboard();
});

function initClientDashboard() {
  const bookingsTableBody = document.getElementById('clientBookingsList');
  if (!bookingsTableBody) return;

  const defaultDemoBookings = [
    {
      id: 'BK-948201',
      eventType: 'Weddings',
      date: '2026-09-18',
      location: 'Paris, France',
      service: 'Photo + Video (8 Hours)',
      status: 'Confirmed (In Production)',
      galleryLink: 'photography.html?cat=weddings'
    },
    {
      id: 'BK-817290',
      eventType: 'Concerts',
      date: '2026-06-12',
      location: 'Berlin, Germany',
      service: 'Photography (4 Hours)',
      status: 'Delivered (High-Res Ready)',
      galleryLink: 'photography.html?cat=concerts'
    }
  ];

  const localBookings = JSON.parse(localStorage.getItem('afrosynthese_bookings') || '[]');
  const allBookings = [...localBookings, ...defaultDemoBookings];

  bookingsTableBody.innerHTML = allBookings.map(b => `
    <tr>
      <td><strong>${b.id}</strong></td>
      <td>${b.eventType || 'Event'}</td>
      <td>${b.date || '2026-09-18'}</td>
      <td>${b.location || 'Europe'}</td>
      <td><span class="badge ${b.status?.includes('Delivered') ? 'badge-success' : 'badge-gold'}">${b.status || 'Active'}</span></td>
      <td>
        <a href="${b.galleryLink || 'photography.html'}" class="btn btn-secondary btn-sm" style="padding:0.4rem 0.8rem; font-size:0.7rem;">Access Media</a>
      </td>
    </tr>
  `).join('');

  // Invoice demo download
  document.querySelectorAll('.btn-download-invoice').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (window.showToast) window.showToast('Generating official PDF invoice receipt...');
      setTimeout(() => {
        alert('Official AfroSynthese Invoice\nTax No: 13/206/00090\nCEO: Darrell-Fedele Amisi\nBeneficiary: 20% Jardin d’adoration e.V.\nStatus: Paid / Registered');
      }, 500);
    });
  });

  // Client message submit
  document.getElementById('clientMsgForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const msgInput = document.getElementById('clientMsgInput');
    if (msgInput && msgInput.value.trim()) {
      if (window.showToast) window.showToast('Message transmitted to executive concierge desk.');
      msgInput.value = '';
    }
  });
}

function initAgentDashboard() {
  const reportForm = document.getElementById('agentDailyReportForm');
  if (!reportForm) return;

  reportForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const eventName = document.getElementById('reportEventName')?.value;
    const hours = document.getElementById('reportHours')?.value;
    const notes = document.getElementById('reportNotes')?.value;

    const report = {
      id: 'REP-' + Date.now(),
      agent: 'Marc-Aurèle V. (Lead Cinematographer)',
      event: eventName,
      hours: hours,
      notes: notes,
      date: new Date().toLocaleDateString()
    };

    const existingReports = JSON.parse(localStorage.getItem('afrosynthese_agent_reports') || '[]');
    existingReports.unshift(report);
    localStorage.setItem('afrosynthese_agent_reports', JSON.stringify(existingReports));

    if (window.showToast) window.showToast('Daily field production report logged successfully.');
    reportForm.reset();
  });
}
