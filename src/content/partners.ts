import type { Partner } from "@/types/content";

export const partnersSection = {
  eyebrow: "Our Industrial Partners",
} as const;

/**
 * Logo box sizes are set per file so each mark carries similar visual weight:
 * square badges share one box, the TMT file has heavy built-in padding so it
 * gets a larger box, and the NCDMB wide lockup gets a short, wide box.
 */
export const partners: Partner[] = [
  {
    name: "Total Marine Technology (TMT)",
    logo: "/images/partners/tmt.png",
    width: 80,
    height: 80,
  },
  {
    name: "SNEPCO",
    logo: "/images/partners/snepco.png",
    width: 60,
    height: 64,
  },
  {
    name: "NCDMB",
    logo: "/images/hseq/cert-ncdmb.png",
    width: 150,
    height: 50,
  },
  {
    name: "ISO 9001:2015",
    logo: "/images/hseq/cert-iso-9001.png",
    width: 64,
    height: 64,
  },
  {
    name: "NEEWEBS",
    width: 150,
    height: 50,
  },
];
