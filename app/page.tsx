'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface GalleryItem {
  id: string;
  category: 'bridal' | 'wedding' | 'arabic' | 'traditional' | 'details';
  categoryLabel: string;
  title: string;
  src: string;
  alt: string;
}

const GALLERY_DATA: GalleryItem[] = [
  {
    id: '1',
    category: 'bridal',
    categoryLabel: 'Bridal Mehndi',
    title: 'Royal Bridal Arm Composition',
    src: '/images/bridal_royal.jpg',
    alt: 'Royal Bridal Mehndi Art with peacock and floral details'
  },
  {
    id: '2',
    category: 'wedding',
    categoryLabel: 'Wedding Mehndi',
    title: 'Celebration Palms & Bangles',
    src: '/images/hero_bridal.jpg',
    alt: 'Bridal hands with deep stain mehndi and gold wedding bangles'
  },
  {
    id: '3',
    category: 'arabic',
    categoryLabel: 'Arabic Mehndi',
    title: 'Contemporary Arabic Floral Bel',
    src: '/images/arabic_modern.jpg',
    alt: 'Modern Arabic Mehndi with shaded petals and graceful negative space'
  },
  {
    id: '4',
    category: 'traditional',
    categoryLabel: 'Traditional Mehndi',
    title: 'Lucknowi Delicate Jaal & Lotus',
    src: '/images/traditional_jaal.jpg',
    alt: 'Intricate Lucknowi Traditional Jaal Mehndi Design'
  },
  {
    id: '5',
    category: 'bridal',
    categoryLabel: 'Bridal Mehndi',
    title: 'Bridal Feet & Ankle Payal',
    src: '/images/bridal_feet.jpg',
    alt: 'Intricate bridal feet mehndi design with payal anklet pattern'
  },
  {
    id: '6',
    category: 'details',
    categoryLabel: 'Details & Cuffs',
    title: 'Modern Lace Engagement Cuff',
    src: '/images/engagement_cuff.jpg',
    alt: 'Engagement mehndi design with fine lace wrist cuff and finger trails'
  },
  {
    id: '7',
    category: 'details',
    categoryLabel: 'Details & Symmetry',
    title: 'Artisanal Mandala Centerpiece',
    src: '/images/mandala_macro.jpg',
    alt: 'Macro detail of concentric symmetrical mehndi mandala on palm'
  },
  {
    id: '8',
    category: 'wedding',
    categoryLabel: 'Studio Craft',
    title: 'Graceful Application Session',
    src: '/images/about_artist.jpg',
    alt: 'Mehndi artist applying fine henna details on a bride'
  },
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Quick form state
  const [clientName, setClientName] = useState('');
  const [serviceSelect, setServiceSelect] = useState('Bridal Mehndi Package');
  const [eventDate, setEventDate] = useState('');
  const [eventNotes, setEventNotes] = useState('');

  const filteredItems = activeFilter === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === activeFilter);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let message = `Hello Zeba Mehndi Studio,\n`;
    message += `My name is ${clientName || 'a bride-to-be'}.\n`;
    message += `I would like to enquire about your ${serviceSelect} services.`;
    if (eventDate) {
      message += `\nEvent Date: ${eventDate}`;
    }
    if (eventNotes) {
      message += `\nNotes: ${eventNotes}`;
    }
    message += `\nPlease share your availability and package details.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/918931020349?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  const defaultWaUrl = "https://wa.me/918931020349?text=Hello%20Zeba%20Mehndi%20Studio%2C%20I%20would%20like%20to%20enquire%20about%20your%20mehndi%20services.%20Please%20share%20the%20details%20and%20availability.";

  return (
    <>
      {/* ==========================================================================
           Header / Navigation Bar
           ========================================================================== */}
      <header className="site-header">
        <div className="container header-container">
          <a href="#home" className="site-logo" aria-label="Zeba Mehndi Studio Home">
            <span className="logo-main">ZEBA MEHNDI STUDIO</span>
            <span className="logo-sub">Aminabad · Lucknow</span>
          </a>

          <nav aria-label="Main Navigation">
            <ul className="nav-links">
              <li><a href="#home" className="nav-link active">Home</a></li>
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#services" className="nav-link">Services</a></li>
              <li><a href="#bridal" className="nav-link">Bridal</a></li>
              <li><a href="#gallery" className="nav-link">Gallery</a></li>
              <li><a href="#process" className="nav-link">Process</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
          </nav>

          <div className="header-actions">
            <a
              href={defaultWaUrl}
              className="btn btn-whatsapp header-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 2C6.516 2 2.031 6.484 2.031 12c0 2.219.721 4.27 1.947 5.941L2.617 22l4.215-1.34A9.957 9.957 0 0 0 12.031 22c5.516 0 10-4.484 10-10s-4.484-10-10-10zm5.834 14.172c-.244.688-1.42 1.34-1.97 1.396-.547.057-1.229.083-2.007-.168a14.73 14.73 0 0 1-4.707-2.913 12.87 12.87 0 0 1-2.916-4.707c-.25-.778-.225-1.46-.168-2.007.057-.55.708-1.726 1.396-1.97.244-.086.49-.13.73-.13.238 0 .474.044.708.13.244.086.536.882.723 1.334.186.453.308.795.064 1.137-.244.343-.49.578-.734.822-.244.244-.503.51-.215 1.006.289.497 1.282 2.11 2.76 3.425 1.895 1.688 3.328 2.213 3.824 2.502.496.289.762.03.996-.215.244-.244.479-.49.822-.734.343-.244.685-.122 1.137.064.453.187 1.248.479 1.334.723.086.234.13.47.13.708 0 .24-.044.486-.13.73z"/>
              </svg>
              Book on WhatsApp
            </a>

            <button
              className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          <li className="mobile-nav-item"><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
          <li className="mobile-nav-item"><a href="#about" onClick={() => setMobileMenuOpen(false)}>About Studio</a></li>
          <li className="mobile-nav-item"><a href="#services" onClick={() => setMobileMenuOpen(false)}>Our Services</a></li>
          <li className="mobile-nav-item"><a href="#bridal" onClick={() => setMobileMenuOpen(false)}>Bridal Showcase</a></li>
          <li className="mobile-nav-item"><a href="#gallery" onClick={() => setMobileMenuOpen(false)}>Design Gallery</a></li>
          <li className="mobile-nav-item"><a href="#why-us" onClick={() => setMobileMenuOpen(false)}>Why Choose Us</a></li>
          <li className="mobile-nav-item"><a href="#process" onClick={() => setMobileMenuOpen(false)}>Booking Process</a></li>
          <li className="mobile-nav-item"><a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Reviews</a></li>
          <li className="mobile-nav-item"><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact & Location</a></li>
        </ul>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <a
            href={defaultWaUrl}
            className="btn btn-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: '100%' }}
          >
            WhatsApp Booking
          </a>
          <a href="tel:08931020349" className="btn btn-outline" style={{ width: '100%' }}>
            Call: 08931020349
          </a>
        </div>
      </div>

      <main>
        {/* ==========================================================================
             Hero Section
             ========================================================================== */}
        <section className="hero-section" id="home">
          <div className="container hero-grid">
            <div className="hero-content">
              <div className="hero-location-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Aminabad · Maulviganj, Lucknow
              </div>

              <h1 className="hero-title text-balance">
                Where Tradition Meets <em>Timeless Beauty.</em>
              </h1>

              <p className="hero-tagline">
                Experience bespoke bridal and occasion henna artistry in Lucknow. Handcrafted with fine-line precision and 100% natural, deep-staining henna cones to adorn your special day with unforgettable elegance.
              </p>

              <div className="hero-cta-group">
                <a
                  href={defaultWaUrl}
                  className="btn btn-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 2C6.516 2 2.031 6.484 2.031 12c0 2.219.721 4.27 1.947 5.941L2.617 22l4.215-1.34A9.957 9.957 0 0 0 12.031 22c5.516 0 10-4.484 10-10s-4.484-10-10-10zm5.834 14.172c-.244.688-1.42 1.34-1.97 1.396-.547.057-1.229.083-2.007-.168a14.73 14.73 0 0 1-4.707-2.913 12.87 12.87 0 0 1-2.916-4.707c-.25-.778-.225-1.46-.168-2.007.057-.55.708-1.726 1.396-1.97.244-.086.49-.13.73-.13.238 0 .474.044.708.13.244.086.536.882.723 1.334.186.453.308.795.064 1.137-.244.343-.49.578-.734.822-.244.244-.503.51-.215 1.006.289.497 1.282 2.11 2.76 3.425 1.895 1.688 3.328 2.213 3.824 2.502.496.289.762.03.996-.215.244-.244.479-.49.822-.734.343-.244.685-.122 1.137.064.453.187 1.248.479 1.334.723.086.234.13.47.13.708 0 .24-.044.486-.13.73z"/>
                  </svg>
                  Book on WhatsApp
                </a>

                <a href="#gallery" className="btn btn-outline">
                  View Design Gallery
                </a>
              </div>

              <div className="hero-trust-row">
                <div className="trust-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span>Pure Natural Henna</span>
                </div>
                <div className="trust-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>Punctual & Patient Sessions</span>
                </div>
                <div className="trust-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                  <span>Customized Bridal Motifs</span>
                </div>
              </div>
            </div>

            <div className="hero-visual-wrapper">
              <div className="hero-arch-card">
                <Image
                  src="/images/hero_bridal.jpg"
                  alt="Exquisite Indian Bridal Mehndi Art by Zeba Mehndi Studio Lucknow"
                  width={600}
                  height={720}
                  priority
                  referrerPolicy="no-referrer"
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>

              <div className="hero-floating-card">
                <div className="floating-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <div>
                  <div className="floating-title">Bespoke Bridal Henna</div>
                  <div className="floating-subtitle">Hand-drawn with love in Lucknow</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
             About Zeba Mehndi Studio
             ========================================================================== */}
        <section className="section about-section" id="about">
          <div className="container about-grid">
            <div className="about-image-card">
              <Image
                src="/images/about_artist.jpg"
                alt="Artisan applying detailed henna at Zeba Mehndi Studio Lucknow"
                width={600}
                height={500}
                referrerPolicy="no-referrer"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
              <div className="about-badge-corner">Artisanal Studio</div>
            </div>

            <div className="about-content">
              <span className="section-eyebrow">About Zeba Mehndi Studio</span>
              <h2 className="text-balance">Preserving Heritage, Crafting Contemporary Elegance</h2>

              <div className="about-bio-text">
                {/* EDITABLE STUDIO INTRODUCTION */}
                <p style={{ marginBottom: '1rem' }}>
                  Located on Jagat Narayan Road near City Station Bridge in Aminabad, <strong>Zeba Mehndi Studio</strong> is a sanctuary dedicated to the timeless art of Indian mehndi. We view every design not merely as decoration, but as an intimate reflection of tradition, joy, and individual beauty.
                </p>
                <p>
                  From opulent royal bridal patterns to light, airy modern Arabic motifs, our work is defined by delicate fine-line work, deep respect for cultural symbolism, and the comfort of our clients during their most special celebrations.
                </p>
              </div>

              <div className="about-pillars">
                <div className="pillar-item">
                  <h4>100% Natural Henna</h4>
                  <p>Freshly blended with pure essential oils for skin safety and a deep, rich mahogany stain.</p>
                </div>
                <div className="pillar-item">
                  <h4>Meticulous Precision</h4>
                  <p>Clean symmetry, delicate grid jaals, and intricate storytelling elements tailored to you.</p>
                </div>
                <div className="pillar-item">
                  <h4>Studio & Doorstep Service</h4>
                  <p>Appointments hosted at our comfortable studio or arranged directly at your wedding venue.</p>
                </div>
                <div className="pillar-item">
                  <h4>Personalized Consultation</h4>
                  <p>Collaborate on motifs that harmoniously complement your wedding lehenga and theme.</p>
                </div>
              </div>

              <a
                href={defaultWaUrl}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enquire for Your Date
              </a>
            </div>
          </div>
        </section>

        {/* ==========================================================================
             Services Section
             ========================================================================== */}
        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">Our Artistry</span>
              <h2 className="section-heading text-balance">Curated Mehndi Services</h2>
              <p className="section-subtext">Each service is thoughtfully crafted to honor the significance of your special event with intricate beauty.</p>
            </div>

            <div className="services-grid">
              {/* 1. Bridal */}
              <div className="service-card">
                <div className="service-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v8" />
                    <path d="M8 12h8" />
                  </svg>
                </div>
                <h3>Bridal Mehndi</h3>
                <p>Our hallmark bridal service featuring bespoke arm, hand, and foot henna. Incorporates customized dulhan-dulha motifs, personalized wedding dates, and royal jaals.</p>
                <ul className="service-details-list">
                  <li>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    Elbow to shoulder arm coverage
                  </li>
                  <li>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    Intricate bridal feet and anklet payal work
                  </li>
                  <li>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    Custom love story and initial embeds
                  </li>
                </ul>
                <a
                  href="https://wa.me/918931020349?text=Hello%20Zeba%20Mehndi%20Studio%2C%20I%20would%20like%20to%20enquire%20about%20Bridal%20Mehndi%20packages%20and%20availability."
                  className="service-action"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enquire Bridal Package →
                </a>
              </div>

              {/* 2. Wedding */}
              <div className="service-card">
                <div className="service-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3>Wedding Mehndi</h3>
                <p>Harmonious mehndi experiences for sangeet gatherings, bridesmaids, sisters, mothers, and close family members with graceful, cohesive designs.</p>
                <ul className="service-details-list">
                  <li>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    Party & group session packages
                  </li>
                  <li>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    Elegant hand fronts & backs
                  </li>
                  <li>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    Swift, flawless application for guests
                  </li>
                </ul>
                <a
                  href="https://wa.me/918931020349?text=Hello%20Zeba%20Mehndi%20Studio%2C%20I%20would%20like%20to%20enquire%20about%20Wedding%20Guest%20and%20Sangeet%20Mehndi%20services."
                  className="service-action"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enquire Wedding Package →
                </a>
              </div>

              {/* 3. Engagement */}
              <div className="service-card">
                <div className="service-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="7" />
                    <polyline points="12 9 12 12 13.5 13.5" />
                    <path d="M16.51 17.35l-.35 3.83-4.16-1.8-4.16 1.8-.35-3.83" />
                  </svg>
                </div>
                <h3>Engagement Mehndi</h3>
                <p>Delicate, chic patterns crafted to complement your ring presentation. Features refined lace gloves, finger trails, and tasteful negative space.</p>
                <ul className="service-details-list">
                  <li>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    Ring-finger accent emphasis
                  </li>
                  <li>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    Modern wrist cuff aesthetics
                  </li>
                  <li>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    Quick drying & elegant staining
                  </li>
                </ul>
                <a
                  href="https://wa.me/918931020349?text=Hello%20Zeba%20Mehndi%20Studio%2C%20I%20would%20like%20to%20enquire%20about%20Engagement%20Mehndi%20designs."
                  className="service-action"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enquire Engagement Mehndi →
                </a>
              </div>

              {/* 4. Arabic */}
              <div className="service-card">
                <div className="service-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                  </svg>
                </div>
                <h3>Arabic Mehndi</h3>
                <p>Flowing diagonal vines, bold floral petals, and striking architectural shading. A timeless favorite for its bold contrast and modern feminine charm.</p>
                <ul className="service-details-list">
                  <li>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    Dramatic shaded floral blooms
                  </li>
                  <li>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    Lush negative space breathing room
                  </li>
                  <li>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    Trailing Bel and vine silhouettes
                  </li>
                </ul>
                <a
                  href="https://wa.me/918931020349?text=Hello%20Zeba%20Mehndi%20Studio%2C%20I%20would%20like%20to%20enquire%20about%20Arabic%20Mehndi%20styles."
                  className="service-action"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enquire Arabic Mehndi →
                </a>
              </div>

              {/* 5. Traditional */}
              <div className="service-card">
                <div className="service-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                </div>
                <h3>Traditional Mehndi</h3>
                <p>Deeply rooted heritage art celebrated in Lucknow. Rich in symmetrical mandalas, intricate checks (jaal), royal peacocks, and traditional floral borders.</p>
                <ul className="service-details-list">
                  <li>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    Classic Marwari & Rajasthani roots
                  </li>
                  <li>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    Lattice mesh and lotus centers
                  </li>
                  <li>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    High-density intricate detailing
                  </li>
                </ul>
                <a
                  href="https://wa.me/918931020349?text=Hello%20Zeba%20Mehndi%20Studio%2C%20I%20would%20like%20to%20enquire%20about%20Traditional%20Indian%20Mehndi%20services."
                  className="service-action"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enquire Traditional Mehndi →
                </a>
              </div>

              {/* 6. Customized */}
              <div className="service-card">
                <div className="service-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <h3>Customized Mehndi</h3>
                <p>Bring your personal vision to reality. Whether it is incorporating proposal city skylines, sacred verses, couple monograms, or pet portraits into your henna.</p>
                <ul className="service-details-list">
                  <li>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    Bespoke design drafting
                  </li>
                  <li>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    Personalized wedding hashtags & dates
                  </li>
                  <li>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    Fusion of contemporary and classic
                  </li>
                </ul>
                <a
                  href="https://wa.me/918931020349?text=Hello%20Zeba%20Mehndi%20Studio%2C%20I%20have%20a%20customized%20mehndi%20concept%20and%20would%20like%20to%20discuss%20it."
                  className="service-action"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discuss Custom Concept →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
             Bridal Mehndi Showcase
             ========================================================================== */}
        <section className="section bridal-showcase-section" id="bridal">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">Exquisite Signatures</span>
              <h2 className="section-heading text-balance">Bridal Mehndi Showcase</h2>
              <p className="section-subtext">A glimpse into our curated bridal portfolio, celebrating grace, precision, and lasting color.</p>
            </div>

            <div className="bridal-grid">
              {/* Bridal Card 1 */}
              <div className="bridal-card">
                <div className="bridal-img-wrapper">
                  <Image
                    src="/images/bridal_royal.jpg"
                    alt="Royal Dulhan Bridal Mehndi Design by Zeba Mehndi Studio"
                    width={450}
                    height={580}
                    referrerPolicy="no-referrer"
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                  <span className="bridal-tag">Signature Bridal</span>
                </div>
                <div className="bridal-body">
                  <h3>The Royal Dulhan</h3>
                  <p>Elaborate full-forearm grandeur featuring majestic peacock plumage, traditional bride-groom portraits, and micro-grid jaal cuffs.</p>
                  <div className="bridal-features">
                    <span className="bridal-feature-pill">Full Forearm</span>
                    <span className="bridal-feature-pill">Dulhan Motifs</span>
                    <span className="bridal-feature-pill">Intricate Jaal</span>
                  </div>
                  <a
                    href="https://wa.me/918931020349?text=Hello%20Zeba%20Mehndi%20Studio%2C%20I%20am%20interested%20in%20The%20Royal%20Dulhan%20Bridal%20design."
                    className="btn btn-outline"
                    style={{ width: '100%', padding: '0.65rem 1rem', fontSize: '0.85rem' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enquire This Style
                  </a>
                </div>
              </div>

              {/* Bridal Card 2 */}
              <div className="bridal-card">
                <div className="bridal-img-wrapper">
                  <Image
                    src="/images/traditional_jaal.jpg"
                    alt="Lucknowi Lotus Jaal Traditional Mehndi"
                    width={450}
                    height={580}
                    referrerPolicy="no-referrer"
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                  <span className="bridal-tag">Heritage Classic</span>
                </div>
                <div className="bridal-body">
                  <h3>Lotus & Jaal Harmony</h3>
                  <p>Inspired by Lucknow&apos;s architectural elegance. Features concentric blooming lotus mandalas encircled by feather-light jaal netting.</p>
                  <div className="bridal-features">
                    <span className="bridal-feature-pill">Lotus Mandalas</span>
                    <span className="bridal-feature-pill">Feather Netting</span>
                    <span className="bridal-feature-pill">Symmetrical</span>
                  </div>
                  <a
                    href="https://wa.me/918931020349?text=Hello%20Zeba%20Mehndi%20Studio%2C%20I%20am%20interested%20in%20The%20Lotus%20and%20Jaal%20Harmony%20style."
                    className="btn btn-outline"
                    style={{ width: '100%', padding: '0.65rem 1rem', fontSize: '0.85rem' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enquire This Style
                  </a>
                </div>
              </div>

              {/* Bridal Card 3 */}
              <div className="bridal-card">
                <div className="bridal-img-wrapper">
                  <Image
                    src="/images/arabic_modern.jpg"
                    alt="Modern Floral Arabic Mehndi Design"
                    width={450}
                    height={580}
                    referrerPolicy="no-referrer"
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                  <span className="bridal-tag">Contemporary Chic</span>
                </div>
                <div className="bridal-body">
                  <h3>Modern Arabic Fusion</h3>
                  <p>Graceful, free-flowing rose petals and dark contoured leaves accented with modern negative space, perfect for contemporary brides.</p>
                  <div className="bridal-features">
                    <span className="bridal-feature-pill">Negative Space</span>
                    <span className="bridal-feature-pill">Shaded Florals</span>
                    <span className="bridal-feature-pill">Wrist Cuffs</span>
                  </div>
                  <a
                    href="https://wa.me/918931020349?text=Hello%20Zeba%20Mehndi%20Studio%2C%20I%20am%20interested%20in%20The%20Modern%20Arabic%20Fusion%20style."
                    className="btn btn-outline"
                    style={{ width: '100%', padding: '0.65rem 1rem', fontSize: '0.85rem' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enquire This Style
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
             Gallery Section with Category Filters and Lightbox
             ========================================================================== */}
        <section className="section gallery-section" id="gallery">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">Our Portfolio</span>
              <h2 className="section-heading text-balance">The Mehndi Gallery</h2>
              <p className="section-subtext">Browse our curated work across bridal, wedding ceremonies, Arabic flourishes, and intricate details.</p>
            </div>

            {/* Category Filters */}
            <div className="gallery-filters" role="tablist">
              {[
                { label: 'All Designs', val: 'all' },
                { label: 'Bridal', val: 'bridal' },
                { label: 'Wedding', val: 'wedding' },
                { label: 'Arabic', val: 'arabic' },
                { label: 'Traditional', val: 'traditional' },
                { label: 'Details', val: 'details' },
              ].map((tab) => (
                <button
                  key={tab.val}
                  className={`filter-btn ${activeFilter === tab.val ? 'active' : ''}`}
                  onClick={() => setActiveFilter(tab.val)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="gallery-grid">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="gallery-item"
                  onClick={() => setLightboxIndex(index)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View ${item.title}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setLightboxIndex(index);
                    }
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={400}
                    height={500}
                    referrerPolicy="no-referrer"
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                  <div className="gallery-item-overlay">
                    <span className="overlay-category">{item.categoryLabel}</span>
                    <h4 className="overlay-title">{item.title}</h4>
                    <span className="overlay-btn">View Full Artwork ↗</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <div
            className="lightbox-modal open"
            role="dialog"
            aria-modal="true"
            aria-label="Mehndi Artwork Viewer"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setLightboxIndex(null);
              }
            }}
          >
            <button
              className="lightbox-close-btn"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close image viewer"
            >
              ✕
            </button>

            <button
              className="lightbox-nav-btn lightbox-prev"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
              }}
              aria-label="Previous artwork"
            >
              ‹
            </button>

            <button
              className="lightbox-nav-btn lightbox-next"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
              }}
              aria-label="Next artwork"
            >
              ›
            </button>

            <div className="lightbox-container">
              <div className="lightbox-img-wrapper">
                <Image
                  src={filteredItems[lightboxIndex].src}
                  alt={filteredItems[lightboxIndex].alt}
                  width={800}
                  height={800}
                  referrerPolicy="no-referrer"
                  style={{ maxHeight: '75vh', width: 'auto', objectFit: 'contain' }}
                />
              </div>
              <div className="lightbox-info">
                <h3 className="lightbox-title">{filteredItems[lightboxIndex].title}</h3>
                <p className="lightbox-caption">{filteredItems[lightboxIndex].categoryLabel}</p>
                <a
                  href={`https://wa.me/918931020349?text=${encodeURIComponent(
                    `Hello Zeba Mehndi Studio, I am enquiring about the "${filteredItems[lightboxIndex].title}" (${filteredItems[lightboxIndex].categoryLabel}) design from your gallery. Could you please share availability and pricing details?`
                  )}`}
                  className="btn btn-whatsapp lightbox-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enquire About This Design on WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ==========================================================================
             Why Choose Zeba Mehndi Studio
             ========================================================================== */}
        <section className="section why-us-section" id="why-us">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">Our Promise</span>
              <h2 className="section-heading text-balance">Why Brides Choose Zeba</h2>
              <p className="section-subtext">Dedicated exclusively to authentic craftsmanship, individual expression, and your peaceful celebration.</p>
            </div>

            <div className="features-grid">
              <div className="feature-box">
                <div className="feature-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                </div>
                <h3>Pure Henna Cones</h3>
                <p>We blend 100% natural organic henna powder with therapeutic essential oils. Zero toxic chemicals or synthetic dye additives.</p>
              </div>

              <div className="feature-box">
                <div className="feature-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 19l7-7 3 3-7 7-3-3z" />
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                    <path d="M2 2l7.586 7.586" />
                    <circle cx="11" cy="11" r="2" />
                  </svg>
                </div>
                <h3>Micro Fine-Line Detailing</h3>
                <p>Every jaal, peacock, petal, and contour is hand-piped with microscopic precision, creating clean contrasts and photogenic results.</p>
              </div>

              <div className="feature-box">
                <div className="feature-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <h3>Personalized Storytelling</h3>
                <p>We bring meaningful motifs into your bridal layout: your partner&apos;s initials, special dates, and personalized cultural details.</p>
              </div>

              <div className="feature-box">
                <div className="feature-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3>Reliability & Punctuality</h3>
                <p>We honor your time and schedule with dedicated attention, ensuring you remain calm, relaxed, and pampered on your big day.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
             Booking Process Section
             ========================================================================== */}
        <section className="section process-section" id="process">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">Seamless Journey</span>
              <h2 className="section-heading text-balance">How to Book Your Session</h2>
              <p className="section-subtext">Four simple, stress-free steps from initial inspiration to your finished mehndi.</p>
            </div>

            <div className="process-steps-grid">
              <div className="process-step-card">
                <div className="step-num-badge">1</div>
                <h3>Enquire</h3>
                <p>Connect with us on WhatsApp or call <strong>08931020349</strong> with your function date, event venue, and service requirements.</p>
              </div>

              <div className="process-step-card">
                <div className="step-num-badge">2</div>
                <h3>Discuss Design</h3>
                <p>Browse our lookbook or share reference pictures. We align on arm length, motif themes, and customization wishes.</p>
              </div>

              <div className="process-step-card">
                <div className="step-num-badge">3</div>
                <h3>Confirm Date</h3>
                <p>Lock in your preferred date and time slot to guarantee undivided attention for your celebration in Lucknow.</p>
              </div>

              <div className="process-step-card">
                <div className="step-num-badge">4</div>
                <h3>Mehndi Day</h3>
                <p>Relax in comfort as bespoke henna art is meticulously applied, accompanied by our natural aftercare instructions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
             Testimonials (Editable Placeholders)
             ========================================================================== */}
        <section className="section testimonials-section" id="testimonials">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">Client Reflections</span>
              <h2 className="section-heading text-balance">Kind Words from Brides</h2>
              <p className="section-subtext">Experiences shared by our valued brides and families in Lucknow.</p>
            </div>

            <div className="testimonials-grid">
              <div className="testimonial-card">
                <span className="editable-tag">[Editable Client Placeholder]</span>
                <p className="testimonial-quote">
                  &ldquo;The bridal mehndi was truly breathtaking. The stain developed into a rich dark maroon just in time for the wedding day, and the intricate peacock motifs received endless compliments from my guests.&rdquo;
                </p>
                <div className="testimonial-author">
                  <div className="author-name">Ayesha S.</div>
                  <div className="author-role">Bridal Client · Aminabad, Lucknow</div>
                </div>
              </div>

              <div className="testimonial-card">
                <span className="editable-tag">[Editable Client Placeholder]</span>
                <p className="testimonial-quote">
                  &ldquo;Very punctual, patient with our family members, and accommodated every small detail I wanted on my palms. The cones smelled so natural and there was zero irritation.&rdquo;
                </p>
                <div className="testimonial-author">
                  <div className="author-name">Priya M.</div>
                  <div className="author-role">Wedding Client · Hazratganj, Lucknow</div>
                </div>
              </div>

              <div className="testimonial-card">
                <span className="editable-tag">[Editable Client Placeholder]</span>
                <p className="testimonial-quote">
                  &ldquo;I chose the modern Arabic style for my engagement. The lines were razor-sharp, delicate, and looked stunning in our close-up ring photographs. Highly recommend Zeba Mehndi Studio!&rdquo;
                </p>
                <div className="testimonial-author">
                  <div className="author-name">Zainab K.</div>
                  <div className="author-role">Engagement Client · Maulviganj, Lucknow</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
             Contact & Location Section
             ========================================================================== */}
        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">Get In Touch</span>
              <h2 className="section-heading text-balance">Book Your Mehndi Experience</h2>
              <p className="section-subtext">We are delighted to welcome you to our studio in Aminabad or arrange services at your celebration.</p>
            </div>

            <div className="contact-grid">
              {/* Contact Info Card */}
              <div className="contact-info-card">
                <h3>Studio Information</h3>
                <p className="contact-desc">Reach out for bookings, date availability, or custom design consultations.</p>

                <div className="contact-details-list">
                  {/* Phone & WhatsApp */}
                  <div className="contact-item">
                    <div className="contact-icon-bubble">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="contact-label">Phone & WhatsApp</div>
                      <div className="contact-val">
                        <a href="tel:08931020349"><strong>08931020349</strong></a>
                      </div>
                      <div style={{ marginTop: '6px' }}>
                        <a
                          href={defaultWaUrl}
                          className="btn btn-whatsapp"
                          style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Direct WhatsApp Chat
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="contact-item">
                    <div className="contact-icon-bubble">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <div className="contact-label">Studio Address</div>
                      <div className="contact-val">
                        195, Ama Diagnostic Center, 17, Jagat Narayan Rd,<br />
                        Near City Station Bridge, Maulviganj, Aminabad,<br />
                        Lucknow, Uttar Pradesh 226018
                      </div>
                    </div>
                  </div>

                  {/* Studio Hours */}
                  <div className="contact-item">
                    <div className="contact-icon-bubble">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <div className="contact-label">Studio Hours</div>
                      <div className="contact-val">
                        Monday – Sunday: 9:00 AM – 9:00 PM<br />
                        <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>(By appointment for bridal bookings)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media Placeholders */}
                <div className="social-links-row">
                  <div className="social-label">Follow & Connect (Editable Placeholders):</div>
                  <div className="social-badges">
                    <span className="social-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                      @zebamehndistudio_lucknow [Editable]
                    </span>
                    <span className="social-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                      Facebook [Editable]
                    </span>
                    <span className="social-badge">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                      Pinterest [Editable]
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Booking Form */}
              <div className="booking-form-card">
                <h3>Send Quick Enquiry</h3>
                <p className="booking-form-sub">Fill out the details below to open a pre-formatted WhatsApp chat instantly.</p>

                <form onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label htmlFor="clientNameInput" className="form-label">Your Name</label>
                    <input
                      type="text"
                      id="clientNameInput"
                      className="form-input"
                      placeholder="e.g. Fatima / Ananya"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="serviceSelectField" className="form-label">Service Needed</label>
                    <select
                      id="serviceSelectField"
                      className="form-select"
                      value={serviceSelect}
                      onChange={(e) => setServiceSelect(e.target.value)}
                    >
                      <option value="Bridal Mehndi Package">Bridal Mehndi (Full Arms & Feet)</option>
                      <option value="Wedding / Sangeet Group Mehndi">Wedding / Sangeet Party</option>
                      <option value="Engagement Mehndi">Engagement Mehndi</option>
                      <option value="Arabic Mehndi Design">Arabic Floral Mehndi</option>
                      <option value="Traditional Heritage Mehndi">Traditional Mehndi</option>
                      <option value="Customized Theme Mehndi">Custom Design Request</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="eventDateField" className="form-label">Event Date</label>
                    <input
                      type="date"
                      id="eventDateField"
                      className="form-input"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="eventNotesField" className="form-label">Special Requests / Venue</label>
                    <textarea
                      id="eventNotesField"
                      className="form-textarea"
                      placeholder="e.g. Ceremony at Aminabad, need elbow-length coverage with peacock motifs..."
                      value={eventNotes}
                      onChange={(e) => setEventNotes(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="btn btn-whatsapp" style={{ width: '100%' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.031 2C6.516 2 2.031 6.484 2.031 12c0 2.219.721 4.27 1.947 5.941L2.617 22l4.215-1.34A9.957 9.957 0 0 0 12.031 22c5.516 0 10-4.484 10-10s-4.484-10-10-10zm5.834 14.172c-.244.688-1.42 1.34-1.97 1.396-.547.057-1.229.083-2.007-.168a14.73 14.73 0 0 1-4.707-2.913 12.87 12.87 0 0 1-2.916-4.707c-.25-.778-.225-1.46-.168-2.007.057-.55.708-1.726 1.396-1.97.244-.086.49-.13.73-.13.238 0 .474.044.708.13.244.086.536.882.723 1.334.186.453.308.795.064 1.137-.244.343-.49.578-.734.822-.244.244-.503.51-.215 1.006.289.497 1.282 2.11 2.76 3.425 1.895 1.688 3.328 2.213 3.824 2.502.496.289.762.03.996-.215.244-.244.479-.49.822-.734.343-.244.685-.122 1.137.064.453.187 1.248.479 1.334.723.086.234.13.47.13.708 0 .24-.044.486-.13.73z"/>
                    </svg>
                    Send Enquiry via WhatsApp
                  </button>
                </form>
              </div>
            </div>

            {/* Google Maps Embed Card */}
            <div className="map-embed-card">
              <div className="map-header">
                <span className="map-title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Zeba Mehndi Studio Location · Aminabad, Lucknow
                </span>
                <a
                  href="https://maps.google.com/?q=195+Ama+Diagnostic+Center+17+Jagat+Narayan+Rd+Near+City+Station+Bridge+Maulviganj+Aminabad+Lucknow+Uttar+Pradesh+226018"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ padding: '0.45rem 0.95rem', fontSize: '0.8rem' }}
                >
                  Open in Google Maps ↗
                </a>
              </div>
              <div className="map-frame-wrapper">
                <iframe
                  src="https://maps.google.com/maps?q=195,%20Ama%20Diagnostic%20Center,%2017,%20Jagat%20Narayan%20Rd,%20Near%20City%20Station%20Bridge,%20Maulviganj,%20Aminabad,%20Lucknow,%20Uttar%20Pradesh%20226018&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  title="Zeba Mehndi Studio Aminabad Lucknow Google Map"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ==========================================================================
           Footer
           ========================================================================== */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="site-logo" style={{ marginBottom: '0.5rem' }}>
                <span className="logo-main">ZEBA MEHNDI STUDIO</span>
                <span className="logo-sub">Aminabad · Lucknow</span>
              </div>
              <p className="footer-tagline">“Where Tradition Meets Timeless Beauty.”</p>
              <p className="footer-bio">
                Bespoke bridal, Arabic, and traditional mehndi artistry in Aminabad, Lucknow. Dedicated to handcrafting memories with natural henna and artisanal grace.
              </p>
            </div>

            <div className="footer-col">
              <h4>Studio Navigation</h4>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About the Studio</a></li>
                <li><a href="#services">Our Mehndi Services</a></li>
                <li><a href="#bridal">Bridal Signatures</a></li>
                <li><a href="#gallery">Design Lookbook</a></li>
                <li><a href="#contact">Contact & Map</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Visit & Contact</h4>
              <div className="footer-contact-info">
                <p><strong>Studio:</strong> 195, Ama Diagnostic Center, 17, Jagat Narayan Rd, Near City Station Bridge, Maulviganj, Aminabad, Lucknow, UP 226018</p>
                <p><strong>Phone / WhatsApp:</strong> <a href="tel:08931020349" style={{ color: '#DFC7CF', fontWeight: 600 }}>08931020349</a></p>
                <p><strong>Hours:</strong> Open daily 9:00 AM – 9:00 PM</p>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div>
              © 2026 Zeba Mehndi Studio. All rights reserved. Aminabad, Lucknow, Uttar Pradesh.
            </div>
            <div>
              Bridal Mehndi Artist in Lucknow · Aminabad
            </div>
          </div>
        </div>
      </footer>

      {/* ==========================================================================
           Mobile Fixed Bottom Quick-Action Bar
           ========================================================================== */}
      <div className="mobile-fixed-bar">
        <a href="tel:08931020349" className="mobile-bar-btn mobile-bar-call">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          Call Studio
        </a>

        <a
          href={defaultWaUrl}
          className="mobile-bar-btn mobile-bar-wa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 2C6.516 2 2.031 6.484 2.031 12c0 2.219.721 4.27 1.947 5.941L2.617 22l4.215-1.34A9.957 9.957 0 0 0 12.031 22c5.516 0 10-4.484 10-10s-4.484-10-10-10zm5.834 14.172c-.244.688-1.42 1.34-1.97 1.396-.547.057-1.229.083-2.007-.168a14.73 14.73 0 0 1-4.707-2.913 12.87 12.87 0 0 1-2.916-4.707c-.25-.778-.225-1.46-.168-2.007.057-.55.708-1.726 1.396-1.97.244-.086.49-.13.73-.13.238 0 .474.044.708.13.244.086.536.882.723 1.334.186.453.308.795.064 1.137-.244.343-.49.578-.734.822-.244.244-.503.51-.215 1.006.289.497 1.282 2.11 2.76 3.425 1.895 1.688 3.328 2.213 3.824 2.502.496.289.762.03.996-.215.244-.244.479-.49.822-.734.343-.244.685-.122 1.137.064.453.187 1.248.479 1.334.723.086.234.13.47.13.708 0 .24-.044.486-.13.73z"/>
          </svg>
          WhatsApp Booking
        </a>
      </div>
    </>
  );
}
