import type { Service } from "@/types/content";

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const services: Service[] = [
  {
    slug: "subsea-inspection-intervention",
    title: "Subsea Inspection & Intervention",
    shortDescription:
      "ROV operations, subsea inspection, and tooling services.",
    overview:
      "SeaCraft delivers subsea inspection and intervention services using ROV systems and specialized tooling to support offshore asset assessment, maintenance, and repair activities. Our teams execute structured inspection programmes and intervention tasks in accordance with project specifications, safety protocols, and industry best practices for subsea operations.",
    benefits: [
      "ROV-led inspection and intervention capability for offshore assets",
      "Access to specialized subsea tooling for field deployment",
      "Structured reporting to support integrity and maintenance planning",
      "Experienced ROV supervisors and subsea engineering support",
      "Flexible mobilization aligned with offshore campaign schedules",
    ],
    process: [
      "Scope review and technical planning with project stakeholders",
      "Mobilization of ROV systems, tooling, and certified personnel",
      "Execution of inspection or intervention tasks offshore",
      "Quality review of data, findings, and operational records",
      "Delivery of reports and handover for follow-on activities",
    ],
    industriesServed: [
      "Offshore oil and gas operators",
      "EPC and subsea contractors",
      "Marine and offshore support companies",
      "Deepwater and shelf asset operators",
    ],
  },
  {
    slug: "marine-offshore-operations",
    title: "Marine & Offshore Operations",
    shortDescription:
      "Marine support services and offshore operational support.",
    overview:
      "SeaCraft provides marine and offshore operational support to help clients maintain safe, efficient field activities. Services cover vessel-related coordination, offshore logistics support, and operational assistance tailored to project requirements across Nigerian and West African waters.",
    benefits: [
      "Integrated marine support for offshore campaigns",
      "Operational coordination aligned with field schedules",
      "Experienced personnel familiar with regional offshore conditions",
      "Support models scalable to project scope and duration",
      "Commitment to safety and regulatory compliance offshore",
    ],
    process: [
      "Operational requirements assessment and planning",
      "Resource and logistics coordination for offshore deployment",
      "On-site operational support during field activities",
      "Ongoing communication with project teams and stakeholders",
      "Demobilization, reporting, and operational close-out",
    ],
    industriesServed: [
      "Offshore oil and gas operators",
      "Marine logistics and support providers",
      "Port and terminal operators",
      "Offshore construction and installation contractors",
    ],
  },
  {
    slug: "personnel-provision-workforce",
    title: "Personnel Provision & Workforce",
    shortDescription:
      "Provision of skilled ROV supervisors, subsea engineers, and pilot technicians, and supply of marine crew and specialized technical specialists.",
    overview:
      "SeaCraft supplies certified offshore personnel including ROV supervisors, subsea engineers, pilot technicians, marine crew, and specialized technical specialists. Our workforce provision supports clients requiring qualified personnel for short-term campaigns or longer operational assignments.",
    benefits: [
      "Access to industry-ready ROV and subsea technical personnel",
      "Marine crew and specialist roles for offshore projects",
      "Personnel aligned with client safety and competency requirements",
      "Support for Nigerian local content and workforce objectives",
      "Flexible staffing models for campaign-based or ongoing needs",
    ],
    process: [
      "Personnel requirements and competency scope definition",
      "Candidate selection against role specifications and certifications",
      "Mobilization briefing and project induction",
      "Deployment to offshore or onshore operational roles",
      "Performance review and demobilization at project completion",
    ],
    industriesServed: [
      "Offshore oil and gas operators",
      "ROV and subsea service companies",
      "Marine and offshore contractors",
      "Engineering and EPC organizations",
    ],
  },
  {
    slug: "asset-integrity-services",
    title: "Asset Integrity Services",
    shortDescription:
      "Corrosion control, inspection, and asset integrity management solutions.",
    overview:
      "SeaCraft supports asset integrity programmes through corrosion control, inspection services, and integrity management solutions for offshore and onshore facilities. Our approach helps operators maintain asset performance, manage degradation risks, and plan maintenance activities based on operational requirements.",
    benefits: [
      "Inspection and integrity support for offshore assets",
      "Corrosion control solutions aligned with facility needs",
      "Documentation to inform maintenance and integrity planning",
      "Technical personnel experienced in integrity-related field work",
      "Integration with broader subsea and offshore service delivery",
    ],
    process: [
      "Integrity scope definition and technical assessment",
      "Planning of inspection or corrosion control activities",
      "Field execution using appropriate methods and tooling",
      "Analysis and collation of integrity-related findings",
      "Reporting and recommendations for asset management teams",
    ],
    industriesServed: [
      "Offshore production and pipeline operators",
      "Onshore processing and terminal facilities",
      "Subsea infrastructure operators",
      "Engineering and integrity management contractors",
    ],
  },
  {
    slug: "industrial-maintenance",
    title: "Industrial Maintenance",
    shortDescription:
      "Remote tank cleaning and industrial facility maintenance services.",
    overview:
      "SeaCraft provides industrial maintenance services including remote tank cleaning and facility maintenance support for industrial and offshore-adjacent environments. Services are delivered with emphasis on safety, operational continuity, and compliance with applicable site requirements.",
    benefits: [
      "Remote tank cleaning capability for industrial applications",
      "Maintenance support tailored to facility operating conditions",
      "Structured approach to safety and site access requirements",
      "Experienced teams for industrial and marine-adjacent environments",
      "Coordination with client operations to minimize disruption",
    ],
    process: [
      "Site assessment and maintenance scope confirmation",
      "Method statement and safety planning for field work",
      "Execution of cleaning or maintenance activities",
      "Quality checks and operational verification",
      "Completion reporting and handover to facility teams",
    ],
    industriesServed: [
      "Industrial processing facilities",
      "Marine and port-related infrastructure",
      "Offshore support and logistics bases",
      "Energy sector onshore facilities",
    ],
  },
  {
    slug: "supply-chain-technical-support",
    title: "Supply Chain & Technical Support",
    shortDescription:
      "Procurement and supply of offshore materials and equipment, logistics coordination, warehousing, and inventory management.",
    overview:
      "SeaCraft offers supply chain and technical support services covering procurement of offshore materials and equipment, logistics coordination, warehousing, and inventory management. These services help clients maintain reliable access to critical items required for offshore and subsea operations.",
    benefits: [
      "Procurement and supply of offshore materials and equipment",
      "Logistics coordination for project and operational needs",
      "Warehousing and inventory management support",
      "Technical assistance for equipment specification and sourcing",
      "Regional supply chain capability supporting West African operations",
    ],
    process: [
      "Requirements gathering and technical specification review",
      "Sourcing, procurement, and supplier coordination",
      "Logistics planning and delivery scheduling",
      "Warehousing, handling, and inventory tracking",
      "Handover and ongoing supply support as required",
    ],
    industriesServed: [
      "Offshore oil and gas operators",
      "Subsea and marine contractors",
      "EPC and project delivery organizations",
      "Offshore logistics and support companies",
    ],
  },
];
