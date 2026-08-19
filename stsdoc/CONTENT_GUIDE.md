# CONTENT_GUIDE.md — SeaCraft Technology Solutions Ltd
### Single source of truth for all copy. Do not invent statistics, certifications, projects, or client names beyond what's listed here.

All company facts below are sourced directly from the official SeaCraft company profile.

---

## 1. Company facts

```ts
// content/company.ts
export const company = {
  name: "SeaCraft Technology Solutions Ltd",
  shortName: "SeaCraft",
  tagline: "...Powering Subsea Success",
  rcNumber: "7284750",
  yearIncorporated: 2024,
  website: "https://www.seacrafttechsolutions.com",
  email: "info@seacrafttechsolutions.com",
  phones: ["+234 802 822 2299", "+234 802 822 2228"],
  address: "7/9 Molade Okoya Thomas Street, Off Ajose Adeogun, Victoria Island, Lagos State, Nigeria",
  overview: "SeaCraft Technology Solutions Ltd is a Nigerian indigenous subsea, ROV, marine, and offshore services company delivering high-performance, technology-driven solutions to the offshore energy sector. We support oil & gas operators, EPC contractors, and marine companies with integrated services that enhance operational efficiency, asset integrity, and project delivery across offshore and onshore environments.",
  vision: "To be the preferred offshore technology solutions provider in Nigeria and across West Africa, recognized for excellence, innovation, and reliability.",
  mission: "To deliver tailored offshore and engineering solutions that create measurable value through safety, advanced technology, and strategic partnerships.",
  partnership: {
    partner: "Total Marine Technology (TMT)",
    description: "SeaCraft Technology Solutions Ltd serves as a local representative of Total Marine Technology (TMT) in West Africa, supporting the execution of ROV-related operations and offshore projects.",
    // NOTE FOR CURSOR: the TMT logo is a third party's IP. Do not reproduce
    // it without confirming SeaCraft has permission to display it. Render
    // the partnership as a text credit by default; only add the TMT mark
    // if a licensed asset is provided.
  }
};

export const coreValues = [
  { title: "Integrity & Ethics", description: "We operate transparently and honor our commitments" },
  { title: "Safety First", description: "We prioritize the well-being of people, assets, and the environment" },
  { title: "Client Commitment", description: "We measure our success by the outcomes we achieve for our clients, aligning every action with delivering meaningful results for them" },
  { title: "Excellence in Execution", description: "We deliver with precision, discipline, and accountability" },
  { title: "Innovation & Growth", description: "We continuously improve through technology and talent" },
];

export const valueProposition = [
  "Proven subsea and offshore execution capability",
  "Access to certified, industry-ready technical personnel",
  "Full compliance with Nigerian local content (NCDMB) requirements",
  "Cost-efficient and scalable service delivery models",
  "Strong technical partnerships enabling advanced solutions",
];
```

---

## 2. Services

```ts
// content/services.ts
export const services = [
  {
    slug: "subsea-inspection-intervention",
    title: "Subsea Inspection & Intervention",
    shortDescription: "ROV operations, subsea inspection, and tooling services.",
  },
  {
    slug: "marine-offshore-operations",
    title: "Marine & Offshore Operations",
    shortDescription: "Marine support services and offshore operational support.",
  },
  {
    slug: "personnel-provision-workforce",
    title: "Personnel Provision & Workforce",
    shortDescription: "Provision of skilled ROV supervisors, subsea engineers, and pilot technicians, and supply of marine crew and specialized technical specialists.",
  },
  {
    slug: "asset-integrity-services",
    title: "Asset Integrity Services",
    shortDescription: "Corrosion control, inspection, and asset integrity management solutions.",
  },
  {
    slug: "industrial-maintenance",
    title: "Industrial Maintenance",
    shortDescription: "Remote tank cleaning and industrial facility maintenance services.",
  },
  {
    slug: "supply-chain-technical-support",
    title: "Supply Chain & Technical Support",
    shortDescription: "Procurement and supply of offshore materials and equipment, logistics coordination, warehousing, and inventory management.",
  },
];
```

For each service's dynamic page, generate an Overview, Benefits, Process, and Industries Served section by expanding the `shortDescription` in professional, generic industry language — do not invent specific client names, project counts, or numeric claims for these expansions.

---

## 3. Equipment inventory (26 items — use exact names/codes)

