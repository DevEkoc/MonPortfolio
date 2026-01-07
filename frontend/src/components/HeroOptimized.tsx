'use client';

import { lazy, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from './Container';

// Lazy load des parties non-critiques
const AnimatedStats = lazy(() => import('./AnimatedStats'));

export default function HeroOptimized() {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 py-20 overflow-hidden"
        >
            <Container>
                {/* Contenu critique - chargé immédiatement */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
                    {/* Photo - optimisée pour LCP */}
                    <div className="md:col-span-1 flex justify-center">
                        <Image
                            src="/images/eko1.webp"
                            alt="Photo de Christophe Cédric EKOBENA OMGBA"
                            width={320}
                            height={320}
                            priority
                            fetchPriority="high"
                            sizes="(max-width: 768px) 256px, 320px"
                            className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-8 border-white dark:border-gray-800 shadow-2xl"
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQAG/8QAIxAAAQQBAQgDAAAAAAAAAAAAAQACAwQRBRIhMUFRcfCh4f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECAxEhkf/aAAwDAQACEQMRAD8A18Y3OyCOSzQfRo4YwtQDutJafcQqfLy0dgKmS7WGjM3c65Gux8j4JE73O9lJjbXxhjZJYgANupE1g9dI8k3lj8mLJa91pAWOYOKSnktOWj4TLcBHOqNrVUgQCY+IgFqWanUoLr6mVznOVjfZlUCRZsNLfhbNKlUSp4HU3A/YJoaODnPUkUrZrfT9KxFp+0rUUvFNgUd3LdKW1S+k5Nt/UkKWZGNKrQ3+jU4jw/pKlJK4T+vgKD8CQTAFF60CtSFBSSW1BO2s/9k="
                        />
                    </div>

                    {/* Contenu texte - sans animations pour améliorer le TBT */}
                    <div className="md:col-span-2 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                            Christophe Cédric <br />
                            EKOBENA OMGBA
                        </h2>

                        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-orange-500 dark:from-primary-400 dark:to-orange-400 my-4 leading-relaxed py-2">
                            Ingénieur Logiciel
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto md:mx-0">
                            Ingénieur logiciel engagé, je ne me limite pas à
                            écrire du code : je crée des expériences numériques
                            pour les entreprises et les particuliers, qui
                            valorisent les projets et accélèrent la croissance.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Link
                                href="#projects"
                                className="btn-primary text-lg px-8 py-4 inline-flex items-center shadow-lg shadow-primary-500/20 hover:scale-105 transition-transform"
                            >
                                Voir mes réalisations
                            </Link>
                            <Link
                                href="#contact"
                                className="btn-secondary text-lg px-8 py-4 inline-flex items-center hover:scale-105 transition-transform"
                            >
                                Me contacter
                            </Link>
                            <Link
                                href="/docs/Curriculum-vitae-DevEkoc.pdf"
                                className="btn-primary text-lg px-8 py-4 inline-flex items-center shadow-lg shadow-primary-500/20 hover:scale-105 transition-transform"
                            >
                                Télécharger mon CV
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Stats - lazy loaded pour réduire le TBT initial */}
                <div className="mt-24">
                    <Suspense fallback={<div className="h-32" />}>
                        <AnimatedStats />
                    </Suspense>
                </div>
            </Container>
        </section>
    );
}
