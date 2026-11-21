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
  // Currently configured with professional neutral medical silhouette placeholders.
  // When official studio/clinic portraits of the doctors are available, update
  // the `imageUrl` fields below and set `isPlaceholder` to false.
  doctors: {
    // Doctor 1: Dr. Sudhir Lohia (Bengaluru Branch)
    drSudhirLohia: {
      name: "Dr. Sudhir Lohia",
      title: "Homoeopath & Health Care Consultant",
      branch: "Bengaluru Branch",
      city: "Bengaluru, Karnataka",
      address: "Pashmina Water Front, T03, 25-D, Old Madras Road, Battarahalli, Bengaluru – 560049",
      phone: "+91 9422 161 321",
      phoneRaw: "+919422161321",
      whatsapp: "919422161321",
      schedule: "Mon–Sat: 10:00 AM – 1:00 PM & 4:00 PM – 6:00 PM (Sunday Closed)",
      isPlaceholder: true,
      imageUrl: "assets/images/doctor-placeholder-lohia.svg",
      imageAlt: "Dr. Sudhir Lohia — Professional Profile Placeholder (Temporary reference image, official photograph pending)"
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
      isPlaceholder: true,
      imageUrl: "assets/images/doctor-placeholder-murti.svg",
      imageAlt: "Dr. Chaitanya Arvindkumar Murti — Professional Profile Placeholder (Temporary reference image, official photograph pending)"
    }
  },

  // 2. Homeopathic Medicine Illustrative Reference Imagery
  // --------------------------------------------------------------------------
  // Illustrative reference showing clean consultation desk, homeopathic globules,
  // and small medicine vials under soft natural lighting.
  // Note: This is labeled as illustrative reference imagery, not actual clinic stock.
  medicineReference: {
    imageUrl: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Illustrative reference photograph — Homeopathic globules and small medicine vials on consultation table with soft natural lighting",
    badgeLabel: "Illustrative Reference Photograph",
    captionTitle: "Homeopathic Globules & Consultation Remedies",
    captionSubtitle: "Representative reference imagery · Not actual clinic stock",
    isIllustrative: true
  },

  // 3. Akola Branch Actual Photographs
  // --------------------------------------------------------------------------
  // Authentic photographs of the Akola clinic facilities.
  akolaClinicPhotos: [
    {
      id: "akola-entrance",
      title: "Akola Clinic Entrance & Building Signboard",
      subtitle: "Civil Lines, S.A. College Road, Akola",
      url: "https://res.cloudinary.com/mgkpr2it/image/upload/v1795217665/4bece18e-454e-4bdf-8f9c-175ee4e5244e.jpg",
      alt: "Lohia's Homoeopathy Clinic Akola — Entrance & Building Signboard"
    },
    {
      id: "akola-consultation",
      title: "Doctor's Consultation Chamber & Dispensary Shelving",
      subtitle: "Classical homoeopathic remedy collections",
      url: "https://res.cloudinary.com/mgkpr2it/image/upload/v1795217607/9a7d252e-a91c-4ee1-b417-8e0480e630a8.jpg",
      alt: "Doctor's Desk & Homoeopathic Dispensary Shelf at Lohia's Homoeopathy"
    },
    {
      id: "akola-reception",
      title: "Reception & Patient Waiting Lounge",
      subtitle: "Quiet, calm environment for patient consultation",
      url: "https://res.cloudinary.com/mgkpr2it/image/upload/v1795217598/abbc0d1e-0992-4af4-81b8-65cfae8f9a5c.jpg",
      alt: "Lohia's Homoeopathy Clinic Reception & Patient Waiting Area"
    },
    {
      id: "akola-consultant",
      title: "Dr. Chaitanya Arvindkumar Murti",
      subtitle: "Consulting Homoeopath · Akola Branch",
      url: "https://res.cloudinary.com/mgkpr2it/image/upload/v1795217578/download.jpg",
      alt: "Dr. Chaitanya Arvindkumar Murti at Lohia's Homoeopathy"
    }
  ],

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