```ts
// content/equipment.ts
export const equipment = [
  { code: "TMT-NSS-002", name: "Main Electronics Enclosure" },
  { code: "TMT-NSS-009", name: "Wellhead Alignment Frame" },
  { code: "TMT-NSS-171", name: "40mm Wire Rope Cutter (Rev 1)" },
  { code: "TMT-NSS-070", name: "Smart Torque Tool Mk2 (Rev 2)" },
  { code: "TMT-NSS-037", name: "Manual Torque Tool (Rev 4)" },
  { code: "TMT-NSS-017", name: "Acoustic Smart Level" },
  { code: "TMT-NSS-018", name: "Hydraulic Actuator Override Hot Stab — Single Port" },
  { code: "TMT-NSS-012-2", name: "Port Hot Stab ISO Type A" },
  { code: "TMT-NSS-013", name: "30m Subsea Winch" },
  { code: "TMT-NSS-147", name: "Electric Torque Tool" },
  { code: "TMT-NSS-007-AX_VX", name: "Profile Cleaning Tool" },
  { code: "TMT-NSS-022", name: "4-inch Collet Connector Mech Override" },
  { code: "—", name: "AM1 Valve Hole Cutting Tool" },
  { code: "TMT-NSS-024", name: "AM1 Valve Insert Gripper Tool" },
  { code: "TMT-NSS-016-AGR", name: "Bucket Recovery Tool" },
  { code: "TMT-NSS-025", name: "Annulus Bore Grinding Tool" },
  { code: "TMT-NSS-011", name: "AX-VX Ring Tool" },
  { code: "TMT-NSS-015", name: "Smart Torque Plate Handling Tool" },
  { code: "TMT-NSS-010", name: "Triplex Water Blaster" },
  { code: "TMT-NSS-008", name: "Slimline Anchor" },
  { code: "TMT-NSS-021", name: "Offshore Basket" },
  { code: "TMT-NSS-020", name: "Compact Tooling Manifold" },
  { code: "TMT-NSS-004", name: "Breaker" },
  { code: "TMT-NSS-003", name: "Hydraulic Actuator Override Hot Stab — Two Port" },
  { code: "TMT-NSS-001", name: "Multipurpose Rotary Tool" },
  { code: "TMT-NSS-019", name: "ROV Valve" },
];
```
Write one factual sentence per item describing its general function (e.g. "subsea torque tooling for valve/flange operations") without inventing specifications (torque ratings, depth ratings) that aren't given.

---

## 4. Leadership (condense but do not alter facts)

```ts
// content/leadership.ts
export const leadership = [
  {
    name: "Gabriel Adegor",
    title: "Chief Executive Officer",
    bio: "Founder and Managing Director of SeaCraft Technology Solutions. A seasoned offshore operations executive and subsea systems engineer with over 14 years of experience across ROV operations, subsea intervention, offshore drilling support, deepwater project execution, and ROV tooling. Led complex offshore ROV operations across Sub-Saharan Africa and the North Sea. Prior to founding SeaCraft, held key technical and operational leadership roles with Total Marine Technology (TMT), supporting regional operations, managing offshore ROV campaigns, and contributing to major drilling, intervention, and decommissioning projects — including the offshore drilling campaign that led to the Graff-1 oil discovery offshore Namibia. Has supported operations for TEPUK, TotalEnergies Nigeria, and SNEPCO.",
  },
  {
    name: "Laurence Smith",
    title: "Business Technical Director",
    bio: "A maritime and port operations executive with international leadership experience across the United Kingdom, Spain, the United Arab Emirates, and Nigeria. Held senior roles including Chief Operating Officer at APM Terminals Apapa and Lekki Port, General Manager of Operations at INTELS Nigeria Limited, and Operations Manager with DP World in Tarragona and Southampton. Brings deep expertise in port operations, marine logistics, business transformation, stakeholder management, and operational strategy.",
  },
];
```

---

## 5. HSEQ

```ts
// content/hseq.ts
export const hseqPrinciples = [
  "Zero harm to personnel and the environment",
  "Proactive risk identification and mitigation",
  "Continuous training and competency development",
  "Compliance with regulatory and client safety standards",
];

export const certifications = [
  { name: "ISO 9001:2015", description: "Operations aligned with this internationally recognized quality management standard." },
  { name: "NCDMB", description: "Nigerian Content Development & Monitoring Board compliance." },
  { name: "NOGIC JQS", description: "NOGIC Joint Qualification System registration." },
  { name: "NCEC", description: "Nigerian Content Equipment Certificate." },
];

export const localContentCommitments = [
  "Prioritizing Nigerian talent and workforce development",
  "Engaging local suppliers and contractors",
  "Supporting sustainable economic growth within the sector",
];
```

---

## 6. Stat tiles (truthful only)
Company was incorporated in 2024 — never use "years in business" or "projects completed" counters. Use these instead:
- "6" — Core Service Lines
- "26+" — Specialized Subsea Tools in Inventory
- "14+" — Years of Offshore Leadership Experience (CEO)
- "4" — Regulatory Certifications & Compliance Frameworks

---

## 7. Testimonials
None exist in source material. Build the section structurally (Swiper carousel, quote card layout) but populate it with a single visible placeholder card reading **"Client testimonials coming soon"** — never fabricate quotes or names.

---

## 8. Page section order (Home)
Hero → Stats strip (truthful tiles) → About Seacraft (overview + Vision/Mission + supporting image) → Why Choose Us (Value Proposition + TMT partnership credit) → Certification badge strip → Client Process timeline (Consultation → Planning → Execution → QA → Delivery — generic process, not tied to a specific unlisted project) → CTA strip (headline + supporting line + Contact button to `/contact`)

Interior pages hold the rest: About (full story, stats strip, testimonials placeholder), Services, Equipment, Leadership, HSEQ, Contact (form + map). About Seacraft also appears on Home as a teaser.

---

## 9. Contact form spec
- `react-hook-form` + `zod`: name, email, phone (optional), company (optional), message (min 20 chars), honeypot field
- POST to `/api/contact`, server-side validated, sent via a pluggable `lib/email.ts` (Resend if `RESEND_API_KEY` present; otherwise console-log stub with a clear TODO comment)
- Basic rate limiting on the route
- Success/error via shadcn `Toast`

---

## 10. Full page list
Home · About · Services (index + 6 slugs) · Equipment · Leadership · HSEQ · Careers · Contact · Privacy · Terms · 404
