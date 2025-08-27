import { Variants, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

/**
 * Hook personnalisé pour gérer les animations au défilement (on-scroll).
 * Il utilise Intersection Observer et respecte la préférence `prefers-reduced-motion`.
 * @param once - Si l'animation doit se jouer une seule fois.
 * @param amount - Le pourcentage de l'élément qui doit être visible pour déclencher l'animation.
 * @returns Un objet contenant la `ref` à attacher à l'élément et les contrôles d'animation.
 */
export const useInViewAnimation = (once = false, amount = 0.1) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount });
    const shouldReduceMotion = useReducedMotion();

    const animationControls = {
        ref,
        initial: 'hidden',
        animate: isInView || shouldReduceMotion ? 'visible' : 'hidden',
    };

    return animationControls;
};

/**
 * Animation variant for a container that staggers its children's animations.
 */
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

/**
 * Animation variant for an element that fades in and slides up.
 * This is a general-purpose animation for text, buttons, cards, etc.
 */
export const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 40, // Start 40px below the final position
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: 'easeIn',
        },
    },
};

/**
 * Animation variant for a button, adding a subtle hover and tap effect.
 */
export const buttonVariants: Variants = {
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.2,
        },
    },
    tap: {
        scale: 0.95,
    },
};
