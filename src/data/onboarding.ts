import { OnboardingSlide } from "@/types/onboarding";

export const onboardingSlides: OnboardingSlide[] = [
  {
    id: 1,
    title: "Discover Stories",
    description: "Explore thousands of audiobooks, podcasts, and stories curated for you.",
    image: "/onboarding/listening.webp",
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    id: 2,
    title: "Your Library",
    description: "Save favorites, create playlists, and pick up where you left off.",
    image: "/onboarding/audiobook.webp",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    id: 3,
    title: "Seamless Listening",
    description: "Beautiful player with sleep timer, speed control, and offline mode.",
    image: "/onboarding/podcast.webp",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: 4,
    title: "Let's Begin",
    description: "Your audio journey starts now. Dive into stories that move you.",
    image: "/onboarding/celebration.webp",
    gradient: "from-rose-500/20 to-pink-500/20",
  },
];
