"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronRight, Sparkles } from "lucide-react";

import { OnboardingSlide as SlideType } from "@/types/onboarding";
import { cn } from "@/lib/utils";

interface OnboardingScreenProps {
  slides: SlideType[];
  onComplete: () => void;
  onSkip?: () => void;
}

export function OnboardingScreen({ slides, onComplete, onSkip }: OnboardingScreenProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const slide = slides[current];

  const isLast = current === slides.length - 1;

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

  const handlePrevious = useCallback(() => {
    if (current > 0) {
      goTo(current - 1);
    }
  }, [current, goTo]);

  useEffect(() => {
    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      }

      if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleNext, handlePrevious]);

  return (
    <main
      className="
        flex
        h-dvh
        min-h-dvh
        flex-col
        overflow-hidden
        bg-background
      "
      style={{
        paddingTop: "env(safe-area-inset-top)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      {/* CONTENT */}

      <section
        className="
          flex
          flex-1
          items-center
          justify-center
          overflow-hidden
          px-6
        "
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={slide.id}

            initial={{
              opacity: 0,
              x: direction * 50,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            exit={{
              opacity: 0,
              x: direction * -50,
            }}

            transition={{
              duration: 0.25,
            }}

            className="
              flex
              w-full
              max-w-sm
              flex-col
              items-center
            "
          >
            {/* IMAGE */}

            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
              }}

              animate={{
                scale: 1,
                opacity: 1,
              }}

              transition={{
                duration: 0.25,
              }}

              className="
                relative
                mb-6
                aspect-square
                w-[70vw]
                max-w-72
                overflow-hidden
                rounded-[2rem]
                border
                border-border/30
                bg-card/40
                shadow-xl
              "
            >
              <Image
                src={slide.image}

                alt={slide.title}

                fill

                sizes="
                  (max-width:640px) 70vw,
                  280px
                "

                priority={current === 0}

                className="
                  object-contain
                  p-5
                "
              />
            </motion.div>

            {/* TITLE */}

            <motion.h1
              initial={{
                y: 15,
                opacity: 0,
              }}

              animate={{
                y: 0,
                opacity: 1,
              }}

              transition={{
                delay: 0.1,
              }}

              className="
                text-center
                text-2xl
                font-bold
                tracking-tight
              "
            >
              {slide.title}
            </motion.h1>

            {/* DESCRIPTION */}

            <motion.p
              initial={{
                y: 15,
                opacity: 0,
              }}

              animate={{
                y: 0,
                opacity: 1,
              }}

              transition={{
                delay: 0.15,
              }}

              className="
                mt-2
                max-w-
                text-center
                text-sm
                leading-relaxed
                text-muted-foreground
              "
            >
              {slide.description}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* FOOTER */}

      <footer
        className="
          shrink-0
          px-6
          pb-5
        "
      >
        {/* DOTS */}

        <div
          className="
            mb-5
            flex
            justify-center
            gap-2
          "
        >
          {slides.map((_, index) => (
            <motion.div
              key={index}

              animate={{
                width: index === current ? 28 : 8,
              }}

              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}

              className={cn(
                "h-2 rounded-full",
                index === current ? "bg-primary" : "bg-muted-foreground/25",
              )}
            />
          ))}
        </div>

        {/* BUTTON */}

        <motion.button
          whileTap={{
            scale: 0.97,
          }}

          onClick={handleNext}

          className="
            flex
            h-12
            w-full
            items-center
            justify-center
            rounded-xl
            bg-primary
            text-sm
            font-semibold
            text-white
            shadow-lg
          "
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={isLast ? "start" : "next"}

              initial={{
                opacity: 0,
                y: 5,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              exit={{
                opacity: 0,
                y: -5,
              }}

              className="
                flex
                items-center
                gap-2
              "
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

        {/* BACK / SKIP */}

        <div
          className="
            mt-3
            flex
            h-5
            items-center
            justify-between
          "
        >
          {current > 0 ? (
            <button
              onClick={handlePrevious}

              className="
                text-xs
                font-medium
                text-muted-foreground
              "
            >
              Back
            </button>
          ) : (
            <div />
          )}

          {!isLast && onSkip && (
            <button
              onClick={onSkip}

              className="
                text-xs
                font-medium
                text-muted-foreground
              "
            >
              Skip
            </button>
          )}
        </div>
      </footer>
    </main>
  );
}
