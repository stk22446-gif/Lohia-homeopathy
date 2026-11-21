/**
 * Lohia's Homoeopathy – Centralized Branch Data
 * Established Since 1992 | Homeopathic Clinic
 */

const BRANCH_DATA = {
  bengaluru: {
    key: "bengaluru",
    name: "Lohia's Homoeopathy",
    branchTitle: "Bengaluru Clinic",
    doctor: "Dr. Sudhir Lohia",
    doctorRole: "Homoeopath & Health Care Consultant",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560049",
    address: "Pashmina Water Front, T03, 25-D, Old Madras Road, Battarahalli, Bengaluru, Karnataka – 560049",
    addressLines: [
      "Pashmina Water Front, T03, 25-D",
      "Old Madras Road, Battarahalli",
      "Bengaluru, Karnataka – 560049"
    ],
    phone: "+91 9422161321",
    phoneDisplay: "+91 942 216 1321",
    phoneRaw: "+919422161321",
    whatsapp: "919422161321",
    email: "hello@lohiashomoeopathy.com",
    timings: "Monday to Saturday:\nMorning: 10:00 AM – 1:00 PM\nEvening: 4:00 PM – 6:00 PM\nSunday: Closed",
    timingsDisplay: "Mon–Sat: 10:00 AM – 1:00 PM & 4:00 PM – 6:00 PM (Sunday Closed)",
    timingsNotice: "Mon–Sat: 10:00 AM – 1:00 PM & 4:00 PM – 6:00 PM (Sunday Closed)",
    timingSlots: [
      "Morning: 10:00 AM – 1:00 PM",
      "Evening: 4:00 PM – 6:00 PM"
    ],
    mapUrl: "https://maps.google.com/?q=Pashmina+Waterfront+Battarahalli+Bengaluru",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.350811906233!2d77.71183207578278!3d13.01332831395893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11124488b399%3A0xe54d6fa7c6e61f2f!2sPashmina%20Waterfront!5e0!3m2!1sen!2sin!4v1700000000000",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
  },
  akola: {
    key: "akola",
    name: "Lohia's Homoeopathy",
    branchTitle: "Akola Clinic",
    doctor: "Dr. Chaitanya Arvindkumar Murti",
    doctorRole: "Consulting Homoeopath",
    city: "Akola",
    state: "Maharashtra",
    pincode: "444001",
    address: "Mankar Commercial Complex, S.A. College Road, Civil Lines, Akola – 444001, Maharashtra, India",
    addressLines: [
      "Mankar Commercial Complex",
      "S.A. College Road, Civil Lines",
      "Akola – 444001, Maharashtra, India"
    ],
    phone: "+91 9420794417",
    phoneDisplay: "+91 942 079 4417",
    phoneRaw: "+919420794417",
    whatsapp: "919420794417",
    email: "hello@lohiashomoeopathy.com",
    timings: "Monday to Saturday:\nMorning: 10:00 AM – 2:00 PM\nEvening: 6:00 PM – 9:00 PM\nSunday: Closed",
    timingsDisplay: "Mon–Sat: 10:00 AM – 2:00 PM & 6:00 PM – 9:00 PM (Sunday Closed)",
    timingsNotice: "Patients are seen by appointment only.",
    timingSlots: [
      "Morning: 10:00 AM – 2:00 PM",
      "Evening: 6:00 PM – 9:00 PM"
    ],
    mapUrl: "https://maps.google.com/?q=Mankar+Commercial+Complex+SA+College+Road+Civil+Lines+Akola",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.5513515438843!2d77.00160007593504!3d20.70810009871787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd7299a9b69b06f%3A0x6b447814b62dbd!2sCivil%20Lines%2C%20Akola%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000",
    gallery: [
      "https://res.cloudinary.com/mgkpr2it/image/upload/v1795217665/4bece18e-454e-4bdf-8f9c-175ee4e5244e.jpg",
      "https://res.cloudinary.com/mgkpr2it/image/upload/v1795217607/9a7d252e-a91c-4ee1-b417-8e0480e630a8.jpg",
      "https://res.cloudinary.com/mgkpr2it/image/upload/v1795217598/abbc0d1e-0992-4af4-81b8-65cfae8f9a5c.jpg",
      "https://res.cloudinary.com/mgkpr2it/image/upload/v1795217578/download.jpg"
    ]
  }
};

// Official Brand Logo (Do not recreate, modify, or crop)
const BRAND_LOGO_URL = "https://res.cloudinary.com/mgkpr2it/image/upload/v1795220510/fdc22116-5a44-416c-9e67-ab1f7a3a4d89.png";

// Common Social Media URLs
const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/lohiashomoeopathy?bqrl=MTh4eng3emR1a2Vhbw==",
  facebook: "https://www.facebook.com/share/16PRApj35Mx/?mibextid=wwXIfr"
};

// Export to window
if (typeof window !== "undefined") {
  window.BRANCH_DATA = BRANCH_DATA;
  window.BRAND_LOGO_URL = BRAND_LOGO_URL;
  window.SOCIAL_LINKS = SOCIAL_LINKS;
}
