"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface OnboardingDotsProps {
  total: number;
  current: number;
}

export function OnboardingDots({ total, current }: OnboardingDotsProps) {
  return (
    <div className="flex items-center justify-center gap-2.5">
      {Array.from({ length: total }).map((_, index) => (
        <motion.div
          key={index}
          className={cn(
            "h-2 rounded-full transition-colors duration-300",
            index === current ? "bg-primary" : "bg-muted-foreground/25 dark:bg-muted-foreground/20",
          )}
          animate={{
            width: index === current ? 28 : 8,
            opacity: index === current ? 1 : 0.5,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
          }}
        />
      ))}
    </div>
  );
}
