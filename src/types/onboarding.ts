export interface OnboardingSlide {
  id: number;
  title: string;
  description: string;
  image: string; // path to image in public/onboarding/
  gradient: string;
}

export interface OnboardingProps {
  slides: OnboardingSlide[];
  onComplete: () => void;
  onSkip?: () => void;
}
