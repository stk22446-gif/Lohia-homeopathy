/**
 * ============================================================================
 * LOHIA'S HOMOEOPATHY – CENTRAL ASSET & MEDIA CONFIGURATION
 * ============================================================================
 * 
 * This file centralizes all asset references across the website.
 * To replace temporary placeholders when official photographs or verified patient
 * reviews arrive, update the URLs in this configuration.
 */

const SITE_ASSETS = {
  // Official Brand Identity (Do not modify, redraw, or apply CSS filters)
  branding: {
    logoUrl: "https://res.cloudinary.com/mgkpr2it/image/upload/v1795220510/fdc22116-5a44-416c-9e67-ab1f7a3a4d89.png",
    logoAlt: "Lohia's Homoeopathy Official Brand Logo"
  },

  // 1. Doctor Photographs & Profiles
  // --------------------------------------------------------------------------
  // Dr. Sudhir Lohia uses a professional neutral silhouette reference placeholder
  // pending official studio portrait.
  // Dr. Chaitanya Arvindkumar Murti uses his authentic consulting doctor photograph.
  doctors: {
    // Doctor 1: Dr. Sudhir Lohia (Bengaluru Branch)
    drSudhirLohia: {
      name: "Dr. Sudhir Lohia",
      title: "Homoeopath & Health Care Consultant",
      branch: "Bengaluru Branch",
      city: "Bengaluru, Karnataka",
      address: "Pashmina Water Front, Tower 3, 25D, Old Madras Road, Battarahalli, Bengaluru – 560049",
      phone: "+91 9422 161 321",
      phoneRaw: "+919422161321",
      whatsapp: "919422161321",
      schedule: "Mon–Sat: 10:00 AM – 1:00 PM & 4:00 PM – 6:00 PM (Sunday Closed)",
      isPlaceholder: true,
      imageUrl: "assets/images/doctor-placeholder-lohia.svg",
      imageAlt: "Dr. Sudhir Lohia — Professional Profile Placeholder (Temporary reference image, official portrait pending)"
    },

    // Doctor 2: Dr. Chaitanya Arvindkumar Murti (Akola Branch)
    drChaitanyaMurti: {
      name: "Dr. Chaitanya Arvindkumar Murti",
      title: "Consulting Homoeopath · Akola Branch",
      branch: "Akola Branch",
      city: "Akola, Maharashtra",
      address: "Mankar Commercial Complex, S.A. College Road, Civil Lines, Akola – 444001",
      phone: "+91 9420 794 417",
      phoneRaw: "+919420794417",
      whatsapp: "919420794417",
      schedule: "Mon–Sat: 10:00 AM – 2:00 PM & 6:00 PM – 9:00 PM (Sunday Closed)",
      isPlaceholder: false,
      imageUrl: "https://res.cloudinary.com/mgkpr2it/image/upload/v1795217578/download.jpg",
      imageAlt: "Dr. Chaitanya Arvindkumar Murti — Consulting Homoeopath at Lohia's Homoeopathy"
    }
  },

  // 2. Homeopathic Medicine Illustrative Reference Imagery
  // --------------------------------------------------------------------------
  // Tasteful illustrative imagery of homeopathic globules and small medicine bottles
  // on a clean consultation table under natural lighting.
  // Physical clinic interior, reception, and exterior photography is intentionally omitted
  // per the clinic owner's directive to keep presentation modest, authentic, and focused on healthcare care.
  medicineReference: {
    imageUrl: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Tasteful homeopathic globules and consultation medicine vials under soft natural lighting",
    badgeLabel: "Classical Homoeopathic Remedies",
    captionTitle: "Homeopathic Globules & Consultation Remedies",
    captionSubtitle: "Dispensed exclusively for registered patients · Since 1992",
    isIllustrative: true
  },

  // 3. Clinic Space Imagery Policy
  // --------------------------------------------------------------------------
  // In accordance with clinic owner instructions:
  // Clinic interior, exterior, reception, and consultation room photographs are omitted.
  // The website focuses purely on doctors, constitutional consultation, healthcare guidance,
  // and direct branch assistance.
  clinicSpacePolicy: {
    displayPhysicalGalleries: false,
    focus: "doctors_consultation_guidance"
  },

  // 4. Patient Feedback Configuration
  // --------------------------------------------------------------------------
  // Kept hidden/disabled on the public website until genuine, voluntary patient
  // reviews are supplied and their publication is approved.
  // To enable the section publicly once real reviews arrive, change `isEnabled: true`.
  patientReviews: {
    isEnabled: false, // Set to true once verified patient testimonials are available
    sectionTitle: "Patient Feedback",
    sectionEyebrow: "Patient Experiences",
    sectionDescription: "Authentic feedback and experiences from patients under clinical consultation at Lohia's Homoeopathy.",
    placeholderNotice: "Patient feedback entries will be displayed here once genuine voluntary written consent has been verified.",
    avatarPlaceholder: "assets/images/patient-avatar-placeholder.svg",
    entries: [
      {
        id: "feedback-01",
        avatar: "assets/images/patient-avatar-placeholder.svg",
        initials: "P. R.",
        branch: "Bengaluru Clinic",
        consultant: "Dr. Sudhir Lohia",
        status: "Pending Verified Feedback",
        text: "Verified patient feedback will appear here once voluntary consent is obtained."
      },
      {
        id: "feedback-02",
        avatar: "assets/images/patient-avatar-placeholder.svg",
        initials: "A. M.",
        branch: "Akola Clinic",
        consultant: "Dr. Chaitanya Arvindkumar Murti",
        status: "Pending Verified Feedback",
        text: "Verified patient feedback will appear here once voluntary consent is obtained."
      },
      {
        id: "feedback-03",
        avatar: "assets/images/patient-avatar-placeholder.svg",
        initials: "K. S.",
        branch: "Bengaluru Clinic",
        consultant: "Dr. Sudhir Lohia",
        status: "Pending Verified Feedback",
        text: "Verified patient feedback will appear here once voluntary consent is obtained."
      },
      {
        id: "feedback-04",
        avatar: "assets/images/patient-avatar-placeholder.svg",
        initials: "R. N.",
        branch: "Akola Clinic",
        consultant: "Dr. Chaitanya Arvindkumar Murti",
        status: "Pending Verified Feedback",
        text: "Verified patient feedback will appear here once voluntary consent is obtained."
      }
    ]
  }
};

// Expose to window for modular accessibility
if (typeof window !== "undefined") {
  window.SITE_ASSETS = SITE_ASSETS;
}
