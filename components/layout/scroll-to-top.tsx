"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Magnetic strength={0.3}>
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="size-11 rounded-full border-border/80 bg-background/80 shadow-md backdrop-blur-md transition-all hover:bg-muted hover:shadow-lg focus-visible:ring-primary dark:border-border/60"
              aria-label="Scroll to top"
              data-cursor
            >
              <ArrowUp className="size-5 text-foreground" />
            </Button>
          </Magnetic>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
