/**
 * AFROSYNTHESE — Enterprise Admin Dashboard Controller
 * Handles analytics chart rendering via Canvas API, booking approval workflows,
 * client & agent management, and revenue monitoring.
 */

document.addEventListener('DOMContentLoaded', () => {
  initAdminDashboard();
  renderAdminCharts();
});

function initAdminDashboard() {
  const adminBookingsList = document.getElementById('adminBookingsList');
  if (!adminBookingsList) return;

  const defaultAdminBookings = [
    { id: 'BK-948201', client: 'Jean-Luc Fontaine', type: 'Weddings', date: '2026-09-18', amount: '€2,550', status: 'Approved' },
    { id: 'BK-817290', client: 'Universal Live Tour', type: 'Concerts', date: '2026-06-12', amount: '€1,850', status: 'Completed' },
    { id: 'BK-501923', client: 'Dr. Kabasele', type: 'Traditional', date: '2026-10-04', amount: '€1,950', status: 'Pending Review' },
    { id: 'BK-772184', client: 'Innovate Summit', type: 'Corporate', date: '2026-11-15', amount: '€3,150', status: 'Approved' }
  ];

  const localBookings = JSON.parse(localStorage.getItem('afrosynthese_bookings') || '[]');
  const combined = [
    ...localBookings.map(b => ({
      id: b.id,
      client: b.clientName || 'Online Booking',
      type: b.eventType || 'Custom Service',
      date: b.date || '2026-10-01',
      amount: '€1,550',
      status: 'Pending Review'
    })),
    ...defaultAdminBookings
  ];

  function renderRows() {
    adminBookingsList.innerHTML = combined.map((b, idx) => `
      <tr>
        <td><strong>${b.id}</strong></td>
        <td>${b.client}</td>
        <td>${b.type}</td>
        <td>${b.date}</td>
        <td style="color:var(--accent-gold); font-weight:600;">${b.amount}</td>
        <td>
          <span class="badge ${b.status === 'Approved' || b.status === 'Completed' ? 'badge-success' : 'badge-warning'}">${b.status}</span>
        </td>
        <td>
          <button class="btn btn-secondary btn-sm" style="padding:0.35rem 0.75rem; font-size:0.7rem;" onclick="toggleBookingStatus(${idx})">
            ${b.status === 'Approved' ? 'Mark Completed' : 'Approve'}
          </button>
        </td>
      </tr>
    `).join('');
  }

  window.toggleBookingStatus = function(index) {
    if (combined[index].status === 'Pending Review') {
      combined[index].status = 'Approved';
      if (window.showToast) window.showToast(`Booking ${combined[index].id} approved.`);
    } else if (combined[index].status === 'Approved') {
      combined[index].status = 'Completed';
      if (window.showToast) window.showToast(`Booking ${combined[index].id} marked as completed.`);
    } else {
      combined[index].status = 'Approved';
    }
    renderRows();
  };

  renderRows();
}

function renderAdminCharts() {
  const canvas = document.getElementById('revenueChartCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const width = canvas.width = canvas.parentElement.clientWidth;
  const height = canvas.height = 240;

  // Monthly revenue data points (Jan - Aug 2026 in €k)
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
  const values = [24, 32, 45, 38, 58, 64, 78, 89]; // In thousands €

  const maxVal = 100;
  const paddingX = 40;
  const paddingY = 30;

  const chartW = width - (paddingX * 2);
  const chartH = height - (paddingY * 2);

  ctx.clearRect(0, 0, width, height);

  // Background Grid Lines
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = paddingY + (chartH / 4) * i;
    ctx.beginPath();
    ctx.moveTo(paddingX, y);
    ctx.lineTo(width - paddingX, y);
    ctx.stroke();

    // Value label
    ctx.fillStyle = '#666';
    ctx.font = '10px Inter, sans-serif';
    ctx.fillText(`€${100 - (i * 25)}k`, 5, y + 3);
  }

  // Draw Gradient Area & Line
  const gradient = ctx.createLinearGradient(0, paddingY, 0, height - paddingY);
  gradient.addColorStop(0, 'rgba(197, 160, 89, 0.35)');
  gradient.addColorStop(1, 'rgba(197, 160, 89, 0.0)');

  const points = values.map((val, idx) => {
    const x = paddingX + (chartW / (values.length - 1)) * idx;
    const y = paddingY + chartH - (val / maxVal) * chartH;
    return { x, y };
  });

  // Area
  ctx.beginPath();
  ctx.moveTo(points[0].x, paddingY + chartH);
  points.forEach(p => ctx.lineTo(p.x, p.y));
  ctx.lineTo(points[points.length - 1].x, paddingY + chartH);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();

  // Line
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  points.forEach(p => ctx.lineTo(p.x, p.y));
  ctx.strokeStyle = '#C5A059';
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Dots & X Labels
  points.forEach((p, idx) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#C5A059';
    ctx.fill();
    ctx.strokeStyle = '#0A0A0A';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Label
    ctx.fillStyle = '#A0A0A0';
    ctx.font = '11px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(labels[idx], p.x, height - 8);
  });
}
