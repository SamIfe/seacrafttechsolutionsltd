import Image from "next/image";

type CertificationLogoProps = {
  src: string;
  alt: string;
};

/**
 * Shared slot for regulatory badges. object-contain so logos are never cropped;
 * height is normalized so square stamps and wide lockups sit on the same line.
 */
export function CertificationLogo({ src, alt }: CertificationLogoProps) {
  return (
    <div className="relative mx-auto h-24 w-full max-w-[17.5rem]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="280px"
        className="object-contain"
      />
    </div>
  );
}
