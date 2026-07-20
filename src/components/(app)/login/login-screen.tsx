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
      <main
        className="
        flex
        h-dvh
        max-h-dvh
        flex-col
        overflow-hidden
        px-5
        pt-6
        pb-[env(safe-area-inset-bottom)]
        sm:px-8
        "
      >
        {/* HERO */}

        <motion.section
          initial={{
            opacity: 0,
            y: -20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.5,
          }}

          className="
          flex
          flex-1
          flex-col
          items-center
          justify-center
          text-center
          min-h-0
          "
        >
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}

            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}

            className="
            relative
            h-24
            w-24
            sm:h-28
            sm:w-28
            overflow-hidden
            rounded-[1.8rem]
            shadow-xl
            shrink-0
            "
          >
            <Image
              src="/logo.png"
              alt="Lumora"
              fill
              priority
              sizes="112px"
              className="
              object-cover
              "
            />
          </motion.div>

          <h1
            className="
            mt-5
            text-3xl
            font-bold
            tracking-tight
            sm:text-5xl
            "
          >
            Lumora
          </h1>

          <p
            className="
            mt-3
            max-w-xs
            text-sm
            leading-relaxed
            text-muted-foreground
            sm:text-base
            "
          >
            Discover audiobooks, stories and podcasts in one beautiful listening experience.
          </p>
        </motion.section>

        {/* FEATURES */}

        <motion.section
          initial={{
            opacity: 0,
            y: 30,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.2,
          }}

          className="
          shrink-0
          space-y-2
          "
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}

                initial={{
                  opacity: 0,
                  x: -20,
                }}

                animate={{
                  opacity: 1,
                  x: 0,
                }}

                transition={{
                  delay: index * 0.1,
                }}

                className="
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    bg-card/70
                    p-3
                    backdrop-blur
                    "
              >
                <div
                  className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-primary/10
                      text-primary
                      "
                >
                  <Icon
                    className="
                        h-5
                        w-5
                        "
                  />
                </div>

                <div className="min-w-0">
                  <h3
                    className="
                        text-sm
                        font-semibold
                        "
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="
                        truncate
                        text-xs
                        text-muted-foreground
                        "
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.section>

        {/* ACTION */}

        <motion.section
          initial={{
            opacity: 0,
            y: 20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.4,
          }}

          className="
          shrink-0
          pt-5
          "
        >
          <Button
            size="lg"

            className="
            h-14
            w-full
            rounded-2xl
            text-base
            font-semibold
            shadow-xl
            "

            onClick={() => openSignIn()}
          >
            Continue with Lumora
          </Button>

          <p
            className="
            mt-3
            text-center
            text-[11px]
            text-muted-foreground
            "
          >
            By continuing, you agree to our Terms and Privacy Policy.
          </p>
        </motion.section>
      </main>
    </AppShell>
  );
}
