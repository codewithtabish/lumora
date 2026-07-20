"use client";

import { useRouter } from "next/navigation";
import { OnboardingScreen } from "@/components/(app)/(onboarding)/onboarding-screen";
import { onboardingSlides } from "@/data/onboarding";
import { AppShell } from "@/components/(app)/(common)/app-shell";

export default function OnboardingPage() {
  const router = useRouter();

  const handleComplete = () => {
    localStorage.setItem("onboarding_seen", "true");
    router.push("/login");
  };

  const handleSkip = () => {
    localStorage.setItem("onboarding_seen", "true");
    router.push("/login");
  };

  return (
    <AppShell className="overflow-hidden ">
      <OnboardingScreen slides={onboardingSlides} onComplete={handleComplete} onSkip={handleSkip} />
    </AppShell>
  );
}
