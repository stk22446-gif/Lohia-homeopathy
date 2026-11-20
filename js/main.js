/**
 * LOHIA'S HOMOEOPATHY — CLINIC INTERACTION SYSTEM
 * Operated by Dr. Sudhir Lohia, Homoeopath & Health Care Consultant
 * Established Since 1992 | Battarahalli, Bengaluru
 * Vanilla JavaScript (Zero External Frameworks)
 */

(function () {
  'use strict';

  // --- Clinic Configuration ---
  const CLINIC_WHATSAPP_NUMBER = '919422161321'; // +91 942 216 1321
  const CLINIC_PHONE_DISPLAY = '+91 942 216 1321';

  // --- Dynamic Year ---
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // --- 1. Cinematic Entrance & Page Transitions ---
  window.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '1';

    // Animate hero elements immediately upon load
    const heroReveals = document.querySelectorAll('.hero .reveal-on-scroll');
    heroReveals.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('is-revealed');
      }, 100 + index * 140);
    });
  });

  // --- 2. Scroll-Triggered Section Reveals (IntersectionObserver) ---
  const revealElements = document.querySelectorAll('.reveal-on-scroll:not(.hero .reveal-on-scroll)');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.12
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }

  // --- 3. Animated Experience Counter (Since 1992) ---
  const counters = document.querySelectorAll('[data-counter]');
  let countersStarted = false;

  function runCounters() {
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-counter'), 10);
      const duration = 2000; // ms
      const start = 0;
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // EaseOutExpo curve
        const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentVal = Math.floor(start + (target - start) * easeOut);

        counter.textContent = currentVal;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }

  if (counters.length > 0 && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersStarted) {
          countersStarted = true;
          runCounters();
        }
      });
    }, { threshold: 0.25 });

    counters.forEach(counter => counterObserver.observe(counter));
  }

  // --- 4. Auto-Playing Clinic Image Carousel ---
  const carouselTrack = document.getElementById('clinicCarouselTrack');
  const carouselSlides = document.querySelectorAll('.carousel-slide');
  const carouselDots = document.querySelectorAll('.carousel-dot');
  const carouselPrevBtn = document.getElementById('carouselPrev');
  const carouselNextBtn = document.getElementById('carouselNext');
  const carouselProgressBar = document.getElementById('carouselProgressBar');

  let currentSlideIndex = 0;
  let carouselTimer = null;
  const slideIntervalMs = 2800; // 2.8 seconds interval as specified
  let isCarouselHovered = false;

  function goToSlide(index) {
    if (!carouselSlides.length) return;

    if (index >= carouselSlides.length) {
      currentSlideIndex = 0;
    } else if (index < 0) {
      currentSlideIndex = carouselSlides.length - 1;
    } else {
      currentSlideIndex = index;
    }

    carouselSlides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === currentSlideIndex);
    });

    carouselDots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentSlideIndex);
      dot.setAttribute('aria-selected', idx === currentSlideIndex ? 'true' : 'false');
    });

    // Reset progress bar animation
    if (carouselProgressBar) {
      carouselProgressBar.style.transition = 'none';
      carouselProgressBar.style.width = '0%';
      setTimeout(() => {
        if (!isCarouselHovered) {
          carouselProgressBar.style.transition = `width ${slideIntervalMs}ms linear`;
          carouselProgressBar.style.width = '100%';
        }
      }, 30);
    }
  }

  function nextSlide() {
    goToSlide(currentSlideIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentSlideIndex - 1);
  }

  function startCarouselTimer() {
    stopCarouselTimer();
    if (!isCarouselHovered) {
      if (carouselProgressBar) {
        carouselProgressBar.style.transition = `width ${slideIntervalMs}ms linear`;
        carouselProgressBar.style.width = '100%';
      }
      carouselTimer = setInterval(nextSlide, slideIntervalMs);
    }
  }

  function stopCarouselTimer() {
    if (carouselTimer) {
      clearInterval(carouselTimer);
      carouselTimer = null;
    }
    if (carouselProgressBar) {
      carouselProgressBar.style.transition = 'none';
      carouselProgressBar.style.width = '0%';
    }
  }

  if (carouselSlides.length > 0) {
    goToSlide(0);
    startCarouselTimer();

    if (carouselNextBtn) {
      carouselNextBtn.addEventListener('click', () => {
        nextSlide();
        startCarouselTimer();
      });
    }

    if (carouselPrevBtn) {
      carouselPrevBtn.addEventListener('click', () => {
        prevSlide();
        startCarouselTimer();
      });
    }

    carouselDots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        goToSlide(idx);
        startCarouselTimer();
      });
    });

    // Pause on hover
    const carouselContainer = document.querySelector('.carousel-wrapper');
    if (carouselContainer) {
      carouselContainer.addEventListener('mouseenter', () => {
        isCarouselHovered = true;
        stopCarouselTimer();
      });

      carouselContainer.addEventListener('mouseleave', () => {
        isCarouselHovered = false;
        startCarouselTimer();
      });

      // Touch / Swipe support for mobile
      let touchStartX = 0;
      let touchEndX = 0;

      carouselContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        isCarouselHovered = true;
        stopCarouselTimer();
      }, { passive: true });

      carouselContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        isCarouselHovered = false;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > 40) {
          if (diff > 0) {
            nextSlide();
          } else {
            prevSlide();
          }
        }
        startCarouselTimer();
      }, { passive: true });
    }
  }

  // --- 5. Interactive Doctor Accordion Tabs ---
  const doctorTabHeaders = document.querySelectorAll('.doctor-tab-header');
  doctorTabHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const parentItem = header.closest('.doctor-tab-item');
      const isActive = parentItem.classList.contains('active');

      // Close other tabs for elegant focus
      document.querySelectorAll('.doctor-tab-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.doctor-tab-header').setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        parentItem.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // --- 6. Interactive Clinical Services Showcase Switcher ---
  const serviceTabBtns = document.querySelectorAll('.service-tab-btn');
  const servicePanes = document.querySelectorAll('.service-pane');

  serviceTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-service-target');

      serviceTabBtns.forEach(b => b.classList.remove('active'));
      servicePanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });

  // --- 7. Sticky Header & Subtle Scroll Transitions ---
  const siteHeader = document.getElementById('siteHeader');
  if (siteHeader) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 25) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // --- 8. Mobile Navigation Drawer ---
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileBackdrop = document.getElementById('mobileBackdrop');
  const mobileClose = document.getElementById('mobileClose');

  function openMobileNav() {
    if (!mobileDrawer || !mobileBackdrop) return;
    mobileDrawer.classList.add('open');
    mobileBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'true');
  }

  function closeMobileNav() {
    if (!mobileDrawer || !mobileBackdrop) return;
    mobileDrawer.classList.remove('open');
    mobileBackdrop.classList.remove('open');
    document.body.style.overflow = '';
    if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openMobileNav);
  if (mobileClose) mobileClose.addEventListener('click', closeMobileNav);
  if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMobileNav);

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  // --- 9. Modal Appointment Dialog ---
  const modalOverlay = document.getElementById('consultationModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  window.openConsultationModal = function (prefilledService) {
    if (!modalOverlay) return;
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    modalOverlay.setAttribute('aria-hidden', 'false');

    if (prefilledService) {
      const modeSelect = modalOverlay.querySelector('[name="consultation_mode"]');
      if (modeSelect) modeSelect.value = prefilledService;
    }

    const firstInput = modalOverlay.querySelector('input:not([type="hidden"])');
    if (firstInput) firstInput.focus();
  };

  window.closeConsultationModal = function () {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
    modalOverlay.setAttribute('aria-hidden', 'true');
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', window.closeConsultationModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) window.closeConsultationModal();
    });
  }

  document.querySelectorAll('[data-modal-trigger="consultation"]').forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      const service = this.getAttribute('data-service') || '';
      window.openConsultationModal(service);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileNav();
      window.closeConsultationModal();
    }
  });

  // --- 10. Consultation Mode Toggle in Forms ---
  document.querySelectorAll('.mode-toggle-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const parent = this.closest('.consultation-mode-toggle');
      if (!parent) return;

      parent.querySelectorAll('.mode-toggle-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const targetValue = this.getAttribute('data-mode');
      const hiddenInput = parent.parentElement.querySelector('input[name="consultation_mode"]');
      if (hiddenInput) {
        hiddenInput.value = targetValue;
      }
    });
  });

  // --- 11. WhatsApp Enquiry Form Submission Handler ---
  window.handleConsultationEnquiry = function (event, formElement) {
    event.preventDefault();

    const feedbackEl = formElement.querySelector('.form-feedback');
    const submitBtn = formElement.querySelector('button[type="submit"]');

    // Honeypot anti-spam
    const honeypot = formElement.querySelector('input[name="hp_extra_verification"]');
    if (honeypot && honeypot.value.trim() !== '') {
      return false;
    }

    const nameInput = formElement.querySelector('[name="patient_name"]');
    const phoneInput = formElement.querySelector('[name="patient_phone"]');
    const modeSelect = formElement.querySelector('[name="consultation_mode"]');
    const messageInput = formElement.querySelector('[name="patient_message"]');
    const cityInput = formElement.querySelector('[name="patient_city"]');

    const patientName = nameInput ? nameInput.value.trim() : '';
    const patientPhone = phoneInput ? phoneInput.value.trim() : '';
    const consultationMode = modeSelect ? modeSelect.value : 'In-Person Consultation (Clinic)';
    const patientMessage = messageInput ? messageInput.value.trim() : '';
    const patientCity = cityInput ? cityInput.value.trim() : '';

    if (!patientName) {
      showFeedback(feedbackEl, 'Please enter patient full name.', 'error');
      if (nameInput) nameInput.focus();
      return false;
    }

    if (!patientPhone || patientPhone.length < 8) {
      showFeedback(feedbackEl, 'Please enter a valid phone number (at least 8-10 digits).', 'error');
      if (phoneInput) phoneInput.focus();
      return false;
    }

    // Format WhatsApp Message for Clinic Desk
    let text = `*LOHIA'S HOMOEOPATHY — CLINIC ENQUIRY*\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `*Patient Name:* ${patientName}\n`;
    text += `*Contact Phone:* ${patientPhone}\n`;
    if (patientCity) text += `*City / Location:* ${patientCity}\n`;
    text += `*Consultation Mode:* ${consultationMode}\n`;
    if (patientMessage) text += `*Concern / Purpose:* ${patientMessage}\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `_Sent via Lohia's Homoeopathy Clinic Website_\n`;
    text += `_Pashmina Water Front, Old Madras Road, Battarahalli, Bengaluru_`;

    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${CLINIC_WHATSAPP_NUMBER}?text=${encoded}`;

    showFeedback(
      feedbackEl,
      'Opening WhatsApp to connect with Dr. Sudhir Lohia\'s clinic desk (+91 942 216 1321). Consultation slot and schedule availability will be confirmed directly upon review.',
      'success'
    );

    if (submitBtn) {
      const origText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Connecting to Clinic WhatsApp...</span>`;
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = origText;
      }, 4000);
    }

    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 400);

    return false;
  };

  // Helper: Show Feedback Message
  function showFeedback(el, msg, type) {
    if (!el) return;
    el.className = 'form-feedback ' + type;
    el.textContent = msg;
    el.style.display = 'block';
  }

  // --- 12. General Contact Form Handler ---
  window.handleContactForm = function (event, formElement) {
    event.preventDefault();

    const feedbackEl = formElement.querySelector('.form-feedback');
    const submitBtn = formElement.querySelector('button[type="submit"]');

    const honeypot = formElement.querySelector('input[name="hp_extra_verification"]');
    if (honeypot && honeypot.value.trim() !== '') return false;

    const name = formElement.querySelector('[name="contact_name"]').value.trim();
    const phone = formElement.querySelector('[name="contact_phone"]').value.trim();
    const email = formElement.querySelector('[name="contact_email"]') ? formElement.querySelector('[name="contact_email"]').value.trim() : '';
    const subject = formElement.querySelector('[name="contact_subject"]') ? formElement.querySelector('[name="contact_subject"]').value : 'Consultation Appointment';
    const message = formElement.querySelector('[name="contact_message"]').value.trim();

    if (!name || !phone) {
      showFeedback(feedbackEl, 'Please enter your name and phone number.', 'error');
      return false;
    }

    let text = `*LOHIA'S HOMOEOPATHY — CLINIC MESSAGE*\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `*From:* ${name}\n`;
    text += `*Phone:* ${phone}\n`;
    if (email) text += `*Email:* ${email}\n`;
    text += `*Subject:* ${subject}\n`;
    if (message) text += `*Message:* ${message}\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `_Sent via Contact Page_`;

    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${CLINIC_WHATSAPP_NUMBER}?text=${encoded}`;

    showFeedback(
      feedbackEl,
      'Opening WhatsApp with your enquiry for Dr. Sudhir Lohia\'s clinic team (+91 942 216 1321).',
      'success'
    );

    if (submitBtn) {
      const origText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Connecting...</span>`;
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = origText;
      }, 4000);
    }

    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 400);

    return false;
  };

  // --- 13. Active Nav Link Detection ---
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

})();
