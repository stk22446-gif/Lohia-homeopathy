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
    address: "Pashmina Water Front, Tower 3, 25D, Old Madras Road, Battarahalli, Bengaluru – 560049, Karnataka, India",
    addressLines: [
      "Pashmina Water Front, Tower 3, 25D",
      "Old Madras Road, Battarahalli",
      "Bengaluru – 560049, Karnataka, India"
    ],
    phone: "+91 9422161321",
    phoneDisplay: "+91 9422 161 321",
    phoneRaw: "+919422161321",
    whatsapp: "919422161321",
    email: "lohiashomoeopathy@gmail.com",
    timings: "Monday to Saturday:\nMorning: 10:00 AM – 1:00 PM\nEvening: 4:00 PM – 6:00 PM\nSunday: Closed",
    timingsDisplay: "Mon–Sat: 10:00 AM – 1:00 PM & 4:00 PM – 6:00 PM (Sunday Closed)",
    timingsNotice: "Mon–Sat: 10:00 AM – 1:00 PM & 4:00 PM – 6:00 PM (Sunday Closed)",
    timingSlots: [
      "Morning: 10:00 AM – 1:00 PM",
      "Evening: 4:00 PM – 6:00 PM"
    ],
    mapUrl: "https://www.google.com/maps/dir/?api=1&destination=Pashmina+Waterfront,+Old+Madras+Road,+Battarahalli,+Bengaluru+560049",
    mapEmbed: "https://maps.google.com/maps?q=Pashmina+Waterfront,+Old+Madras+Road,+Battarahalli,+Bengaluru+560049&t=&z=16&ie=UTF8&iwloc=&output=embed",
    mapPinNote: "Verified building complex reference at Pashmina Waterfront. Note: The clinic is located inside Tower 3, 25D (not the general building entrance).",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=80"
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
    phoneDisplay: "+91 9420 794 417",
    phoneRaw: "+919420794417",
    whatsapp: "919420794417",
    email: "lohiashomoeopathy@gmail.com",
    timings: "Monday to Saturday:\nMorning: 10:00 AM – 2:00 PM\nEvening: 6:00 PM – 9:00 PM\nSunday: Closed",
    timingsDisplay: "Mon–Sat: 10:00 AM – 2:00 PM & 6:00 PM – 9:00 PM (Sunday Closed)",
    timingsNotice: "Patients are seen by appointment only.",
    timingSlots: [
      "Morning: 10:00 AM – 2:00 PM",
      "Evening: 6:00 PM – 9:00 PM"
    ],
    mapUrl: "https://www.google.com/maps/dir/?api=1&destination=Mankar+Commercial+Complex,+S.A.+College+Road,+Civil+Lines,+Akola+444001",
    mapEmbed: "https://maps.google.com/maps?q=Mankar+Commercial+Complex,+S.A.+College+Road,+Civil+Lines,+Akola+444001&t=&z=16&ie=UTF8&iwloc=&output=embed",
    mapPinNote: "Verified commercial complex reference at Mankar Commercial Complex, S.A. College Road, Civil Lines."
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
