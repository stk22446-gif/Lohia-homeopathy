# Lohia's Homoeopathy — Official Website

A production-ready, modern, minimal, and trustworthy healthcare clinic website for **Lohia's Homoeopathy**, established in 1992. Features clinic branches in **Bengaluru** and **Akola**.

---

## 🌿 Business Identity & Positioning

- **Business Name:** Lohia's Homoeopathy
- **Established:** Since 1992
- **Business Type:** Homeopathic Clinic (*Not a pharmacy or retail store*)
- **Brand Positioning:** Professional homeopathic consultation and personalised healthcare guidance.

### Branch 1 – Bengaluru
- **Doctor:** Dr. Sudhir Lohia (Homoeopath & Health Care Consultant)
- **Address:** Pashmina Water Front, T03, 25-D, Old Madras Road, Battarahalli, Bengaluru, Karnataka – 560049.
- **Phone / WhatsApp:** [+91 942 216 1321](tel:+919422161321) (`+919422161321`)
- **Email:** [hello@lohiashomoeopathy.com](mailto:hello@lohiashomoeopathy.com)
- **Consultation Hours:** Strictly by prior appointment.

### Branch 2 – Akola
- **Doctor:** Dr. Chaitanya Arvindkumar Murti
- **Address:** Mankar Commercial Complex, S.A. College Road, Civil Lines, Akola – 444001, Maharashtra, India.
- **Phone / WhatsApp:** [+91 942 079 4417](tel:+919420794417) (`+919420794417`)
- **Clinic Timings:**  
  Monday to Saturday:  
  Morning: 10:00 AM – 2:00 PM  
  Evening: 6:00 PM – 9:00 PM  
  Sunday: Closed.  
  *Patients are seen by appointment only.*

### Official Social Media
- **Instagram:** [lohiashomoeopathy](https://www.instagram.com/lohiashomoeopathy?bqrl=MTh4eng3emR1a2Vhbw==)
- **Facebook:** [lohiashomoeopathy](https://www.facebook.com/share/16PRApj35Mx/?mibextid=wwXIfr)

---

## 🎨 Design Palette & System

- **Primary Forest Green:** `#294B3A`
- **Secondary Sage Green:** `#879B78`
- **Warm White:** `#FAFAF7`
- **Light Sage:** `#F0F3EC`
- **Charcoal Text:** `#252B27`
- **Muted Grey:** `#777F78`
- **Typography:**
  - Headings: *Playfair Display* (Serif)
  - Body: *Plus Jakarta Sans* (Modern sans-serif)

---

## 📁 Website Architecture

```text
lohias-homoeopathy/
│
├── index.html          – Homepage (Split hero, Heritage, Doctors, Approach, Clinics, Gallery, Appointment, Contact, Footer)
├── about.html          – About the clinic, doctors, and patient-focused approach
├── clinics.html        – Bengaluru and Akola branch information with interactive selector
├── appointment.html    – Appointment enquiry with branch-specific WhatsApp routing
├── contact.html        – Contact information, addresses, and maps
│
├── css/
│   ├── style.css       – Design system, typography, components, and layout
│   └── responsive.css  – Responsive breakpoints (360px, 390px, 430px, 768px, 1024px, 1440px+)
│
├── js/
│   ├── branches.js     – Centralized branch data for Bengaluru and Akola
│   ├── appointment.js  – Appointment form validation and WhatsApp message formatting
│   └── main.js         – Sticky header, mobile drawer, scroll reveal, carousel, back-to-top
│
├── assets/
│   └── images/
│
├── sitemap.xml         – Search engine sitemap
├── robots.txt          – Crawl directives
└── vercel.json         – Vercel deployment headers and clean URL configuration
```

---

## 🚀 Deployment to Vercel

This is a 100% vanilla, lightweight, zero-dependency static website. It deploys directly to Vercel with no build step required.
