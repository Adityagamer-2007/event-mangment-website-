/**
 * AFROSYNTHESE — Official Central Data Store
 * All business information, service lists, portfolios, magazines, pricing,
 * and team data are organized here for clean maintenance and future backend binding.
 */

const AfroSyntheseData = {
  company: {
    name: "AfroSynthese",
    tagline: "Stories Worth Remembering.",
    description: "Premium photography, videography, event coverage, and creative media production across Europe and Kinshasa.",
    foundedYear: 2020,
    foundedCountry: "Germany",
    founder: "Darrell-Fedele Amisi",
    founderRole: "Chairman and Chief Executive Officer",
    taxNumber: "13/206/00090",
    charityCommitment: "AfroSynthese contributes 20% of its monthly revenue to Jardin d’adoration e.V. as an official sponsor of the association.",
    charityPartner: "Jardin d’adoration e.V.",
    ambassador: {
      name: "Her Excellency Louise Nzanga Ramazani",
      country: "Democratic Republic of Congo",
      title: "Official Brand Ambassador & Cultural Diplomat",
      bio: "Her Excellency Louise Nzanga Ramazani represents AfroSynthese in cultural diplomacy, championing African artistic excellence, diaspora heritage storytelling, and international media bridging between Europe and the Democratic Republic of Congo.",
      image: "assets/images/ambassador_louise.jpg"
    },
    contact: {
      germanyHQ: "Berlin, Germany",
      kinshasaBranch: "Kinshasa, Democratic Republic of Congo",
      whatsapp: "+49 152 59657007",
      whatsappRaw: "4915259657007",
      email: "asep.ev.central@gmail.com",
      hours: "Monday – Saturday: 09:00 – 19:00 (CET / WAT)"
    },
    banking: {
      companyName: "AfroSynthese",
      iban: "BE06 9052 8819 8222",
      swiftBic: "TRWIBEB1XXX",
      paypal: "asep.ev.central@gmail.com",
      kinshasaMobileMoney: {
        provider: "Airtel Money",
        accountHolder: "Thérèse Asengo Shandu",
        phone: "+243 990 196 501"
      }
    },
    socialLinks: {
      instagram: "https://instagram.com/afrosynthese",
      tiktok: "https://tiktok.com/@afrosynthese",
      facebook: "https://facebook.com/afrosynthese",
      x: "https://x.com/afrosynthese",
      linkedin: "https://linkedin.com/company/afrosynthese",
      youtube: "https://youtube.com/@afrosynthese",
      whatsapp: "https://wa.me/4915259657007"
    }
  },

  heroSlides: [
    {
      id: 1,
      title: "Stories Worth Remembering.",
      subtitle: "High-end editorial photography & cinematic event documentation bridging Europe and Kinshasa.",
      badge: "01 / 06 — EDITORIAL PRESTIGE",
      category: "Cinematic Media",
      image: "assets/images/hero_slide_1.jpg",
      ctaText: "BOOK YOUR DATE",
      ctaLink: "booking.html",
      secondaryText: "EXPLORE OUR WORK",
      secondaryLink: "photography.html"
    },
    {
      id: 2,
      title: "Timeless Nuptials & Grand Galas.",
      subtitle: "Capturing the elegance, vibrant heritage, and emotional climax of luxury ceremonies.",
      badge: "02 / 06 — CEREMONIAL EXCELLENCE",
      category: "Luxury Weddings",
      image: "assets/images/hero_slide_2.jpg",
      ctaText: "VIEW WEDDINGS",
      ctaLink: "photography.html?cat=weddings",
      secondaryText: "OUR PACKAGES",
      secondaryLink: "pricing.html"
    },
    {
      id: 3,
      title: "Electrifying Concerts & Live Stages.",
      subtitle: "Front-row visual intensity, dynamic lighting capture, and international tour coverage across European arenas.",
      badge: "03 / 06 — LIVE STAGE",
      category: "Concert & Music",
      image: "assets/images/hero_slide_3.jpg",
      ctaText: "EXPLORE CONCERTS",
      ctaLink: "photography.html?cat=concerts",
      secondaryText: "WATCH SHOWREEL",
      secondaryLink: "videography.html"
    },
    {
      id: 4,
      title: "Heritage, Tradition & Modernity.",
      subtitle: "Honoring cultural rituals and contemporary pan-African aesthetics with high-definition visual majesty.",
      badge: "04 / 06 — CULTURAL DIARY",
      category: "Traditional Ceremonies",
      image: "assets/images/hero_slide_4.jpg",
      ctaText: "READ DIARY",
      ctaLink: "articles.html",
      secondaryText: "COMMUNITY HUB",
      secondaryLink: "community.html"
    },
    {
      id: 5,
      title: "Global Summits & Corporate Summits.",
      subtitle: "Executive media production, VIP portraiture, and international conference documentation.",
      badge: "05 / 06 — CORPORATE & DIPLOMACY",
      category: "Corporate Media",
      image: "assets/images/hero_slide_5.jpg",
      ctaText: "CORPORATE SERVICES",
      ctaLink: "services.html",
      secondaryText: "REQUEST QUOTE",
      secondaryLink: "booking.html"
    },
    {
      id: 6,
      title: "Cinéamisi: The Motion Picture Division.",
      subtitle: "Short films, documentaries, high-fashion cinematography, and cinematic storytelling.",
      badge: "06 / 06 — FILM & CINEMA",
      category: "Cinéamisi Productions",
      image: "assets/images/hero_slide_6.jpg",
      ctaText: "ENTER CINÉAMISI",
      ctaLink: "cineamisi.html",
      secondaryText: "FILM ARCHIVE",
      secondaryLink: "videography.html"
    }
  ],

  services: [
    {
      id: "photography",
      title: "Editorial Photography",
      tagline: "Fine-art portraiture, reportage, and high-resolution event documentation.",
      description: "From intimate private galas to grand festivals, our master photographers bring an editorial vision reminiscent of the world's most prestigious archives.",
      icon: "camera",
      image: "assets/images/service_photo.jpg",
      page: "photography.html",
      features: ["Full-frame prime optics", "Color grading & skin retouching", "Private cloud gallery", "Full commercial usage rights"]
    },
    {
      id: "videography",
      title: "Cinematic Videography",
      tagline: "4K/6K cinema production, drone sweeps, and narrative highlight reels.",
      description: "Using cinema-grade sensors, anamorphic glass, and bespoke sound engineering, we produce films that elevate your moments into cinematic history.",
      icon: "video",
      image: "assets/images/service_video.jpg",
      page: "videography.html",
      features: ["Multi-camera 4K/6K capture", "Professional sound recording", "Bespoke music scoring", "Teaser + Full film edits"]
    },
    {
      id: "weddings",
      title: "Wedding Coverage",
      tagline: "Bespoke luxury wedding packages across Europe and Kinshasa.",
      description: "Comprehensive coverage of your civil, religious, and traditional union with graceful storytelling and unobtrusive professionalism.",
      icon: "heart",
      image: "assets/images/service_wedding.jpg",
      page: "photography.html?cat=weddings",
      features: ["Pre-wedding session", "Full-day coverage (Prep to Party)", "Luxury leather photobook", "Drone aerial footage"]
    },
    {
      id: "concerts",
      title: "Concerts & Live Festivals",
      tagline: "Stage photography, backstage access, and multi-angle concert films.",
      description: "Capturing the raw energy, stage dynamics, artist portraits, and crowd adrenaline for touring artists and major festival organizers.",
      icon: "music",
      image: "assets/images/service_concert.jpg",
      page: "photography.html?cat=concerts",
      features: ["Pit & stage access coverage", "Rapid same-night press turnaround", "4K live audio sync video", "Artist social packs"]
    },
    {
      id: "corporate",
      title: "Conferences & Corporate Events",
      tagline: "Summit documentation, keynote capture, and executive headshots.",
      description: "Sophisticated visual assets for annual general meetings, international diplomatic summits, trade expos, and corporate brand archives.",
      icon: "briefcase",
      image: "assets/images/service_corporate.jpg",
      page: "photography.html?cat=corporate",
      features: ["Executive studio headshots", "Real-time press deliverables", "Discreet multi-room team", "Branded press backdrops"]
    },
    {
      id: "traditional",
      title: "Traditional Ceremonies",
      tagline: "Cultural dotation, dowry ceremonies, and ancestral blessings.",
      description: "Respectful and vibrant documentation honoring African heritage, authentic rituals, family elders, and magnificent traditional attire.",
      icon: "sun",
      image: "assets/images/service_traditional.jpg",
      page: "photography.html?cat=traditional",
      features: ["Cultural protocol expertise", "Vibrant textile color capture", "Elder tribute portraits", "Family heirloom albums"]
    },
    {
      id: "cineamisi",
      title: "Cinéamisi Productions",
      tagline: "Short films, documentaries, and narrative cinema.",
      description: "AfroSynthese's dedicated cinematic studio producing original pan-African films, music videos, docuseries, and festival entries.",
      icon: "film",
      image: "assets/images/service_cinema.jpg",
      page: "cineamisi.html",
      features: ["Script to screen production", "International casting", "DCI-P3 color workflow", "Festival distribution strategy"]
    },
    {
      id: "pvc-cards",
      title: "Professional PVC Cards",
      tagline: "Ultra-durable smart & identification cards for organizations.",
      description: "Consular ID, church membership, student cards, corporate badges, and VIP access passes with high-definition thermal transfer printing.",
      icon: "credit-card",
      image: "assets/images/service_cards.jpg",
      page: "pvc-cards.html",
      features: ["CR80 ISO standard PVC", "Holographic security overlays", "Magnetic stripe & RFID options", "Express European shipping"]
    },
    {
      id: "personalized-products",
      title: "Personalized Products & Prints",
      tagline: "Museum-grade acrylics, fine-art canvas, and custom media gifts.",
      description: "Preserve your memorable milestones on hand-stretched canvas, high-gloss acrylic glass, engraved wooden memory boxes, and bespoke keepsakes.",
      icon: "package",
      image: "assets/images/service_products.jpg",
      page: "personalized-products.html",
      features: ["Archival pigment inks (100+ yr life)", "Handcrafted wooden storage", "Ultra-clear acrylic float frames", "Custom gold foil embossing"]
    },
    {
      id: "magazine-publishing",
      title: "Magazine Publishing",
      tagline: "AfroSynthese luxury digital & print editorial magazine.",
      description: "Quarterly issues highlighting diaspora leaders, fashion creators, musical icons, and business pioneers across Europe and Africa.",
      icon: "book-open",
      image: "assets/images/service_magazine.jpg",
      page: "magazine.html",
      features: ["€3.50/mo digital subscription", "Exclusive editorial interviews", "High-res double-page reader", "Collector print editions"]
    },
    {
      id: "birthdays",
      title: "Birthday & Anniversary Galas",
      tagline: "Milestone birthdays, jubilee celebrations, and VIP private parties.",
      description: "Immortalizing your most joyful celebrations with glamorous red carpet step-and-repeat photography and lively after-movie reels.",
      icon: "gift",
      image: "assets/images/service_birthday.jpg",
      page: "booking.html?service=birthdays",
      features: ["Glamour photo lounge setup", "Guest candid portraits", "Same-weekend preview reel", "Digital download portal"]
    },
    {
      id: "religious",
      title: "Religious & Spiritual Events",
      tagline: "Ordinations, baptisms, crusades, and church anniversaries.",
      description: "Reverent and inspiring coverage of faith assemblies, worship nights, and sacred rites across European and Congolese congregations.",
      icon: "compass",
      image: "assets/images/service_conference.jpg",
      page: "booking.html?service=religious",
      features: ["Low-light sensor sensitivity", "Silent shutter operation", "Live streaming integration", "Sermon & choir recording"]
    }
  ],

  pricingTiers: {
    photography: [
      { hours: 2, price: 350, deposit: 105, description: "Intimate portraiture, short ceremony, or brief private gathering.", deliverables: "50+ Retouched High-Res Photos • Online Gallery • 48h Preview", editableNotice: "Editable Placeholder: €350" },
      { hours: 4, price: 650, deposit: 195, description: "Half-day coverage for civil ceremonies, corporate meetings, or concerts.", deliverables: "120+ Retouched Photos • High-Speed Download • Full Rights", editableNotice: "Editable Placeholder: €650" },
      { hours: 6, price: 950, deposit: 285, description: "Standard wedding or full-evening gala coverage.", deliverables: "220+ Retouched Photos • Private VIP Gallery • 10 Fine Art Prints", editableNotice: "Editable Placeholder: €950" },
      { hours: 8, price: 1250, deposit: 375, description: "Comprehensive full-day coverage from preparations to celebration.", deliverables: "350+ Retouched Photos • USB Keepsake Box • Highlight Slideshow", editableNotice: "Editable Placeholder: €1,250" },
      { hours: 10, price: 1550, deposit: 465, description: "Elite grand event or all-day royal wedding package.", deliverables: "500+ Retouched Photos • Second Shooter Included • Premium Photobook", editableNotice: "Editable Placeholder: €1,550" }
    ],
    videography: [
      { hours: 2, price: 450, deposit: 135, description: "Brief promotional video, music showcase, or event highlights.", deliverables: "2-3 Min 4K Cinematic Highlight Reel • Licensed Audio", editableNotice: "Editable Placeholder: €450" },
      { hours: 4, price: 800, deposit: 240, description: "Half-day conference or stage show cinematography.", deliverables: "3-5 Min 4K Highlight Film • Full Speeches/Performances Cut", editableNotice: "Editable Placeholder: €800" },
      { hours: 6, price: 1150, deposit: 345, description: "Full evening event video with multi-angle coverage.", deliverables: "5-7 Min Cinematic Film • Teaser for Social Media • 4K Master", editableNotice: "Editable Placeholder: €1,150" },
      { hours: 8, price: 1500, deposit: 450, description: "Full-day documentary film from preparation to midnight.", deliverables: "8-12 Min Cinema Film • 60s Reel • Drone Aerial Footage", editableNotice: "Editable Placeholder: €1,500" },
      { hours: 10, price: 1850, deposit: 555, description: "Feature-length cinematic production with master color grading.", deliverables: "15-20 Min Doc Film • Full Speeches • Multi-cam 4K • Drone", editableNotice: "Editable Placeholder: €1,850" }
    ],
    combo: [
      { hours: 2, price: 720, deposit: 216, description: "Combined photo and video team for compact events.", deliverables: "40+ Photos + 2 Min 4K Video • 1 Photographer + 1 Videographer", editableNotice: "Editable Placeholder: €720" },
      { hours: 4, price: 1350, deposit: 405, description: "Dual-crew coverage for half-day celebrations.", deliverables: "100+ Photos + 4 Min Cinema Film • Full Audio Sync", editableNotice: "Editable Placeholder: €1,350" },
      { hours: 6, price: 1950, deposit: 585, description: "Complete media suite for standard full weddings and galas.", deliverables: "200+ Photos + 6 Min Film + 60s Reel • Private Portal", editableNotice: "Editable Placeholder: €1,950" },
      { hours: 8, price: 2550, deposit: 765, description: "Signature AfroSynthese luxury media package.", deliverables: "350+ Photos + 10 Min Film + Drone + Leather Album", editableNotice: "Editable Placeholder: €2,550" },
      { hours: 10, price: 3150, deposit: 945, description: "The ultimate VIP all-inclusive dual media experience.", deliverables: "500+ Photos + Feature Film + Drone + 2 Photographers + 2 Videographers", editableNotice: "Editable Placeholder: €3,150" }
    ]
  },

  galleryItems: [
    {
      id: "gal-01",
      title: "European Afrobeats Tour Finale",
      category: "concerts",
      categoryLabel: "Concerts & Stage",
      location: "Berlin, Germany",
      year: 2026,
      client: "Universal Live Europe",
      image: "assets/images/gallery_1.jpg",
      aspect: "landscape",
      camera: "Sony FX6 / FE 24-70mm GM II",
      exif: "1/500s • f/2.8 • ISO 2500",
      description: "Explosive lighting and electrifying crowd energy captured live at the Mercedes-Benz Arena."
    },
    {
      id: "gal-02",
      title: "Royal Diaspora Wedding & Vow Exchange",
      category: "weddings",
      categoryLabel: "Weddings",
      location: "Paris, France",
      year: 2026,
      client: "Private Couple",
      image: "assets/images/gallery_2.jpg",
      aspect: "portrait",
      camera: "Hasselblad X2D 100C",
      exif: "1/250s • f/2.0 • ISO 100",
      description: "Intimate bridal preparation in a historic Parisian château bathed in soft morning light."
    },
    {
      id: "gal-03",
      title: "Kinshasa Fashion & Heritage Gala",
      category: "traditional",
      categoryLabel: "Traditional & Culture",
      location: "Kinshasa, DRC",
      year: 2025,
      client: "Kinshasa Arts Directorate",
      image: "assets/images/gallery_3.jpg",
      aspect: "square",
      camera: "Canon EOS R5C / RF 50mm f/1.2L",
      exif: "1/400s • f/1.4 • ISO 400",
      description: "A celebration of modern Congolese haute couture and ancestral textile craft."
    },
    {
      id: "gal-04",
      title: "Summit on African-European Trade",
      category: "corporate",
      categoryLabel: "Corporate & Diplomacy",
      location: "Brussels, Belgium",
      year: 2025,
      client: "EU-Africa Business Forum",
      image: "assets/images/gallery_4.jpg",
      aspect: "landscape",
      camera: "Sony A7R V / FE 70-200mm GM OSS II",
      exif: "1/320s • f/2.8 • ISO 800",
      description: "Keynote address and diplomatic panel discussions at the Egmont Palace."
    },
    {
      id: "gal-05",
      title: "Editorial Noir: Modern Sovereignty",
      category: "portraits",
      categoryLabel: "Editorial Portraits",
      location: "London, United Kingdom",
      year: 2026,
      client: "AfroSynthese Magazine",
      image: "assets/images/gallery_5.jpg",
      aspect: "portrait",
      camera: "Leica SL2-S / Summilux-SL 50mm",
      exif: "1/160s • f/1.4 • ISO 200",
      description: "A cinematic study of elegance, chiaroscuro lighting, and bold fashion architecture."
    },
    {
      id: "gal-06",
      title: "Gospel of Grace Jubilee Night",
      category: "religious",
      categoryLabel: "Religious Events",
      location: "Frankfurt, Germany",
      year: 2025,
      client: "Jardin d’adoration e.V.",
      image: "assets/images/gallery_6.jpg",
      aspect: "landscape",
      camera: "Sony FX3 / FE 35mm f/1.4 GM",
      exif: "1/200s • f/1.8 • ISO 1600",
      description: "Deep spiritual atmosphere and choir harmonies during the 2025 international convention."
    },
    {
      id: "gal-07",
      title: "Midnight Symphony Concert Hall",
      category: "concerts",
      categoryLabel: "Concerts & Stage",
      location: "Amsterdam, Netherlands",
      year: 2026,
      client: "Soul Stage International",
      image: "assets/images/gallery_7.jpg",
      aspect: "portrait",
      camera: "Nikon Z9 / NIKKOR Z 85mm f/1.2 S",
      exif: "1/640s • f/1.4 • ISO 3200",
      description: "Soloist spotlight during the European tour opener."
    },
    {
      id: "gal-08",
      title: "Traditional Dotation & Ancestral Union",
      category: "traditional",
      categoryLabel: "Traditional & Culture",
      location: "Kinshasa, DRC",
      year: 2026,
      client: "The Ilunga & Mwamba Families",
      image: "assets/images/gallery_8.jpg",
      aspect: "landscape",
      camera: "Sony A1 / FE 24-70mm GM II",
      exif: "1/500s • f/2.8 • ISO 640",
      description: "Exchange of bridal gifts, ancestral blessings, and euphoric family drumming."
    },
    {
      id: "gal-09",
      title: "Pan-African Cinema Awards Night",
      category: "events",
      categoryLabel: "VIP Events & Galas",
      location: "Cologne, Germany",
      year: 2025,
      client: "Cinéamisi",
      image: "assets/images/gallery_9.jpg",
      aspect: "square",
      camera: "Canon EOS R3 / RF 28-70mm f/2L",
      exif: "1/250s • f/2.0 • ISO 1250",
      description: "Red carpet moments, star arrivals, and premiere celebration for the Cinéamisi showcase."
    },
    {
      id: "gal-10",
      title: "Château de Chantilly Grand Reception",
      category: "weddings",
      categoryLabel: "Weddings",
      location: "Paris, France",
      year: 2025,
      client: "Private Couple",
      image: "assets/images/gallery_10.jpg",
      aspect: "portrait",
      camera: "Hasselblad X2D 100C / XCD 55V",
      exif: "1/350s • f/2.5 • ISO 100",
      description: "Evening banquet in the courtyard under grand chandeliers and fireworks."
    },
    {
      id: "gal-11",
      title: "Technological Leadership Summit",
      category: "corporate",
      categoryLabel: "Corporate & Diplomacy",
      location: "Berlin, Germany",
      year: 2026,
      client: "Innovate Africa-Europe",
      image: "assets/images/gallery_11.jpg",
      aspect: "landscape",
      camera: "Sony A7R V / FE 16-35mm GM II",
      exif: "1/125s • f/4.0 • ISO 800",
      description: "Keynote presentation on next-generation digital media infrastructure."
    },
    {
      id: "gal-12",
      title: "Golden Hour Solitude in Montmartre",
      category: "portraits",
      categoryLabel: "Editorial Portraits",
      location: "Paris, France",
      year: 2026,
      client: "AfroSynthese Editorial",
      image: "assets/images/gallery_12.jpg",
      aspect: "portrait",
      camera: "Leica M11 / Noctilux-M 50mm f/0.95",
      exif: "1/1000s • f/1.2 • ISO 64",
      description: "Sunset glow reflected against classic Parisian limestone architecture."
    }
  ],

  videos: [
    {
      id: "vid-01",
      title: "AfroSynthese 2026 International Showreel",
      category: "Showreel",
      runtime: "03:45",
      director: "Darrell-Fedele Amisi",
      location: "Berlin • Paris • Kinshasa",
      thumbnail: "assets/images/video_thumb_1.jpg",
      videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1",
      summary: "A breathless montage of high-profile concerts, European gala banquets, wedding vows, and short films produced across 2025-2026."
    },
    {
      id: "vid-02",
      title: "A Night at Zenith Paris: Live Concert Film",
      category: "Concert Film",
      runtime: "08:12",
      director: "Cinéamisi Production Team",
      location: "Paris, France",
      thumbnail: "assets/images/video_thumb_2.jpg",
      videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1",
      summary: "Full multicam 6K cinema recording featuring explosive stage audio, pyrotechnics, and intimate backstage green room moments."
    },
    {
      id: "vid-03",
      title: "The Vow at Château de Champlâtreux",
      category: "Wedding Cinema",
      runtime: "06:30",
      director: "AfroSynthese Wedding Unit",
      location: "Paris, France",
      thumbnail: "assets/images/video_thumb_3.jpg",
      videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1",
      summary: "An emotional, beautifully graded wedding film weaving acoustic vows with high-energy evening celebrations."
    },
    {
      id: "vid-04",
      title: "Kinshasa: Echoes of the River (Short Doc)",
      category: "Documentary",
      runtime: "14:20",
      director: "Darrell-Fedele Amisi",
      location: "Kinshasa, DRC",
      thumbnail: "assets/images/video_thumb_4.jpg",
      videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1",
      summary: "An insightful short documentary exploring contemporary street art, music innovators, and cultural renaissance in Kinshasa."
    }
  ],

  magazines: [
    {
      id: "mag-01",
      issueNumber: "Issue No. 06",
      title: "The Renaissance of African Elegance",
      subtitle: "Diaspora visionaries shaping global cinema, photography, and diplomacy.",
      releaseDate: "Autumn / Winter 2026",
      pages: 84,
      author: "Darrell-Fedele Amisi & Editorial Board",
      cover: "assets/magazines/mag_cover_1.jpg",
      price: "€3.50 / month (Unlimited Digital Access)",
      featured: true,
      description: "Featuring an exclusive cover story with Her Excellency Louise Nzanga Ramazani, behind-the-scenes accounts from the European tour, and an in-depth essay on visual archiving."
    },
    {
      id: "mag-02",
      issueNumber: "Issue No. 05",
      title: "Kinshasa Lights: The New Vanguard",
      subtitle: "Independent filmmakers, visual artists, and sound architects of the Congo.",
      releaseDate: "Summer 2026",
      pages: 76,
      author: "AfroSynthese Kinshasa Desk",
      cover: "assets/magazines/mag_cover_2.jpg",
      price: "€3.50 / month",
      featured: false,
      description: "A spotlight on the booming independent film movement in Central Africa and the creative bridges linking Kinshasa with European cinema capitals."
    },
    {
      id: "mag-03",
      issueNumber: "Issue No. 04",
      title: "Sound, Stage & Sovereignty",
      subtitle: "The visual anatomy of modern Afrobeats live performances in Europe.",
      releaseDate: "Spring 2026",
      pages: 92,
      author: "Live Music Archive Team",
      cover: "assets/magazines/mag_cover_3.jpg",
      price: "€3.50 / month",
      featured: false,
      description: "Ross Halfin-inspired concert photography collection capturing the world's most dynamic touring acts in Germany, France, and the UK."
    },
    {
      id: "mag-04",
      issueNumber: "Issue No. 03",
      title: "Sacred Unions: Luxury Weddings Reimagined",
      subtitle: "Tradition, haute couture, and timeless romantic storytelling.",
      releaseDate: "Winter 2025",
      pages: 80,
      author: "Ceremonial Arts Bureau",
      cover: "assets/magazines/mag_cover_4.jpg",
      price: "€3.50 / month",
      featured: false,
      description: "A celebration of modern diaspora weddings, destination celebrations, and the fine art of capturing intimate human emotion."
    },
    {
      id: "mag-05",
      issueNumber: "Issue No. 02",
      title: "Voices of Impact: The Charity Edition",
      subtitle: "Special report on community milestones with Jardin d’adoration e.V.",
      releaseDate: "Autumn 2025",
      pages: 68,
      author: "Social Impact Directorate",
      cover: "assets/magazines/mag_cover_5.jpg",
      price: "€3.50 / month",
      featured: false,
      description: "Documenting the tangible difference achieved through AfroSynthese's 20% monthly revenue commitment to community education and spiritual empowerment."
    },
    {
      id: "mag-06",
      issueNumber: "Issue No. 01",
      title: "Genesis: Founding an International Media Voice",
      subtitle: "The story of AfroSynthese from Germany 2020 to international stages.",
      releaseDate: "Inaugural Edition",
      pages: 60,
      author: "Darrell-Fedele Amisi",
      cover: "assets/magazines/mag_cover_6.jpg",
      price: "€3.50 / month",
      featured: false,
      description: "The founding principles, visual manifesto, and long-term vision for AfroSynthese's digital media ecosystem."
    }
  ],

  magazinePages: [
    { pageNum: 1, type: "cover", title: "Front Cover", image: "assets/magazines/mag_cover_1.jpg", text: "AFROSYNTHESE MAGAZINE • ISSUE NO. 06 • AUTUMN/WINTER 2026" },
    { pageNum: 2, type: "editorial", title: "Publisher's Note", image: "assets/magazines/spread_1.jpg", text: "From Berlin to Kinshasa, our mission remains unaltered: to render the elegance of our people immortal. Welcome to Issue No. 06." },
    { pageNum: 3, type: "feature", title: "The Sovereign Lens", image: "assets/magazines/spread_2.jpg", text: "Photography is not merely documentation; it is an act of historical stewardship. Every frame contains memory, ancestry, and power." },
    { pageNum: 4, type: "gallery", title: "Live at the Zenith", image: "assets/magazines/spread_3.jpg", text: "Under blinding stadium strobes, twenty thousand voices united in rhythmic ecstasy. A retrospective on European live music in 2026." },
    { pageNum: 5, type: "interview", title: "Cultural Diplomacy in Action", image: "assets/magazines/spread_4.jpg", text: "An exclusive dialogue with Her Excellency Louise Nzanga Ramazani on elevating diaspora talent across international institutions." },
    { pageNum: 6, type: "charity", title: "The 20% Mission: Jardin d'adoration", image: "assets/magazines/spread_5.jpg", text: "How every booking and digital subscription fuels direct grassroots educational initiatives and humanitarian assistance." },
    { pageNum: 7, type: "cinema", title: "Cinéamisi Production Journal", image: "assets/magazines/spread_6.jpg", text: "Behind the lens of upcoming feature films and the next wave of pan-African screenwriting." },
    { pageNum: 8, type: "backcover", title: "Back Cover & Credits", image: "assets/magazines/mag_cover_2.jpg", text: "AfroSynthese Publishing • Berlin, Germany • All Rights Reserved © 2026" }
  ],

  articles: [
    {
      id: "art-01",
      title: "The Art of the Decisive Moment in Live Music Photography",
      slug: "art-of-decisive-moment-music",
      category: "Photography Stories",
      author: "Darrell-Fedele Amisi",
      authorRole: "CEO & Creative Director",
      date: "August 10, 2026",
      readTime: "6 min read",
      image: "assets/images/article_1.jpg",
      likes: 142,
      commentsCount: 18,
      excerpt: "Why the world’s most iconic concert photos happen in the split second before the spotlight strikes the artist.",
      content: "When photographing live performance across Europe's grand concert halls, technical competence is only the entry ticket. The real distinction lies in anticipation—reading the musician's micro-gestures, anticipating the guitar crescendo, and positioning oneself exactly where shadow meets raw emotion. Drawing inspiration from the raw, timeless visual mastery of legendary music photographers, we treat each performance not as an event to record, but as a visual opera."
    },
    {
      id: "art-02",
      title: "Bridging Two Worlds: The Creative Synergy of Berlin and Kinshasa",
      slug: "bridging-berlin-and-kinshasa",
      category: "Company News",
      author: "Editorial Team",
      authorRole: "AfroSynthese Bureau",
      date: "July 28, 2026",
      readTime: "5 min read",
      image: "assets/images/article_2.jpg",
      likes: 210,
      commentsCount: 24,
      excerpt: "How AfroSynthese orchestrates seamless multinational media production across European capitals and Central Africa.",
      content: "Founded in Germany in 2020, AfroSynthese operates on a dual-engine model. In Berlin and across Western Europe, our teams deliver high-precision corporate, concert, and wedding documentation meeting the most stringent broadcast standards. In Kinshasa, our creative crew captures cultural authenticity, music releases, and ground-breaking narratives with unmatched local intimacy."
    },
    {
      id: "art-03",
      title: "Preserving Cultural Heritage in Modern Wedding Cinematography",
      slug: "preserving-cultural-heritage-weddings",
      category: "Behind The Scenes",
      author: "Senior Wedding Director",
      authorRole: "Lead Cinematographer",
      date: "July 15, 2026",
      readTime: "8 min read",
      image: "assets/images/article_3.jpg",
      likes: 189,
      commentsCount: 31,
      excerpt: "Navigating the rich symbolism of traditional African unions while maintaining an ultra-modern cinematic aesthetic.",
      content: "A traditional wedding ceremony is an ancestral library in motion. From the ceremonial presentation of the dowry to the intricate blessings of clan elders, every gesture carries deep significance. Our cinema teams use unobtrusive high-sensitivity cameras and directional audio to capture every whisper and drumbeat without ever disturbing the sanctity of the moment."
    },
    {
      id: "art-04",
      title: "Social Stewardship: How Our 20% Revenue Model Supports Jardin d’adoration e.V.",
      slug: "social-stewardship-jardin-dadoration",
      category: "Community",
      author: "Social Impact Board",
      authorRole: "AfroSynthese Philanthropy",
      date: "June 30, 2026",
      readTime: "4 min read",
      image: "assets/images/article_4.jpg",
      likes: 305,
      commentsCount: 45,
      excerpt: "Every client booking directly sustains community programs, youth education, and spiritual guidance.",
      content: "From the very founding of AfroSynthese in 2020 by Darrell-Fedele Amisi, financial success was deliberately intertwined with community responsibility. By automatically allocating 20% of all monthly revenues to our official partner association Jardin d’adoration e.V., we ensure that each celebratory gala and commercial campaign contributes to lasting humanitarian good."
    }
  ],

  team: [
    {
      id: "team-01",
      name: "Darrell-Fedele Amisi",
      role: "Chairman & Chief Executive Officer",
      location: "Berlin, Germany",
      bio: "Founder and creative visionary of AfroSynthese since 2020. Master of editorial photography, executive media producer, and director of Cinéamisi.",
      image: "assets/images/ceo_darrell.jpg",
      isLeadership: true,
      social: { instagram: "#", linkedin: "#" }
    },
    {
      id: "team-02",
      name: "Her Excellency Louise Nzanga Ramazani",
      role: "Official Brand Ambassador & Diplomat",
      location: "Democratic Republic of Congo",
      bio: "High-level cultural ambassador advocating for African artistic excellence, diaspora representation, and international media partnerships.",
      image: "assets/images/ambassador_louise.jpg",
      isLeadership: true,
      social: { instagram: "#", linkedin: "#" }
    },
    {
      id: "team-03",
      name: "Marc-Aurèle V.",
      role: "Director of European Cinematography",
      location: "Paris, France",
      bio: "Award-winning cinematographer specializing in multicam 6K concert recordings and high-fashion editorial films across Western Europe.",
      image: "assets/images/team_member_1.jpg",
      isLeadership: false,
      social: { instagram: "#" }
    },
    {
      id: "team-04",
      name: "Emmanuel K. Mukendi",
      role: "Kinshasa Bureau Chief & Field Director",
      location: "Kinshasa, DRC",
      bio: "Leading our Central African production operations, documentary shoots, traditional event coordination, and talent casting.",
      image: "assets/images/team_member_2.jpg",
      isLeadership: false,
      social: { instagram: "#" }
    },
    {
      id: "team-05",
      name: "Sophie Lindemann",
      role: "Senior Colorist & Post-Production Supervisor",
      location: "Berlin, Germany",
      bio: "Expert in DCI-P3 color grading, skin-tone preservation in mixed concert lighting, and fine-art editorial photo finishing.",
      image: "assets/images/team_member_3.jpg",
      isLeadership: false,
      social: { linkedin: "#" }
    },
    {
      id: "team-06",
      name: "Thérèse Asengo Shandu",
      role: "Kinshasa Financial Operations & Logistics",
      location: "Kinshasa, DRC",
      bio: "Managing local mobile payment coordination (Airtel Money), client reception, and crew logistics in the Democratic Republic of Congo.",
      image: "assets/images/team_member_4.jpg",
      isLeadership: false,
      social: { whatsapp: "https://wa.me/243990196501" }
    },
    {
      id: "team-07",
      name: "Cedric Bemba",
      role: "Lead Audio Engineer & Sound Designer",
      location: "Brussels, Belgium",
      bio: "Specializing in live multi-track concert recording, ambient mastering, and pristine audio capture for documentary short films.",
      image: "assets/images/team_member_5.jpg",
      isLeadership: false,
      social: { instagram: "#" }
    },
    {
      id: "team-08",
      name: "Grace Kalala",
      role: "Editorial Director & Magazine Lead",
      location: "London, UK",
      bio: "Curating quarterly magazine releases, diaspora author interviews, cultural essays, and pan-African fashion retrospectives.",
      image: "assets/images/team_member_6.jpg",
      isLeadership: false,
      social: { instagram: "#" }
    }
  ],

  announcements: [
    {
      id: "ann-01",
      title: "Official Announcement: 2026 European Tour Media Schedule Open",
      category: "Press Release",
      date: "August 12, 2026",
      image: "assets/images/gallery_1.jpg",
      content: "AfroSynthese has officially opened private booking reservations for artists and event organizers planning concerts and gala tours across Germany, France, Belgium, the Netherlands, and the United Kingdom for Q4 2026 and Q1 2027.",
      pinned: true
    },
    {
      id: "ann-02",
      title: "Charity Milestone: 20% Contribution Milestone Surpassed with Jardin d’adoration e.V.",
      category: "Charity & Impact",
      date: "July 20, 2026",
      image: "assets/images/charity_jardin.jpg",
      content: "We are deeply grateful to our clients and partners. With every booking completed in 2025 and 2026, our ongoing 20% monthly revenue allocation has funded essential community education, youth empowerment programs, and humanitarian aid.",
      pinned: true
    },
    {
      id: "ann-03",
      title: "Cinéamisi Launches Open Casting for Debut International Short Film",
      category: "Cinéamisi",
      date: "June 15, 2026",
      image: "assets/images/cine_bts_1.jpg",
      content: "Cinéamisi, the film production division of AfroSynthese, invites aspiring actors, screenwriters, and soundtrack composers from Europe and the DRC to submit their portfolios for our upcoming drama feature.",
      pinned: false
    }
  ],

  pvcCardProducts: [
    { id: "pvc-1", title: "Employee & Corporate ID Cards", badge: "Enterprise", desc: "High-security identification cards with barcode, magnetic stripe, and UV security imprint for corporate staff.", sampleImg: "assets/images/pvc_sample_1.jpg", minQty: 10 },
    { id: "pvc-2", title: "Membership & Association Cards", badge: "Associations", desc: "Durable branded membership cards for clubs, cultural federations, and diaspora community associations.", sampleImg: "assets/images/pvc_sample_2.jpg", minQty: 25 },
    { id: "pvc-3", title: "Church & Ministry Cards", badge: "Religious", desc: "Member identification and leadership ministry credentials with gold foil and high-gloss lamination.", sampleImg: "assets/images/pvc_sample_1.jpg", minQty: 20 },
    { id: "pvc-4", title: "Student & School Cards", badge: "Education", desc: "Standardized student cards with photo identification, matriculation numbers, and emergency contact details.", sampleImg: "assets/images/pvc_sample_2.jpg", minQty: 50 },
    { id: "pvc-5", title: "VIP Event Access Passes", badge: "Concerts & Galas", desc: "Custom lanyard-ready passes with holographic anti-counterfeit foils for backstage and VIP access.", sampleImg: "assets/images/pvc_sample_1.jpg", minQty: 30 }
  ],

  personalizedProducts: [
    { id: "prod-1", title: "Luxury Handcrafted Photobook", price: "€180", desc: "Italian genuine leather cover with custom gold foil name embossing, flat-lay archival Fuji photographic pages.", img: "assets/images/product_photobook.jpg" },
    { id: "prod-2", title: "Museum-Grade Canvas Wrap", price: "€95", desc: "Hand-stretched 400gsm cotton canvas over 40mm solid pine frame with UV protective coating.", img: "assets/images/product_canvas.jpg" },
    { id: "prod-3", title: "Ultra-Clear Acrylic Glass Print", price: "€140", desc: "High-gloss 6mm acrylic glass with diamond-polished edges and invisible floating aluminum sub-frame.", img: "assets/images/product_crystal.jpg" },
    { id: "prod-4", title: "Engraved Wooden Memory Box", price: "€65", desc: "Solid walnut storage box containing high-speed USB 3.0 crystal drive and 20 matted fine art prints.", img: "assets/images/product_box.jpg" }
  ],

  sponsors: [
    { name: "Jardin d’adoration e.V.", type: "Official Beneficiary & Partner", logoText: "JARDIN D'ADORATION e.V.", note: "20% monthly revenue beneficiary" },
    { name: "Europe-Africa Cultural Exchange", type: "Institutional Partner", logoText: "EACE BERLIN", note: "Cultural arts mobility" },
    { name: "Kinshasa Arts Forum", type: "Media Partner", logoText: "KAF CONGO", note: "Central African film & arts" },
    { name: "AfroMedia Europe Network", type: "Broadcast Network", logoText: "AFROMEDIA EU", note: "Distribution & press" }
  ]
};

// Expose globally for vanilla scripts
if (typeof window !== 'undefined') {
  window.AfroSyntheseData = AfroSyntheseData;
}
