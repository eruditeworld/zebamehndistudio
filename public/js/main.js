/**
 * ZEBA MEHNDI STUDIO — Vanilla JavaScript
 * "Where Tradition Meets Timeless Beauty"
 * Mobile Navigation, Gallery Filters, Lightbox, WhatsApp Form Handler
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  const navLinks = document.querySelectorAll('.mobile-nav-item a, .nav-links a');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) {
        mobileDrawer.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      } else {
        mobileDrawer.classList.add('open');
        mobileToggle.classList.add('active');
        mobileToggle.setAttribute('aria-expanded', 'true');
      }
    });

    // Close mobile menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!mobileDrawer.contains(e.target) && !mobileToggle.contains(e.target) && mobileDrawer.classList.contains('open')) {
        mobileDrawer.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 2. Gallery Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterVal === 'all' || itemCategory === filterVal) {
          item.classList.remove('hide');
          item.style.opacity = '0';
          setTimeout(() => {
            item.style.opacity = '1';
          }, 50);
        } else {
          item.classList.add('hide');
        }
      });
    });
  });

  // 3. Lightbox Functionality
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxCategory = document.getElementById('lightboxCategory');
  const lightboxWaBtn = document.getElementById('lightboxWaBtn');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  let currentGalleryIndex = 0;
  const visibleGalleryItems = () => Array.from(document.querySelectorAll('.gallery-item:not(.hide)'));

  function updateLightbox(index) {
    const items = visibleGalleryItems();
    if (items.length === 0) return;

    if (index < 0) index = items.length - 1;
    if (index >= items.length) index = 0;
    currentGalleryIndex = index;

    const currentItem = items[currentGalleryIndex];
    const imgSrc = currentItem.getAttribute('data-src') || currentItem.querySelector('img').src;
    const title = currentItem.getAttribute('data-title') || 'Exclusive Mehndi Art';
    const category = currentItem.getAttribute('data-category-label') || 'Bridal & Occasion';

    if (lightboxImg) lightboxImg.src = imgSrc;
    if (lightboxTitle) lightboxTitle.textContent = title;
    if (lightboxCategory) lightboxCategory.textContent = category;

    // Direct WhatsApp enquiry for this specific design
    if (lightboxWaBtn) {
      const text = encodeURIComponent(`Hello Zeba Mehndi Studio, I am enquiring about the "${title}" (${category}) design from your gallery. Could you please share availability and pricing details?`);
      lightboxWaBtn.href = `https://wa.me/918931020349?text=${text}`;
    }
  }

  function openLightbox(item) {
    const items = visibleGalleryItems();
    currentGalleryIndex = items.indexOf(item);
    if (currentGalleryIndex === -1) currentGalleryIndex = 0;
    updateLightbox(currentGalleryIndex);

    if (lightbox) {
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeLightbox() {
    if (lightbox) {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      openLightbox(item);
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      updateLightbox(currentGalleryIndex - 1);
    });
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', (e) => {
      e.stopPropagation();
      updateLightbox(currentGalleryIndex + 1);
    });
  }

  // Keyboard navigation for lightbox
  document.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('open')) return;

    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      updateLightbox(currentGalleryIndex - 1);
    } else if (e.key === 'ArrowRight') {
      updateLightbox(currentGalleryIndex + 1);
    }
  });

  // 4. Quick WhatsApp Booking Form
  const enquiryForm = document.getElementById('quickBookingForm');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('clientName');
      const serviceSelect = document.getElementById('serviceSelect');
      const eventDateInput = document.getElementById('eventDate');
      const notesInput = document.getElementById('eventNotes');

      const name = nameInput ? nameInput.value.trim() : '';
      const service = serviceSelect ? serviceSelect.value : 'Bridal Mehndi';
      const eventDate = eventDateInput ? eventDateInput.value : '';
      const notes = notesInput ? notesInput.value.trim() : '';

      let message = `Hello Zeba Mehndi Studio,\n`;
      message += `My name is ${name || 'a bride-to-be'}.\n`;
      message += `I would like to enquire about your ${service} services.`;
      if (eventDate) {
        message += `\nEvent Date: ${eventDate}`;
      }
      if (notes) {
        message += `\nNotes: ${notes}`;
      }
      message += `\nPlease share your availability and package details.`;

      const encodedMsg = encodeURIComponent(message);
      const waUrl = `https://wa.me/918931020349?text=${encodedMsg}`;

      window.open(waUrl, '_blank', 'noopener,noreferrer');
    });
  }
});
