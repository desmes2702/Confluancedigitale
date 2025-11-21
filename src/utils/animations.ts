import type { Variants } from "motion/react";

export const fadeDuration = 0.8;
// Explicit tuple type for Framer Motion Bezier curve easing
export const fadeEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const animFadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: fadeDuration, ease: fadeEase }
    }
};

export const animSlideUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: fadeDuration, ease: fadeEase }
    }
};

export const animSlideUpLarge: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: fadeDuration, ease: fadeEase }
    }
};

export const animStaggerChildren: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

export const animTextReveal: Variants = {
    hidden: { y: "100%" },
    visible: {
        y: 0,
        transition: { duration: fadeDuration, ease: fadeEase }
    }
};
