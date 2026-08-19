import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article";
};

export function Card({ children, className, as: Tag = "div" }: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-lg border border-border bg-white p-6 shadow-sm",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

type CardTitleProps = {
  children: React.ReactNode;
  className?: string;
  as?: "h3" | "h4";
};

export function CardTitle({
  children,
  className,
  as: Tag = "h3",
}: CardTitleProps) {
  return (
    <Tag
      className={cn(
        "font-heading text-lg font-semibold text-navy",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

type CardDescriptionProps = {
  children: React.ReactNode;
  className?: string;
};

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p className={cn("mt-2 text-sm leading-relaxed text-text/70", className)}>
      {children}
    </p>
  );
}
