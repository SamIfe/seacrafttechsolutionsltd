import { statTiles } from "@/content/company";
import { Counter } from "@/components/ui/Counter";

const STAGGER_SECONDS = 0.12;

export function StatsStrip() {
  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-8">
        <ul className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {statTiles.map((tile, index) => (
            <li key={tile.label} className="text-center">
              <p className="heading-display font-heading text-3xl font-extrabold tabular-nums text-[#172168] md:text-4xl">
                <Counter value={tile.value} delay={index * STAGGER_SECONDS} />
              </p>
              <p className="mt-2 text-sm leading-snug text-text/70">
                {tile.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
