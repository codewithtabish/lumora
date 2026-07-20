"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OnboardingSlide as SlideType } from "@/types/onboarding";
import Image from "next/image";
import { ChevronRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface OnboardingScreenProps {
  slides: SlideType[];
  onComplete: () => void;
  onSkip?: () => void;
}

export function OnboardingScreen({ slides, onComplete, onSkip }: OnboardingScreenProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current],
  );

  const handleNext = useCallback(() => {
    if (current < slides.length - 1) {
      goTo(current + 1);
    } else {
      onComplete();
    }
  }, [current, slides.length, goTo, onComplete]);

  const handlePrev = useCallback(() => {
    if (current > 0) {
      goTo(current - 1);
    }
  }, [current, goTo]);

  const isLast = current === slides.length - 1;
  const slide = slides[current];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  return (
    <div className="flex h-[100dvh] flex-col overflow-hidden bg-background">
      {/* Content Group - Centered vertically as one unit */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 min-h-0">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex flex-col items-center w-full"
          >
            {/* Glow */}
            <div
              className={cn(
                "absolute top-[12%] h-32 w-32 rounded-full blur-3xl opacity-10 pointer-events-none",
                "bg-gradient-to-br",
                slide.gradient,
              )}
            />

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.05, duration: 0.3 }}
              className={cn(
                "relative flex items-center justify-center overflow-hidden rounded-[1.75rem]",
                "bg-gradient-to-br from-card/50 to-card/20",
                "border border-border/30 shadow-xl",
              )}
              style={{
                width: "min(58vw, 240px)",
                height: "min(58vw, 240px)",
              }}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                width={240}
                height={240}
                className="object-contain p-5"
                priority={slide.id === 1}
                draggable={false}
              />
            </motion.div>

            {/* Title - TIGHT to image */}
            <motion.h2
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.3 }}
              className="mt-4 mb-1.5 text-center text-[1.5rem] leading-tight font-bold tracking-tight text-foreground"
            >
              {slide.title}
            </motion.h2>

            {/* Description - TIGHT to title */}
            <motion.p
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="max-w-[280px] text-center text-[0.8125rem] leading-snug text-muted-foreground"
            >
              {slide.description}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Controls - TIGHT to content, minimal gap */}
      <div className="px-6 pb-5 pt-1 shrink-0">
        {/* Dots */}
        <div className="mb-2.5 flex items-center justify-center gap-1.5">
          {slides.map((_, i) => (
            <motion.div
              key={i}
              className={cn(
                "h-1.5 rounded-full",
                i === current ? "bg-primary" : "bg-muted-foreground/20",
              )}
              animate={{
                width: i === current ? 20 : 6,
                opacity: i === current ? 1 : 0.5,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          ))}
        </div>

        {/* Button */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={handleNext}
          className={cn(
            "h-11 w-full rounded-xl text-sm font-semibold text-white",
            "bg-primary hover:bg-primary/90",
            "shadow-md shadow-primary/20 transition-all duration-200",
          )}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={isLast ? "get-started" : "next"}
              initial={{ y: 6, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -6, opacity: 0 }}
              transition={{ duration: 0.12 }}
              className="flex items-center justify-center gap-1.5"
            >
              {isLast ? (
                <>
                  Get Started
                  <Sparkles className="h-4 w-4" />
                </>
              ) : (
                <>
                  Next
                  <ChevronRight className="h-4 w-4" />
                </>
              )}
            </motion.span>
          </AnimatePresence>
        </motion.button>

        {/* Back / Skip */}
        <div className="mt-2 flex items-center justify-between h-5">
          <button
            onClick={handlePrev}
            className={cn(
              "text-xs font-medium transition-colors",
              current > 0
                ? "text-muted-foreground hover:text-foreground"
                : "text-transparent pointer-events-none",
            )}
          >
            Back
          </button>

          {onSkip && !isLast ? (
            <button
              onClick={onSkip}
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Skip
            </button>
          ) : (
            <div className="w-8" />
          )}
        </div>
      </div>

      {/* Bottom safe area */}
      <div className="shrink-0 h-1" />
    </div>
  );
}
