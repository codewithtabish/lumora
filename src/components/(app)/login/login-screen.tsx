"use client";

import Image from "next/image";
import { useClerk } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { Sparkles, Zap, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppShell } from "../(common)/app-shell";

const features = [
  {
    icon: Sparkles,
    title: "Premium Listening",
    description: "Thousands of audiobooks, stories and podcasts anywhere.",
  },
  {
    icon: Zap,
    title: "Fast Experience",
    description: "Smooth offline-ready listening experience.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Account",
    description: "Your library stays private and protected.",
  },
];

export function LoginScreen() {
  const { openSignIn } = useClerk();

  return (
    <AppShell>
      <main className="flex h-dvh flex-col overflow-hidden px-5 pt-4 pb-4">
        {/* HERO - Compact */}
        <motion.section
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center text-center shrink-0"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-20 w-20 overflow-hidden rounded-[1.5rem] shadow-xl"
          >
            <Image
              src="/logo.png"
              alt="Lumora"
              fill
              priority
              sizes="80px"
              className="object-cover"
            />
          </motion.div>

          <h1 className="mt-3 text-2xl font-bold tracking-tight">Lumora</h1>

          <p className="mt-1.5 max-w-65 text-sm leading-snug text-muted-foreground">
            Discover audiobooks, stories and podcasts in one beautiful listening experience.
          </p>
        </motion.section>

        {/* SPACER - Small gap */}
        <div className="flex-1 min-h-2" />

        {/* FEATURES - Compact cards */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.35 }}
          className="shrink-0 space-y-2"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.08 }}
                className="flex items-center gap-3 rounded-xl border bg-card/60 p-2.5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </div>

                <div className="min-w-0">
                  <h3 className="text-sm font-semibold leading-tight">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground leading-snug mt-0.5">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.section>

        {/* ACTION - Tight to features */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="shrink-0 mt-3"
        >
          <Button
            size="lg"
            className="h-12 w-full rounded-xl text-sm font-semibold shadow-lg"
            onClick={() => openSignIn()}
          >
            Continue with Lumora
          </Button>

          <p className="mt-2 text-center text-[11px] text-muted-foreground leading-tight">
            <p className="mt-2 text-center text-[11px] text-muted-foreground leading-tight">
              By continuing, you agree to our{" "}
              <a href="/terms" className="underline hover:text-foreground transition-colors">
                Terms
              </a>{" "}
              and{" "}
              <a href="/privacy" className="underline hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              .
            </p>{" "}
          </p>
        </motion.section>

        {/* Bottom safe area */}
        <div className="shrink-0 h-1" />
      </main>
    </AppShell>
  );
}
