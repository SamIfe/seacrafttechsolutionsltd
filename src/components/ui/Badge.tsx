import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "cyan" | "outline";
  className?: string;
};

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variant === "default" && "bg-ocean-blue/10 text-ocean-blue",
        variant === "cyan" && "bg-cyan/10 text-ocean-blue",
        variant === "outline" &&
          "border border-border bg-white text-text/70",
        className,
      )}
    >
      {children}
    </span>
  );
}
