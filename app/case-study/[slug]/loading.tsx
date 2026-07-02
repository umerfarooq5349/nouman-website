import React from "react";

export default function Loading() {
  return (
    <div className="relative min-h-screen bg-background text-foreground pb-24 pt-32 overflow-hidden animate-pulse">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "12.5% 100%",
          }}
        />
        <div
          className="absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 rounded-full opacity-20 blur-3xl pointer-events-none bg-primary/20"
        />
      </div>

      <div className="container relative z-10">
        {/* Back Link Skeleton */}
        <div className="mb-10">
          <div className="h-4 w-40 rounded bg-muted/80" />
        </div>

        {/* Hero Header Section Skeleton */}
        <header className="mb-16 text-center max-w-4xl mx-auto flex flex-col items-center gap-6">
          {/* Star aggregate rating placeholder */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, s) => (
                <div key={s} className="size-5 rounded bg-muted/80" />
              ))}
            </div>
            <div className="h-3 w-48 rounded bg-muted/70 mt-1" />
          </div>

          {/* Headline Skeletons */}
          <div className="space-y-3 w-full max-w-3xl flex flex-col items-center">
            <div className="h-10 sm:h-12 w-11/12 rounded-lg bg-muted/80" />
            <div className="h-10 sm:h-12 w-3/4 rounded-lg bg-muted/80" />
          </div>

          {/* Partnership block placeholder */}
          <div className="h-10 w-64 rounded-full bg-card/60 border border-border/40 mt-4" />
        </header>

        {/* Awards Row Marquee skeleton */}
        <div className="border-y border-border/30 py-6 mb-20">
          <div className="h-4 w-full rounded bg-muted/40" />
        </div>

        {/* Background & Services Grid skeletons */}
        <div className="mb-24 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-6">
            <div className="h-6 w-32 rounded bg-primary/20" />
            <div className="h-8 w-60 rounded bg-muted/80" />
            <div className="space-y-3">
              <div className="h-4 w-full rounded bg-muted/70" />
              <div className="h-4 w-full rounded bg-muted/70" />
              <div className="h-4 w-11/12 rounded bg-muted/70" />
              <div className="h-4 w-10/12 rounded bg-muted/70" />
            </div>
          </div>
          <div className="rounded-3xl border border-border/40 bg-card/30 p-8 space-y-6">
            <div className="h-6 w-48 rounded bg-muted/80" />
            <div className="space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="size-7 rounded bg-muted/80 shrink-0" />
                  <div className="h-4 w-5/6 rounded bg-muted/70" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Spinner in the absolute center area to draw focus */}
        <div className="flex items-center justify-center my-8">
          <div className="size-10 rounded-full border-4 border-muted border-t-primary animate-spin" />
        </div>
      </div>
    </div>
  );
}
