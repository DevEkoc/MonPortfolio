'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';
import Container from './Container';
import {
    staggerContainer,
    fadeInUp,
    buttonVariants,
    useInViewAnimation,
} from '@/lib/animations';

// Le composant AnimatedNumbers reste inchangé car sa logique est autonome et correcte.
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

export default function Hero() {
    // Utilisation du hook pour la section des statistiques
    const statsAnimationControls = useInViewAnimation(false, 0.2);

    return (
        <section
            id="home"
            className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 py-20 overflow-hidden"
        >
            <Container>
                {/* Le contenu principal s'anime au chargement */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center"
                    variants={staggerContainer}
                    initial={false} // Pas d'animation initiale pour améliorer le LCP
                    animate="visible"
                >
                    {/* Colonne de Gauche: Photo */}
                    <motion.div
                        variants={fadeInUp}
                        initial={false} // Charge immédiatement l'image critique
                        className="md:col-span-1 flex justify-center"
                    >
                        <Image
                            src="/images/eko1.webp"
                            alt="Photo de Christophe Cédric EKOBENA OMGBA"
                            width={320}
                            height={320}
                            priority
                            sizes="(max-width: 768px) 256px, 320px"
                            className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-8 border-white dark:border-gray-800 shadow-2xl"
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQAG/8QAIxAAAQQBAQgDAAAAAAAAAAAAAQACAwQRBRIhMUFRcfCh4f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECAxEhkf/aAAwDAQACEQMRAD8A18Y3OyCOSzQfRo4YwtQDutJafcQqfLy0dgKmS7WGjM3c65Gux8j4JE73O9lJjbXxhjZJYgANupE1g9dI8k3lj8mLJa91pAWOYOKSnktOWj4TLcBHOqNrVUgQCY+IgFqWanUoLr6mVznOVjfZlUCRZsNLfhbNKlUSp4HU3A/YJoaODnPUkUrZrfT9KxFp+0rUUvFNgUd3LdKW1S+k5Nt/UkKWZGNKrQ3+jU4jw/pKlJK4T+vgKD8CQTAFF60CtSFBSSW1BO2s/9k="
                        />
                    </motion.div>

                    {/* Colonne de Droite: Contenu Texte */}
                    <motion.div
                        variants={staggerContainer}
                        initial={false} // Affiche le texte immédiatement
                        className="md:col-span-2 text-center md:text-left"
                    >
                        <motion.h2
                            variants={fadeInUp}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white"
                        >
                            Christophe Cédric <br />
                            EKOBENA OMGBA
                        </motion.h2>

                        <motion.h1
                            variants={fadeInUp}
                            className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-orange-500 dark:from-primary-400 dark:to-orange-400 my-4 leading-relaxed py-2"
                        >
                            Ingénieur Logiciel
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto md:mx-0"
                        >
                            {/* J’aide les entreprises et particuliers à transformer
                            leurs idées en solutions logicielles innovantes,
                            performantes et durables */}
                            Ingénieur logiciel engagé, je ne me limite pas à
                            écrire du code : je crée des expériences numériques
                            pour les entreprises et les paticuliers, qui
                            valorisent les projets et accélèrent la croissance.
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                        >
                            <motion.div
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <Link
                                    href="#projects"
                                    className="btn-primary text-lg px-8 py-4 inline-flex items-center shadow-lg shadow-primary-500/20"
                                >
                                    Voir mes réalisations
                                </Link>
                            </motion.div>
                            <motion.div
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <Link
                                    href="#contact"
                                    className="btn-secondary text-lg px-8 py-4 inline-flex items-center"
                                >
                                    Me contacter
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Section des statistiques - utilise maintenant le hook */}
                <motion.div
                    {...statsAnimationControls}
                    variants={staggerContainer}
                    className="mt-24 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
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
            </Container>
        </section>
    );
}