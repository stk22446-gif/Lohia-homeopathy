/**
 * Lohia's Homoeopathy – Appointment Handling & WhatsApp Dispatch
 * Established Since 1992 | Homeopathic Clinic
 */

(function () {
  "use strict";

  function initAppointmentForms() {
    const forms = document.querySelectorAll(".appointment-form, form[data-appointment-form]");

    forms.forEach(function (form) {
      const branchButtons = form.querySelectorAll(".form-branch-btn");
      const branchInput = form.querySelector('input[name="preferred_branch"]');
      const akolaSlotWrap = form.querySelector(".akola-slot-field");
      const standardTimeWrap = form.querySelector(".standard-time-field");
      const branchNotice = form.querySelector(".branch-timing-notice");
      const feedback = form.querySelector(".form-feedback");

      function updateBranch(branchKey) {
        if (!window.BRANCH_DATA || !window.BRANCH_DATA[branchKey]) return;
        const data = window.BRANCH_DATA[branchKey];

        // Update active class on buttons
        branchButtons.forEach(function (btn) {
          if (btn.getAttribute("data-branch") === branchKey) {
            btn.classList.add("active");
            btn.setAttribute("aria-pressed", "true");
          } else {
            btn.classList.remove("active");
            btn.setAttribute("aria-pressed", "false");
          }
        });

        if (branchInput) {
          branchInput.value = branchKey;
        }

        if (branchKey === "akola") {
          if (akolaSlotWrap) akolaSlotWrap.style.display = "block";
          if (standardTimeWrap) standardTimeWrap.style.display = "none";
          if (branchNotice) {
            branchNotice.innerHTML =
              '<strong>Akola Branch:</strong> Mon–Sat 10:00 AM – 2:00 PM &amp; 6:00 PM – 9:00 PM (Sunday Closed). Patients are seen by appointment only. Direct Desk: <a href="tel:+919420794417">+91 9420794417</a>.';
          }
        } else {
          if (akolaSlotWrap) akolaSlotWrap.style.display = "none";
          if (standardTimeWrap) standardTimeWrap.style.display = "block";
          if (branchNotice) {
            branchNotice.innerHTML =
              '<strong>Bengaluru Branch:</strong> Mon–Sat: 10:00 AM – 1:00 PM &amp; 4:00 PM – 6:00 PM (Sunday Closed). Direct Desk: <a href="tel:+919422161321">+91 9422161321</a>.';
          }
        }
      }

      branchButtons.forEach(function (btn) {
        btn.addEventListener("click", function () {
          const selected = this.getAttribute("data-branch");
          updateBranch(selected);
        });
      });

      // Default branch initialization
      const initialBranch = branchInput ? branchInput.value || "bengaluru" : "bengaluru";
      updateBranch(initialBranch);

      // Submission handler
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (feedback) {
          feedback.className = "form-feedback";
          feedback.style.display = "none";
          feedback.textContent = "";
        }

        // Honeypot check
        const honeypot = form.querySelector('input[name="hp_extra_verification"]');
        if (honeypot && honeypot.value.trim() !== "") {
          return false;
        }

        const nameInput = form.querySelector('input[name="patient_name"]');
        const phoneInput = form.querySelector('input[name="patient_phone"]');
        const dateInput = form.querySelector('input[name="preferred_date"]');
        const messageInput = form.querySelector('textarea[name="patient_message"]');
        const branchVal = branchInput ? branchInput.value : "bengaluru";

        const name = nameInput ? nameInput.value.trim() : "";
        const phone = phoneInput ? phoneInput.value.trim() : "";
        const date = dateInput ? dateInput.value.trim() : "";
        const message = messageInput ? messageInput.value.trim() : "";

        // Determine preferred time
        let time = "";
        if (branchVal === "akola") {
          const slotSelect = form.querySelector('select[name="akola_time_slot"]');
          time = slotSelect ? slotSelect.value : "Morning: 10:00 AM – 2:00 PM";
        } else {
          const timeInput = form.querySelector('input[name="preferred_time"]');
          time = timeInput && timeInput.value.trim() !== "" ? timeInput.value.trim() : "Morning: 10:00 AM – 1:00 PM / Evening: 4:00 PM – 6:00 PM";
        }

        // Validation
        if (!name || name.length < 2) {
          showFeedback(feedback, "Please enter the patient's full name.", "error");
          if (nameInput) nameInput.focus();
          return false;
        }

        const cleanPhone = phone.replace(/[^0-9]/g, "");
        if (!phone || cleanPhone.length < 10) {
          showFeedback(feedback, "Please enter a valid contact phone number with at least 10 digits.", "error");
          if (phoneInput) phoneInput.focus();
          return false;
        }

        const branchInfo = window.BRANCH_DATA && window.BRANCH_DATA[branchVal] ? window.BRANCH_DATA[branchVal] : null;
        const targetWhatsapp = branchInfo ? branchInfo.whatsapp : (branchVal === "akola" ? "919420794417" : "919422161321");
        const branchLabel = branchVal === "akola" ? "Akola (Dr. Chaitanya Arvindkumar Murti)" : "Bengaluru (Dr. Sudhir Lohia)";

        // Construct formatted WhatsApp message
        let msg = "Hello Lohia's Homoeopathy,\n\n";
        msg += "I would like to enquire about an appointment.\n\n";
        msg += "• Patient Name: " + name + "\n";
        msg += "• Contact Number: " + phone + "\n";
        msg += "• Preferred Branch: " + branchLabel + "\n";
        if (date) msg += "• Preferred Date: " + date + "\n";
        if (time) msg += "• Preferred Time: " + time + "\n";
        if (message) msg += "• Note: " + message + "\n\n";
        msg += "(Please note: I understand this appointment enquiry will be confirmed by the clinic.)";

        const whatsappUrl = "https://wa.me/" + targetWhatsapp + "?text=" + encodeURIComponent(msg);

        showFeedback(
          feedback,
          "Opening WhatsApp to coordinate directly with the clinic desk. Your appointment will be confirmed by the clinic.",
          "success"
        );

        // Open WhatsApp window
        const win = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        if (!win || win.closed || typeof win.closed === "undefined") {
          // If popup blocked, redirect directly
          window.location.href = whatsappUrl;
        }
      });
    });
  }

  function showFeedback(el, message, type) {
    if (!el) return;
    el.textContent = message;
    el.className = "form-feedback is-" + type;
    el.style.display = "block";
    el.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAppointmentForms);
  } else {
    initAppointmentForms();
  }

  if (typeof window !== "undefined") {
    window.initAppointmentForms = initAppointmentForms;
  }
})();
