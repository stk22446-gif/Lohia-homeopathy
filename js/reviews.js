/**
 * ============================================================================
 * LOHIA'S HOMOEOPATHY – PATIENT REVIEWS & TESTIMONIALS
 * ============================================================================
 * 
 * This file contains all patient review data and configuration for the
 * "What Our Patients Say" section on the homepage.
 * 
 * HOW TO ADD OR UPDATE A REVIEW:
 * 1. Add a new object inside the `reviews` array below.
 * 2. To display star ratings, set `isVerifiedRating: true` and `rating: 5` (1-5).
 *    Star ratings are rendered ONLY when `isVerifiedRating` is true.
 * 3. Provide genuine patient quotes, initials or names, branch, and doctor.
 * 4. To activate the "Read More Reviews on Google" button, paste your verified
 *    Google Business Review URL into `googleReviewUrl`.
 * 
 * ETHICAL GUIDELINES:
 * - Do not fabricate patient testimonials, dates, or star ratings.
 * - Always respect patient confidentiality and clinical privacy standards.
 */

const PATIENT_REVIEWS_CONFIG = {
  // Google Reviews URL
  // Supply the official Google Business / Google Maps review link here when ready.
  // Example: "https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID"
  // If left empty (""), the Google Reviews link will be gracefully omitted.
  googleReviewUrl: "",

  // Patient Reviews Data
  // Keep ready for genuine patient feedback. Star ratings show only when verified.
  reviews: [
    {
      id: "review-01",
      patientName: "Shubham Gupta",
      initials: "SG",
      branch: "Bengaluru Clinic",
      consultingDoctor: "Dr. Sudhir Lohia",
      date: "Documented Clinical Care",
      quote: "I consulted Lohia's Homoeopathy for my hair loss problem (alopecia). I have recently started noticing improvement in my condition, and I am happy with the progress so far. I appreciate the consultation and guidance provided. Looking forward to continuing my journey.",
      rating: 5,
      isVerifiedRating: true, // Set to true ONLY when rating is verified
      verificationLabel: "Verified Clinical Feedback"
    },
    {
      id: "review-02",
      patientName: "Sneha Patil",
      initials: "SP",
      branch: "Akola Clinic",
      consultingDoctor: "Dr. Chaitanya Arvindkumar Murti",
      date: "Documented Clinical Care",
      quote: "I had a very good experience at Lohia's Homoeopathy, Akola. Dr. Chaitanya Murti is very polite and understanding. He listens carefully to the patient's concerns and explains everything patiently. I really appreciate his professional approach and the attention given during the consultation.",
      rating: 5,
      isVerifiedRating: true, // Set to true ONLY when rating is verified
      verificationLabel: "Verified Clinical Feedback"
    },
    {
      id: "review-03",
      patientName: "Sonal Agrawal",
      initials: "SA",
      branch: "Bengaluru Clinic",
      consultingDoctor: "Dr. Sudhir Lohia",
      date: "Documented Clinical Care",
      quote: "I had a very good experience with Dr Sudhir Lohia.He is polite, patient, and listens carefully to all concerns.The treatment and guidance were explained properly, and the overall experience was very satisfactory.I truly appreciate the care, attention, and professionalism.Highly recommended!",
      rating: 5,
      isVerifiedRating: true, // Set to true ONLY when rating is verified
      verificationLabel: "Verified Clinical Feedback"
    },
    {
      id: "review-04",
      patientName: "Pooja Deshmukh",
      initials: "PD",
      branch: "Akola Clinic",
      consultingDoctor: "Dr. Chaitanya Arvindkumar Murti",
      date: "Documented Clinical Care",
      quote: "I am undergoing treatment for skin pigmentation at Lohia's Homoeopathy, Akola, under the care of Dr. Chaitanya Murti. The doctor has been very supportive and has explained the treatment process clearly. I am hopeful for positive results and appreciate the guidance provided.",
      rating: 5,
      isVerifiedRating: false, // Set to true ONLY when rating is verified
      verificationLabel: "Verified Clinical Feedback"
    }
  ]
};

// Make accessible on the global window object
if (typeof window !== "undefined") {
  window.PATIENT_REVIEWS_CONFIG = PATIENT_REVIEWS_CONFIG;
}

