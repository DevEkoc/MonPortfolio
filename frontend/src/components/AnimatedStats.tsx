'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import {
    staggerContainer,
    fadeInUp,
    useInViewAnimation,
} from '@/lib/animations';

function AnimatedNumbers({ value }: { value: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
    const isInView = useInView(ref, { once: false });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on('change', latest => {
            if (ref.current) {
                const suffix = value >= 1 ? '+' : '';
                ref.current.textContent = latest.toFixed(0) + suffix;
            }
        });
    }, [springValue, value]);

    return <span ref={ref}>0</span>;
}

const stats = [
    {
        value: 50,
        label: 'Projets Réalisés',
        icon: (
            <svg
                className="w-8 h-8 mx-auto mb-2 text-primary-500 dark:text-primary-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h6m-6 4h6m-6 4h6"
                />
            </svg>
        ),
    },
    {
        value: 3,
        label: "Années d'expérience",
        icon: (
            <svg
                className="w-8 h-8 mx-auto mb-2 text-primary-500 dark:text-primary-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
            </svg>
        ),
    },
    {
        value: 100,
        label: 'Satisfaction Client',
        icon: (
            <svg
                className="w-8 h-8 mx-auto mb-2 text-primary-500 dark:text-primary-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 18.734V11.5a2 2 0 012-2h2.646M4 11.5h3M4 15.5h3m4-8.5V4a2 2 0 012-2h2a2 2 0 012 2v1.5"
                />
            </svg>
        ),
    },
];

export default function AnimatedStats() {
    const statsAnimationControls = useInViewAnimation(false, 0.2);

    return (
        <motion.div
            {...statsAnimationControls}
            variants={staggerContainer}
            className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
            {stats.map((stat, index) => (
                <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700/50 text-center shadow-sm hover:shadow-xl transition-shadow duration-300"
                >
                    {stat.icon}
                    <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">
                        <AnimatedNumbers value={stat.value} />
                        {stat.value === 100 && '%'}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400">
                        {stat.label}
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
}
