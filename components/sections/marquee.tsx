import { marquee } from "@/lib/content";

export function Marquee() {
  const items = [...marquee, ...marquee];
  return (
    <section aria-label="Tools and platforms" className="border-y border-border py-8">
      <div className="relative flex overflow-hidden mask-fade-x">
        <div className="flex shrink-0 animate-marquee items-center gap-12 pr-12">
          {items.map((item, i) => (
            <span
              key={i}
              className="font-display text-xl font-medium text-muted-foreground/70 sm:text-2xl"
            >
              {item}
            </span>
          ))}
        </div>
        <div
          aria-hidden
          className="flex shrink-0 animate-marquee items-center gap-12 pr-12"
        >
          {items.map((item, i) => (
            <span
              key={`b-${i}`}
              className="font-display text-xl font-medium text-muted-foreground/70 sm:text-2xl"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
