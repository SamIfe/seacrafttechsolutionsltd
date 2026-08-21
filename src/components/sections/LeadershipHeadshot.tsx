import Image from "next/image";

type LeadershipHeadshotProps = {
  src: string;
  alt: string;
  objectPosition?: string;
  size: number;
};

export function LeadershipHeadshot({
  src,
  alt,
  objectPosition = "center",
  size,
}: LeadershipHeadshotProps) {
  return (
    <div
      className="relative overflow-hidden rounded-full border border-border bg-white"
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`${size}px`}
        className="object-cover"
        style={{ objectPosition }}
      />
    </div>
  );
}
