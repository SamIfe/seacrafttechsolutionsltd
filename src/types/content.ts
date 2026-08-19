export type Company = {
  name: string;
  shortName: string;
  tagline: string;
  rcNumber: string;
  yearIncorporated: number;
  website: string;
  email: string;
  phones: string[];
  address: string;
  overview: string;
  vision: string;
  mission: string;
  partnership: {
    partner: string;
    description: string;
    displayNote: string;
  };
};

export type CoreValue = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  benefits: string[];
  process: string[];
  industriesServed: string[];
};

export type EquipmentItem = {
  code: string;
  name: string;
  description: string;
};

export type HeroSlide = {
  eyebrow: string;
  heading: string;
  body: string;
  /** Backgrounds that cycle under this text block (~2 images per 6s text dwell). */
  images: string[];
  cta?: { label: string; href: string };
};

export type Leader = {
  name: string;
  title: string;
  /** One-sentence summary for the home page teaser; full bio lives on /leadership. */
  roleSummary: string;
  bio: string;
  image: string;
  /** CSS object-position for the portrait crop, e.g. "center 20%". Defaults to center. */
  imagePosition?: string;
};

export type Certification = {
  name: string;
  description: string;
};

export type StatTile = {
  value: string;
  label: string;
};

export type ProcessStep = {
  step: number;
  title: string;
  description: string;
};
