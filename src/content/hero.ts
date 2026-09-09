import type { HeroSlide } from "@/types/content";

export const heroCta = {
  label: "About Seacraft",
  href: "/about",
} as const;

export const heroSlides: HeroSlide[] = [
  {
    eyebrow: "ABOUT SEACRAFT",
    heading: "Indigenous, Innovative & Collaborative.",
    body: "We are a Nigerian indigenous subsea and deepwater ROV operations company dedicated to delivering reliable, technology-driven solutions to the oil and gas sector. We combine technical expertise, experienced personnel, a commitment to safety and quality to support efficient offshore operations.",
    images: ["/images/hero/slide1a.jpg", "/images/hero/slide1b.jpg"],
  },
  {
    eyebrow: "YEARS OF EXPERIENCE",
    heading: "Growth, Adaptability & Excellence",
    body: "We have over 10 years of experience. Over the years, we've honed our skills, refined our processes, and built a solid foundation of trust with our clients. With each project we undertake, we leverage our extensive experience to deliver innovative solutions, ensuring the success and satisfaction of our clients.",
    images: ["/images/hero/slide2a.jpg", "/images/hero/slide2b.jpg"],
  },
  {
    eyebrow: "EXPERTISE",
    heading: "Quality, Safety & Innovation",
    body: "At Seacraft, our expertise spans the entire spectrum of the marine and offshore industry, positioning us as leaders in providing innovative solutions and services to our clients worldwide.",
    images: ["/images/hero/slide3a.jpg", "/images/hero/slide3b.jpg"],
  },
  {
    eyebrow: "SUSTAINABILITY",
    heading: "Sustainability is not just a buzzword",
    body: "It's a core value that guides every aspect of our operations, and we are committed to minimizing our ecological footprint and promoting sustainable practices at every opportunity.",
    images: ["/images/hero/slide4a.jpg", "/images/hero/slide4b.jpg"],
  },
];

export type HeroImageLayer = {
  src: string;
  slideIndex: number;
};

export const heroImageLayers: HeroImageLayer[] = heroSlides.flatMap(
  (slide, slideIndex) => slide.images.map((src) => ({ src, slideIndex })),
);

export function firstImageIndexForSlide(slideIndex: number): number {
  return heroImageLayers.findIndex((layer) => layer.slideIndex === slideIndex);
}
