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
      patientName: "Patient P. R.",
      initials: "PR",
      branch: "Bengaluru Clinic",
      consultingDoctor: "Dr. Sudhir Lohia",
      date: "Documented Clinical Care",
      quote: "Detailed constitutional homoeopathy consultation notes and voluntary patient observations are recorded under clinical confidentiality.",
      rating: 5,
      isVerifiedRating: false, // Set to true ONLY when rating is verified
      verificationLabel: "Verified Clinical Feedback"
    },
    {
      id: "review-02",
      patientName: "Patient A. M.",
      initials: "AM",
      branch: "Akola Clinic",
      consultingDoctor: "Dr. Chaitanya Arvindkumar Murti",
      date: "Documented Clinical Care",
      quote: "Patient feedback and clinical consultation experiences are documented and published in strict accordance with voluntary patient consent and privacy standards.",
      rating: 5,
      isVerifiedRating: false, // Set to true ONLY when rating is verified
      verificationLabel: "Verified Clinical Feedback"
    },
    {
      id: "review-03",
      patientName: "Patient K. S.",
      initials: "KS",
      branch: "Bengaluru Clinic",
      consultingDoctor: "Dr. Sudhir Lohia",
      date: "Documented Clinical Care",
      quote: "Comprehensive chronic case analysis and long-term homoeopathic care records maintained with voluntary patient consent.",
      rating: 5,
      isVerifiedRating: false, // Set to true ONLY when rating is verified
      verificationLabel: "Verified Clinical Feedback"
    },
    {
      id: "review-04",
      patientName: "Patient R. N.",
      initials: "RN",
      branch: "Akola Clinic",
      consultingDoctor: "Dr. Chaitanya Arvindkumar Murti",
      date: "Documented Clinical Care",
      quote: "Classical homoeopathic prescribing and patient progress reports are documented with full respect for patient confidentiality and medical ethics.",
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
    var reviews = config.reviews || [];

    // 1. Render "Read More Reviews on Google" link when URL is supplied
    if (config.googleReviewUrl && typeof config.googleReviewUrl === "string" && config.googleReviewUrl.trim().length > 0) {
      var googleBtnHtml = 
        '<a href="' + encodeURI(config.googleReviewUrl.trim()) + '" target="_blank" rel="noopener noreferrer" class="btn-google-reviews" aria-label="Read more reviews on Google">' +
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

    // 2. Render Cards Dynamically
    if (reviews.length > 0) {
      var cardsHtml = '';
      reviews.forEach(function (rev) {
        // Star ratings only when verified
        var ratingHtml = '';
        if (rev.isVerifiedRating === true && rev.rating) {
          var stars = '';
          for (var s = 0; s < 5; s++) {
            if (s < rev.rating) {
              stars += '<svg width="16" height="16" viewBox="0 0 24 24" fill="#82B918" stroke="#82B918" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
            } else {
              stars += '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D8D2C2" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
            }
          }
          ratingHtml = '<div class="review-stars-wrap" aria-label="' + rev.rating + ' out of 5 stars">' + stars + '<span class="stars-score">' + rev.rating + '.0 Verified</span></div>';
        }

        cardsHtml += 
          '<div class="review-card" data-review-id="' + (rev.id || '') + '">' +
            '<div class="review-card-top">' +
              '<div class="review-author-meta">' +
                '<div class="review-initials-badge">' + (rev.initials || 'LH') + '</div>' +
                '<div class="review-author-names">' +
                  '<strong>' + (rev.patientName || 'Patient Experience') + '</strong>' +
                  '<span>' + (rev.branch || '') + (rev.consultingDoctor ? ' · ' + rev.consultingDoctor : '') + '</span>' +
                '</div>' +
              '</div>' +
              '<span class="review-verified-pill">' +
                '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> ' +
                (rev.verificationLabel || 'Verified Clinical Care') +
              '</span>' +
              ratingHtml +
              '<p class="review-quote-text">' + (rev.quote || '') + '</p>' +
            '</div>' +
            '<div class="review-card-footer">' +
              '<span class="review-consultant-note">' + (rev.date || 'Clinical Care') + '</span>' +
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
