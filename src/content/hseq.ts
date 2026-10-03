import type { Certification } from "@/types/content";

export const hseqPrinciples: string[] = [
  "Zero harm to personnel and the environment",
  "Proactive risk identification and mitigation",
  "Continuous training and competency development",
  "Compliance with regulatory and client safety standards",
];

export const certifications: Certification[] = [
  {
    name: "ISO 9001:2015",
    description:
      "Operations aligned with this internationally recognized quality management standard.",
    logo: "/images/hseq/cert-iso-9001.png",
  },
  {
    name: "NCDMB",
    description: "Nigerian Content Development & Monitoring Board compliance.",
    logo: "/images/hseq/cert-ncdmb.png",
  },
  {
    name: "NEEWEBS",
    description: "NOGIC Joint Qualification System registration.",
    logo: "/images/hseq/cert-nogic-jqs.png",
  },
];

export const hseqPrinciplesImage = {
  src: "/images/hseq/safety-principles.png",
  alt: "Offshore crew in PPE during a safety briefing on deck",
} as const;

export const localContentCommitments: string[] = [
  "Prioritizing Nigerian talent and workforce development",
  "Engaging local suppliers and contractors",
  "Supporting sustainable economic growth within the sector",
];
