"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type CursorState = "default" | "hover" | "view";

/**
 * Mouse-follow cursor (the indev-portfolio effect):
 *  - small dot tracks the pointer 1:1
 *  - a larger ring lerps behind it
 *  - grows on links/buttons, shows a label over elements with [data-cursor="view"]
 * Auto-disabled on touch / coarse pointers and on prefers-reduced-motion.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [state, setState] = useState<CursorState>("default");
  const [label, setLabel] = useState<string>("");
  const [hidden, setHidden] = useState(true);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    setEnabled(true);
    document.body.classList.add("custom-cursor-active");

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      setHidden(false);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      const target = (e.target as HTMLElement)?.closest<HTMLElement>(
        "a, button, [data-cursor]"
      );
      if (target) {
        const cursorType = target.getAttribute("data-cursor");
        if (cursorType === "view") {
          setState("view");
          setLabel(target.getAttribute("data-cursor-label") || "View");
        } else {
          setState("hover");
          setLabel("");
        }
      } else {
        setState("default");
        setLabel("");
      }
    };

    const onLeave = () => setHidden(true);

    let frame = 0;
    const loop = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.18;
      ring.current.y += (pos.current.y - ring.current.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`;
      }
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!enabled) return null;

  const ringSize = state === "view" ? 84 : state === "hover" ? 56 : 36;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{ opacity: hidden ? 0 : 1, transition: "opacity 0.25s" }}
    >
      {/* lerped ring */}
      <div
        ref={ringRef}
        className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 will-change-transform"
      >
        <motion.div
          className="flex items-center justify-center rounded-full"
          animate={{
            width: ringSize,
            height: ringSize,
            backgroundColor:
              state === "default"
                ? "hsl(var(--primary) / 0)"
                : "hsl(var(--primary) / 0.12)",
            borderColor:
              state === "default"
                ? "hsl(var(--primary) / 0.6)"
                : "hsl(var(--primary) / 0.5)",
          }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
          style={{ border: "1.5px solid", marginLeft: -ringSize / 2, marginTop: -ringSize / 2 }}
        >
          <AnimatePresence>
            {state === "view" && (
              <motion.span
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="font-display text-xs font-medium uppercase tracking-wide text-primary"
              >
                {label}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* exact dot */}
      <div
        ref={dotRef}
        className="absolute left-0 top-0 will-change-transform"
      >
        <div
          className="-ml-1 -mt-1 h-2 w-2 rounded-full bg-primary"
          style={{ opacity: state === "default" ? 1 : 0, transition: "opacity 0.2s" }}
        />
      </div>
    </div>
  );
}