/**
 * Self-initializing Reviews Carousel Controller
 */
(function () {
  'use strict';

  // Security: HTML entity escaping to prevent DOM XSS
  function escapeHTML(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function initReviewsCarousel() {
    var viewport = document.getElementById('reviewsCarouselViewport');
    var track = document.getElementById('reviewsTrack');
    var prevBtn = document.getElementById('revPrevBtn');
    var nextBtn = document.getElementById('revNextBtn');
    var dotsContainer = document.getElementById('reviewsDots');
    var googleDesktop = document.getElementById('googleReviewContainer');
    var googleMobile = document.getElementById('googleReviewMobileContainer');

    if (!viewport || !track) return;

    var config = window.PATIENT_REVIEWS_CONFIG || { reviews: [], googleReviewUrl: "" };
    var reviews = Array.isArray(config.reviews) ? config.reviews : [];

    // 1. Render "Read More Reviews on Google" link when URL is supplied and strictly valid HTTPS
    var rawGoogleUrl = (typeof config.googleReviewUrl === "string") ? config.googleReviewUrl.trim() : "";
    if (rawGoogleUrl.length > 0 && /^https:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(rawGoogleUrl)) {
      var safeGoogleUrl = escapeHTML(rawGoogleUrl);
      var googleBtnHtml =
        '<a href="' + safeGoogleUrl + '" target="_blank" rel="noopener noreferrer" class="btn-google-reviews" aria-label="Read more reviews on Google">' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
        '<path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>' +
        '</svg>' +
        '<span>Read More Reviews on Google</span>' +
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">' +
        '<path d="M7 17l9.2-9.2M17 17V8H8"/>' +
        '</svg>' +
        '</a>';

      if (googleDesktop) googleDesktop.innerHTML = googleBtnHtml;
      if (googleMobile) googleMobile.innerHTML = googleBtnHtml;
    }

    // 2. Render Cards Dynamically with strictly sanitized fields
    if (reviews.length > 0) {
      var cardsHtml = '';
      reviews.forEach(function (rev) {
        if (!rev || typeof rev !== 'object') return;

        var safeId = escapeHTML(rev.id || '').replace(/[^a-zA-Z0-9_-]/g, '');
        var safeInitials = escapeHTML(rev.initials || 'LH').slice(0, 5);
        var safePatientName = escapeHTML(rev.patientName || 'Patient Experience').slice(0, 100);
        var safeBranch = escapeHTML(rev.branch || '').slice(0, 100);
        var safeDoctor = rev.consultingDoctor ? escapeHTML(rev.consultingDoctor).slice(0, 100) : '';
        var safeVerificationLabel = escapeHTML(rev.verificationLabel || 'Verified Clinical Care').slice(0, 100);
        var safeQuote = escapeHTML(rev.quote || '').slice(0, 2000);
        var safeDate = escapeHTML(rev.date || 'Clinical Care').slice(0, 100);

        // Star ratings only when verified
        var ratingHtml = '';
        if (rev.isVerifiedRating === true && rev.rating) {
          var numRating = Math.min(5, Math.max(1, parseInt(rev.rating, 10) || 5));
          var stars = '';
          for (var s = 0; s < 5; s++) {
            if (s < numRating) {
              stars += '<svg width="16" height="16" viewBox="0 0 24 24" fill="#82B918" stroke="#82B918" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
            } else {
              stars += '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D8D2C2" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
            }
          }
          ratingHtml = '<div class="review-stars-wrap" aria-label="' + numRating + ' out of 5 stars">' + stars + '<span class="stars-score">' + numRating + '.0 Verified</span></div>';
        }

        cardsHtml +=
          '<div class="review-card" data-review-id="' + safeId + '">' +
          '<div class="review-card-top">' +
          '<div class="review-author-meta">' +
          '<div class="review-initials-badge">' + safeInitials + '</div>' +
          '<div class="review-author-names">' +
          '<strong>' + safePatientName + '</strong>' +
          '<span>' + safeBranch + (safeDoctor ? ' · ' + safeDoctor : '') + '</span>' +
          '</div>' +
          '</div>' +
          '<span class="review-verified-pill">' +
          '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> ' +
          safeVerificationLabel +
          '</span>' +
          ratingHtml +
          '<p class="review-quote-text">' + safeQuote + '</p>' +
          '</div>' +
          '<div class="review-card-footer">' +
          '<span class="review-consultant-note">' + safeDate + '</span>' +
          '<span class="review-heritage-badge">Since 1992</span>' +
          '</div>' +
          '</div>';
      });
      track.innerHTML = cardsHtml;
    }

    // 3. Carousel Mechanics
    var totalCards = track.children.length;
    if (totalCards === 0) return;

    var currentIndex = 0;

    function getCardsVisible() {
      var w = window.innerWidth;
      if (w >= 1024) return 3;
      if (w >= 768) return 2;
      return 1;
    }

    function getMaxIndex() {
      var visible = getCardsVisible();
      return Math.max(0, totalCards - visible);
    }

    function updateCarousel() {
      var maxIdx = getMaxIndex();
      if (currentIndex > maxIdx) currentIndex = maxIdx;
      if (currentIndex < 0) currentIndex = 0;

      var firstCard = track.children[0];
      if (!firstCard) return;

      var cardWidth = firstCard.getBoundingClientRect().width;
      var gap = 24; // 1.5rem gap
      var offset = currentIndex * (cardWidth + gap);

      track.style.transform = 'translateX(-' + offset + 'px)';

      // Update button states
      if (prevBtn) prevBtn.disabled = (currentIndex === 0);
      if (nextBtn) nextBtn.disabled = (currentIndex >= maxIdx);

      // Update dots
      if (dotsContainer) {
        var dots = dotsContainer.querySelectorAll('.rev-dot');
        dots.forEach(function (d, i) {
          if (i === currentIndex) {
            d.classList.add('active');
            d.setAttribute('aria-selected', 'true');
          } else {
            d.classList.remove('active');
            d.setAttribute('aria-selected', 'false');
          }
        });
      }
    }

    function renderDots() {
      if (!dotsContainer) return;
      var maxIdx = getMaxIndex();
      var count = maxIdx + 1;
      var dotsHtml = '';
      for (var i = 0; i < count; i++) {
        dotsHtml += '<button type="button" class="rev-dot' + (i === currentIndex ? ' active' : '') + '" data-slide-to="' + i + '" aria-label="Go to review slide ' + (i + 1) + '" role="tab" aria-selected="' + (i === currentIndex ? 'true' : 'false') + '"></button>';
      }
      dotsContainer.innerHTML = dotsHtml;

      dotsContainer.querySelectorAll('.rev-dot').forEach(function (dot) {
        dot.addEventListener('click', function () {
          var targetIdx = parseInt(this.getAttribute('data-slide-to'), 10);
          if (!isNaN(targetIdx)) {
            currentIndex = targetIdx;
            updateCarousel();
          }
        });
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        if (currentIndex > 0) {
          currentIndex--;
        } else {
          currentIndex = getMaxIndex(); // cyclic or stop
        }
        updateCarousel();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        var maxIdx = getMaxIndex();
        if (currentIndex < maxIdx) {
          currentIndex++;
        } else {
          currentIndex = 0; // cyclic wrap
        }
        updateCarousel();
      });
    }

    // Touch swipe support
    var touchStartX = 0;
    var touchEndX = 0;
    var touchStartY = 0;
    var touchEndY = 0;

    viewport.addEventListener('touchstart', function (e) {
      if (!e.changedTouches || e.changedTouches.length === 0) return;
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    viewport.addEventListener('touchend', function (e) {
      if (!e.changedTouches || e.changedTouches.length === 0) return;
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      var diffX = touchStartX - touchEndX;
      var diffY = touchStartY - touchEndY;

      // Check horizontal swipe intent
      if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
        var maxIdx = getMaxIndex();
        if (diffX > 0) {
          // Swipe left -> Next
          if (currentIndex < maxIdx) currentIndex++;
          else currentIndex = 0;
        } else {
          // Swipe right -> Prev
          if (currentIndex > 0) currentIndex--;
          else currentIndex = maxIdx;
        }
        updateCarousel();
      }
    }, { passive: true });

    // Window resize handler
    var resizeTimer = null;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        renderDots();
        updateCarousel();
      }, 100);
    }, { passive: true });

    // Initial setup
    renderDots();
    updateCarousel();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReviewsCarousel);
  } else {
    initReviewsCarousel();
  }
})();
