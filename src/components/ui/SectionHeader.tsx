import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  dark = false,
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <>
          <p
            className={cn(
              "section-kicker mb-3 font-heading text-[13px] font-extrabold uppercase tracking-[0.14em] md:text-sm",
              dark ? "text-[#F5BF23]" : "text-[#172168]",
              eyebrowClassName,
            )}
          >
            {eyebrow}
          </p>
          <span
            aria-hidden
            className={cn(
              "mb-5 mt-1 block h-[3px] w-11 bg-[#F5BF23]",
              align === "center" && "mx-auto",
            )}
          />
        </>
      ) : null}
      <h2
        className={cn(
          "heading-display font-heading text-4xl font-extrabold leading-[1.12] tracking-normal md:text-5xl",
          dark ? "text-white" : "text-[#172168]",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed md:text-lg",
            dark ? "text-white/70" : "text-text/70",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
