"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { OnboardingSlide as SlideType } from "@/types/onboarding";
import Image from "next/image";

interface OnboardingSlideProps {
  slide: SlideType;
  direction: number;
}

export function OnboardingSlideComponent({ slide, direction }: OnboardingSlideProps) {
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.85,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.85,
    }),
  };

  return (
    <motion.div
      key={slide.id}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 350, damping: 35 },
        opacity: { duration: 0.35 },
        scale: { duration: 0.35 },
      }}
      className="absolute inset-0 flex flex-col items-center justify-center px-6 py-8"
    >
      {/* Glow Background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className={cn(
          "absolute top-[15%] h-48 w-48 rounded-full blur-3xl",
          "bg-gradient-to-br opacity-20 dark:opacity-15",
          slide.gradient,
        )}
      />

      {/* Image Container - Fixed size with inline styles */}
      <motion.div
        initial={{ scale: 0, y: 40, rotate: -10 }}
        animate={{ scale: 1, y: 0, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 18,
          delay: 0.15,
        }}
        className={cn(
          "relative mb-8 flex items-center justify-center overflow-hidden",
          "bg-gradient-to-br from-card/80 to-card/40",
          "border border-border/50 shadow-2xl",
          "backdrop-blur-sm",
        )}
        style={{
          width: 240,
          height: 240,
          borderRadius: 32,
          minWidth: 240,
          minHeight: 240,
        }}
      >
        <Image
          src={slide.image}
          alt={slide.title}
          width={240}
          height={240}
          className="object-contain p-6"
          priority={slide.id === 1}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
        className="mb-3 text-center text-2xl font-bold tracking-tight text-foreground"
      >
        {slide.title}
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.42, duration: 0.5, ease: "easeOut" }}
        className="max-w-[280px] text-center text-sm leading-relaxed text-muted-foreground"
      >
        {slide.description}
      </motion.p>
    </motion.div>
  );
}
