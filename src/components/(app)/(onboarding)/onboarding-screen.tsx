"use client";

import { useState, useCallback, useEffect, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OnboardingSlide as SlideType } from "@/types/onboarding";
import Image from "next/image";
import { ChevronRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

interface OnboardingScreenProps {
  slides: SlideType[];
  onComplete: () => void;
  onSkip?: () => void;
}

export function OnboardingScreen({ slides, onComplete, onSkip }: OnboardingScreenProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const isClient = useIsClient();

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

  if (!isClient) {
    return (
      <div className="flex h-[100dvh] flex-col overflow-hidden">
        <div className="shrink-0" style={{ height: "env(safe-area-inset-top, 16px)" }} />
        <div className="flex flex-1 flex-col items-center justify-center px-6">
          <div className="mb-3 rounded-[1.5rem] bg-muted" style={{ width: 220, height: 220 }} />
          <h2 className="mb-1 text-center text-xl font-bold">{slide.title}</h2>
          <p className="max-w-[300px] text-center text-sm text-muted-foreground leading-snug">
            {slide.description}
          </p>
        </div>
        <div className="px-6 pb-6 pt-0 shrink-0">
          <div className="mb-3 flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={cn(
                  "h-2 rounded-full",
                  i === current ? "w-6 bg-primary" : "w-2 bg-muted-foreground/25",
                )}
              />
            ))}
          </div>
          <button className="h-12 w-full rounded-xl bg-primary text-sm font-semibold text-white">
            Next
          </button>
          <div className="mt-2 flex h-5 items-center justify-between">
            <span className="text-xs text-muted-foreground invisible">Back</span>
            <span className="text-xs text-muted-foreground">Skip</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-[100dvh] flex-col overflow-hidden">
      {/* Safe area spacer */}
      <div className="shrink-0" style={{ height: "max(16px, env(safe-area-inset-top))" }} />

      {/* Main Content - larger image area */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -50 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="flex flex-col items-center w-full"
          >
            {/* Glow */}
            <div
              className={cn(
                "absolute top-[5%] h-40 w-40 rounded-full blur-3xl opacity-10 pointer-events-none",
                "bg-gradient-to-br",
                slide.gradient,
              )}
            />

            {/* Image - Bigger now */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.05, duration: 0.25 }}
              className={cn(
                "relative mb-4 flex items-center justify-center overflow-hidden rounded-[1.5rem]",
                "bg-gradient-to-br from-card/40 to-card/15",
                "border border-border/25 shadow-xl",
              )}
              style={{
                width: "min(55vw, 260px)",
                height: "min(55vw, 260px)",
              }}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                width={260}
                height={260}
                className="object-contain p-4"
                priority={slide.id === 1}
                style={{ width: "100%", height: "100%" }}
              />
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.12, duration: 0.25 }}
              className="mb-1 text-center text-2xl font-bold tracking-tight text-foreground"
            >
              {slide.title}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.18, duration: 0.25 }}
              className="max-w-[300px] text-center text-sm leading-snug text-muted-foreground"
            >
              {slide.description}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Controls */}
      <div className="px-6 pb-6 pt-3 shrink-0">
        {/* Dots */}
        <div className="mb-3 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <motion.div
              key={i}
              className={cn(
                "h-2 rounded-full",
                i === current ? "bg-primary" : "bg-muted-foreground/20",
              )}
              animate={{ width: i === current ? 24 : 8 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          ))}
        </div>

        {/* Button */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={handleNext}
          className={cn(
            "h-12 w-full rounded-xl text-sm font-semibold text-white",
            "bg-primary hover:bg-primary/90",
            "shadow-lg shadow-primary/25 transition-colors duration-200",
          )}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={isLast ? "get-started" : "next"}
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -5, opacity: 0 }}
              transition={{ duration: 0.1 }}
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
          {current > 0 ? (
            <button
              onClick={handlePrev}
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Back
            </button>
          ) : (
            <div className="w-8" />
          )}
          {!isLast && onSkip && (
            <button
              onClick={onSkip}
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Skip
            </button>
          )}
          {isLast && <div className="w-8" />}
        </div>
      </div>
    </div>
  );
}
