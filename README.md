# AfroSynthese — Premium Cinematic Media & Photography Platform

An editorial, cinematic, and luxury digital media platform designed and engineered for **AfroSynthese**. Inspired by the high-contrast, image-first aesthetic of legendary photography portfolios (such as Ross Halfin), this platform is built entirely with clean, vanilla **HTML5, CSS3, and JavaScript**.

---

## 🌟 Executive Summary & Corporate Information

- **Company Name**: AfroSynthese
- **Founded**: Germany in 2020 by **Darrell-Fedele Amisi**, Chairman & Chief Executive Officer.
- **Mission**: International digital media coverage, high-end photography, cinematic videography, and original film productions across European cultural capitals (Berlin, Paris, Brussels, London, Amsterdam) with a dedicated creative bureau in Kinshasa, Democratic Republic of Congo.
- **Corporate Tax Number**: `13/206/00090` (Germany)
- **Charity Beneficiary Commitment**: AfroSynthese contributes **20% of its monthly revenue to Jardin d’adoration e.V.** as an official sponsor of the association.
- **Official Brand Ambassador**: **Her Excellency Louise Nzanga Ramazani** (Democratic Republic of Congo).
- **Official Channels**:
  - **Headquarters**: Berlin, Germany
  - **Central Africa Desk**: Kinshasa, DRC
  - **WhatsApp**: `+49 152 59657007`
  - **Email**: `asep.ev.central@gmail.com`
  - **Banking**: IBAN: `BE06 9052 8819 8222` | SWIFT/BIC: `TRWIBEB1XXX` | PayPal: `asep.ev.central@gmail.com`
  - **Kinshasa Mobile Money**: Account Holder: Thérèse Asengo Shandu | Phone: `+243 990 196 501`

---

## 🎨 Visual & Technical Design System

1. **Editorial & Cinematic Aesthetic**:
   - Palette: Obsidian black (`#0A0A0A`), Deep charcoal (`#121212`), Warm off-white (`#F7F6F2`), Muted champagne gold (`#C5A059`), and African crimson (`#E50914`).
   - Typography: **Cormorant Garamond** (Google Fonts) for editorial luxury serif headlines and **Inter** for legibility across metadata, camera EXIF tags, and forms.
   - Micro-Interactions: Desktop custom cursor with interactive `"VIEW"` expander, subtle 3D card tilt effects, Ken Burns hero slider, double-page 3D magazine flip reader, and smooth scroll reveals.

2. **Technology Stack**:
   - 100% Pure **HTML5**, **CSS3**, and **Vanilla JavaScript** (ES6+).
   - Zero external frontend frameworks (No React, No Next.js, No Tailwind, No npm/node dependencies required).
   - 100% Offline-capable: All photography assets and official vector logos are bundled locally.

---

## 📁 Complete Architecture & Page Directory

```
afrosynthese/
├── index.html                    # Homepage (Hero Ken Burns slider, services, visual archive, magazine, charity)
├── about.html                    # About Us & Darrell-Fedele Amisi CEO Story
├── team.html                     # International Creative Leadership & Bureau Guild
├── services.html                 # 16-Discipline Comprehensive Service Catalogue
├── photography.html              # Photography Portfolio with category filters & lightbox
├── videography.html              # Cinema & Video Portfolio with 4K modal player
├── galleries.html                # Searchable Visual Archive (Location, Year, Category)
├── pricing.html                  # Transparent Pricing Guide (Editable 2h-10h packages)
├── booking.html                  # Interactive Booking Wizard with live calendar & instant quote
├── magazine.html                 # Digital Magazine Showcase & Issue Archive
├── magazine-reader.html          # Interactive Double-Page 3D Flip Magazine Reader
├── subscription.html             # €3.50/mo Digital Magazine Subscription & VIP tiers
├── articles.html                 # Editorial Journalism & Photography Diary
├── community.html                # Creator Community Discussion Board
├── announcements.html            # Official Press Releases & Tour Schedules
├── ambassadors.html              # Her Excellency Louise Nzanga Ramazani Ambassador Profile
├── sponsors.html                 # Institutional Partners & Jardin d’adoration e.V. Spotlight
├── pvc-cards.html                # Professional PVC Card Manufacturing & Quote Tool
├── personalized-products.html    # Handcrafted Photobooks, Acrylic Prints & Canvas
├── cineamisi.html                # Cinéamisi Motion Picture Division & Casting Calls
├── contact.html                  # Executive Concierge Inquiries (Berlin & Kinshasa)
├── login.html                    # Switchable Portal Login (Client / Agent / Admin)
├── register.html                 # Client Portal Registration
├── client-dashboard.html         # Client Portal: Bookings, deliverables download, invoices
├── agent-dashboard.html          # Field Agent Portal: Daily call sheets, hours & field reports
├── admin-dashboard.html          # Enterprise Admin: KPIs, live Canvas revenue chart, approvals
├── terms.html                    # Legal Terms & Service Agreements
├── privacy.html                  # GDPR-Compliant Privacy Policy
├── legal-notice.html             # Impressum (§ 5 TMG) with Tax ID 13/206/00090
├── cookies.html                  # Granular Cookie Consent Settings
├── robots.txt                    # Search Engine Directives
├── sitemap.xml                   # XML Sitemap
├── css/
│   ├── style.css                 # Global tokens, typography, header, footer, modals, buttons
│   ├── animations.css            # Ken Burns, 3D tilts, page flips, shimmer effects
│   └── responsive.css            # Responsive breakpoints (1920px to 480px)
├── js/
│   ├── data.js                   # Master Central Data Store
│   ├── main.js                   # Cursor, scroll reveal, global search modal, toast alerts
│   ├── navigation.js             # Sticky header, mobile drawer menu, active links
│   ├── slider.js                 # Fullscreen Ken Burns hero slider with counter
│   ├── gallery.js                # Masonry layout, multi-criteria filters, EXIF lightbox
│   ├── booking.js                # Interactive calendar, live cost calculator, localStorage
│   ├── magazine.js               # 3D double-page flip reader, zoom, progress bar
│   ├── dashboard.js              # Client and Field Agent portal interactive handlers
│   └── admin.js                  # Enterprise dashboard Canvas revenue charts & approval workflow
└── assets/
    ├── logos/logo.png            # Official AfroSynthese Logo
    ├── images/                   # Curated high-resolution editorial photography
    └── magazines/                # Magazine covers and double-page spread assets
```

---

## 🚀 How to Run Locally

### Option 1: Direct Browser Opening
Simply double-click `index.html` in any modern web browser (Google Chrome, Microsoft Edge, Safari, Firefox).

### Option 2: VS Code Live Server (Recommended)
1. Open the `afrosynthese/` folder inside **Visual Studio Code**.
2. Right-click `index.html` and select **"Open with Live Server"** (or click "Go Live" on the bottom status bar).
3. The platform will launch at `http://127.0.0.1:5500/index.html`.

---

## 🔑 Demo Account Credentials (1-Click Switchable on `login.html`)

- **Client Portal**: `client@afrosynthese.org` → Access `client-dashboard.html`
- **Field Production Agent**: `agent.paris@afrosynthese.org` → Access `agent-dashboard.html`
- **Enterprise Administrator**: `admin@afrosynthese.org` → Access `admin-dashboard.html`

---

## © Copyright & Ownership
© 2020 – 2026 AfroSynthese. All rights reserved. Directed by Darrell-Fedele Amisi.
Beneficiary Partner: Jardin d’adoration e.V. (20% Revenue Allocation).
Tax Number: 13/206/00090 (Germany).
