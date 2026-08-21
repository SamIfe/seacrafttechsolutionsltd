import type { Company, CoreValue, StatTile } from "@/types/content";

export const company: Company = {
  name: "SeaCraft Technology Solutions Ltd",
  shortName: "SeaCraft",
  tagline: "...Powering Subsea Success",
  rcNumber: "7284750",
  yearIncorporated: 2024,
  website: "https://www.seacrafttechsolutions.com",
  email: "info@seacrafttechsolutions.com",
  phones: ["+234 802 822 2299", "+234 802 822 2228"],
  address:
    "7/9 Molade Okoya Thomas Street, Off Ajose Adeogun, Victoria Island, Lagos State, Nigeria",
  overview:
    "SeaCraft Technology Solutions Ltd is a Nigerian indigenous subsea, ROV, marine, and offshore services company delivering high-performance, technology-driven solutions to the offshore energy sector. We support oil & gas operators, EPC contractors, and marine companies with integrated services that enhance operational efficiency, asset integrity, and project delivery across offshore and onshore environments.",
  vision:
    "To be the preferred offshore technology solutions provider in Nigeria and across West Africa, recognized for excellence, innovation, and reliability.",
  mission:
    "To deliver tailored offshore and engineering solutions that create measurable value through safety, advanced technology, and strategic partnerships.",
  partnership: {
    partner: "Total Marine Technology (TMT)",
    description:
      "SeaCraft Technology Solutions Ltd serves as a local representative of Total Marine Technology (TMT) in West Africa, supporting the execution of ROV-related operations and offshore projects.",
    displayNote:
      "Partnership credit - text only. TMT logo not displayed without licensed asset.",
  },
};

export const coreValues: CoreValue[] = [
  {
    title: "Integrity & Ethics",
    description: "We operate transparently and honor our commitments",
  },
  {
    title: "Safety First",
    description:
      "We prioritize the well-being of people, assets, and the environment",
  },
  {
    title: "Client Commitment",
    description:
      "We measure our success by the outcomes we achieve for our clients, aligning every action with delivering meaningful results for them",
  },
  {
    title: "Excellence in Execution",
    description:
      "We deliver with precision, discipline, and accountability",
  },
  {
    title: "Innovation & Growth",
    description: "We continuously improve through technology and talent",
  },
];

export const valueProposition: string[] = [
  "Proven subsea and offshore execution capability",
  "Access to certified, industry-ready technical personnel",
  "Full compliance with Nigerian local content (NCDMB) requirements",
  "Cost-efficient and scalable service delivery models",
  "Strong technical partnerships enabling advanced solutions",
];

export const statTiles: StatTile[] = [
  { value: "6", label: "Core Service Lines" },
  { value: "26+", label: "Specialized Subsea Tools in Inventory" },
  {
    value: "14+",
    label: "Years of Offshore Leadership Experience",
  },
  {
    value: "4",
    label: "Regulatory Certifications & Compliance Frameworks",
  },
];

export const clientProcess = [
  {
    step: 1,
    title: "Consultation",
    description:
      "We assess operational requirements, scope objectives, and technical constraints to establish a clear project baseline.",
  },
  {
    step: 2,
    title: "Planning",
    description:
      "Our team develops execution plans, mobilization schedules, and resource allocation aligned with safety and compliance standards.",
  },
  {
    step: 3,
    title: "Execution",
    description:
      "Certified personnel and specialized tooling are deployed to deliver subsea, marine, and offshore services in the field.",
  },
  {
    step: 4,
    title: "QA",
    description:
      "Quality assurance processes verify deliverables, documentation, and operational outcomes against agreed specifications.",
  },
  {
    step: 5,
    title: "Delivery",
    description:
      "Final reporting, handover, and post-operation support ensure continuity and readiness for follow-on work.",
  },
] as const;

export const testimonialsPlaceholder = {
  message: "Client testimonials coming soon",
} as const;

export const homeCta = {
  title: "Ready to Power Your Next Offshore Project?",
  description:
    "Connect with SeaCraft for subsea, ROV, marine, and offshore services backed by certified personnel and specialized tooling.",
} as const;

export const homeSections = {
  heroEyebrow: "Nigerian Indigenous Subsea & Offshore Services",
  heroTagline:
    "Nigerian indigenous subsea, ROV, marine, and offshore services - delivering technology-driven solutions to the offshore energy sector.",
  partnershipCredit:
    "Local representative of Total Marine Technology (TMT) in West Africa, supporting ROV-related operations and offshore projects.",
  servicesIntro:
    "Six service lines supporting operators, EPC contractors, and marine companies across offshore and onshore environments.",
  equipmentIntro:
    "Industry-ready tooling supporting ROV operations, subsea intervention, and offshore project delivery.",
  leadershipIntro:
    "Led by professionals with deep subsea, ROV, and port operations expertise across Nigeria and international markets.",
  hseqIntro:
    "Committed to zero harm, regulatory compliance, and sustainable Nigerian content development across all operations.",
  processIntro:
    "A structured approach to offshore service delivery - generic process framework applicable across project types.",
  testimonialsIntro:
    "Client feedback will be published here as it becomes available.",
  contactIntro:
    "Reach our team for project enquiries, partnerships, and offshore service requirements.",
  contactFormNote:
    "Send us your project requirements and our team will respond within one business day.",
  whyChooseIntro:
    "SeaCraft combines indigenous capability with technical partnerships to support safe, efficient, and compliant project delivery.",
  aboutTeaser:
    "SeaCraft Technology Solutions Ltd is a Nigerian indigenous subsea, ROV, marine, and offshore services company delivering high-performance, technology-driven solutions to the offshore energy sector.",
  aboutImage: "/images/about/team-vessel.jpg",
  aboutImageAlt: "SeaCraft team aboard an offshore vessel",
  whyChooseImage: "/images/why-choose-us/certified-crew.jpg",
  whyChooseImageAlt: "Certified SeaCraft technical personnel",
} as const;
