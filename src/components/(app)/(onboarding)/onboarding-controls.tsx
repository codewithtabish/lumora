"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface OnboardingControlsProps {
  current: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
  onComplete: () => void;
  onSkip?: () => void;
}

export function OnboardingControls({
  current,
  total,
  onNext,
  onPrev,
  onComplete,
  onSkip,
}: OnboardingControlsProps) {
  const isLast = current === total - 1;

  return (
    <div className="flex flex-col gap-4">
      {/* Main Action Button */}
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.96 }}>
        <Button
          onClick={isLast ? onComplete : onNext}
          className={cn(
            "relative h-14 w-full overflow-hidden rounded-2xl text-base font-semibold",
            "bg-primary text-primary-foreground shadow-lg shadow-primary/25",
            "transition-all duration-300",
            "hover:shadow-xl hover:shadow-primary/30",
            "active:scale-[0.98]",
          )}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={isLast ? "get-started" : "next"}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center gap-2"
            >
              {isLast ? (
                <>
                  Get Started
                  <Sparkles className="h-5 w-5" />
                </>
              ) : (
                <>
                  Next
                  <ChevronRight className="h-5 w-5" />
                </>
              )}
            </motion.span>
          </AnimatePresence>
        </Button>
      </motion.div>

      {/* Secondary Actions */}
      <div className="flex items-center justify-between px-2">
        {current > 0 ? (
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onPrev}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Back
          </motion.button>
        ) : (
          <div />
        )}

        {!isLast && onSkip && (
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onSkip}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Skip
          </motion.button>
        )}
      </div>
    </div>
  );
}
