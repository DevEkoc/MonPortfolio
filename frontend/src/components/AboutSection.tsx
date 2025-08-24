'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Container from './Container';
import Image from 'next/image';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import { GraduationCap, Briefcase, MapPin } from 'lucide-react';

// Données pour la section
const educationData = [
    {
        degree: "Diplôme d'Ingénieur en Informatique",
        institution: 'École Nationale Supérieure Polytechnique de Douala',
        date: '2017 - 2022',
    },
    {
        degree: 'Baccalauréat Scientifique',
        institution: 'Lycée de Makepe',
        date: '2017',
    },
];

const experienceData = [
    {
        title: 'Développeur Full-Stack',
        company: 'Startup Vision Inc.',
        date: '2022 - Présent',
        location: 'Paris, France',
        description: [
            'Conception et développement d’une plateforme SaaS avec Next.js, Django et PostgreSQL.',
            'Mise en place de l’intégration et du déploiement continus (CI/CD) sur AWS.',
            'Collaboration avec les équipes produit pour définir les nouvelles fonctionnalités.',
        ],
    },
    {
        title: 'Développeur Frontend (Stage)',
        company: 'Creative Web Agency',
        date: '2021',
        location: 'Lille, France',
        description: [
            "Intégration d'interfaces utilisateur complexes et responsives avec React et TypeScript.",
            'Optimisation des performances et du SEO pour des sites clients à fort trafic.',
        ],
    },
    {
        title: 'Projet Académique Noteworthy',
        company: 'Projet Universitaire',
        date: '2020',
        location: 'Douala, Cameroun',
        description: [
            "Développement d'une application mobile de gestion de notes avec React Native.",
            'Création d’une API RESTful avec Node.js et Express pour la synchronisation des données.',
        ],
    },
];

const AboutSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <motion.section
            id="about"
            ref={ref}
            className="py-24 bg-gray-50 dark:bg-gray-900"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
        >
            <Container>
                <div className="text-center mb-16">
                    <motion.h2
                        variants={fadeInUp}
                        className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl"
                    >
                        À Propos de Moi
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-12 gap-y-12">
                    {/* Colonne de Gauche: Éducation & Photo (prend 2/5 de la largeur) */}
                    <motion.div
                        variants={fadeInUp}
                        className="lg:col-span-2 space-y-8"
                    >
                        {/* Photo */}
                        <div className="relative w-full max-w-xs mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-orange-500 rounded-full -inset-4 blur-xl opacity-30"></div>
                            <Image
                                src="/images/eko.jpg"
                                alt="Photo de Christophe Cédric EKOBENA OMGBA"
                                width={400}
                                height={400}
                                className="relative w-full h-auto rounded-full object-cover border-8 border-white dark:border-gray-900 shadow-2xl"
                            />
                        </div>

                        {/* Parcours Académique */}
                        <div>
                            <h3 className="flex items-center text-2xl font-bold text-primary-600 dark:text-primary-400 mb-6 mt-12">
                                <GraduationCap className="w-8 h-8 mr-3" />
                                Formation
                            </h3>
                            <div className="space-y-6">
                                {educationData.map((edu, index) => (
                                    <div
                                        key={index}
                                        className="p-5 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
                                    >
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            {edu.date}
                                        </p>
                                        <h4 className="font-bold text-lg text-gray-900 dark:text-white mt-1">
                                            {edu.degree}
                                        </h4>
                                        <p className="font-medium text-gray-700 dark:text-gray-300">
                                            {edu.institution}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Colonne de Droite: Bio & Expérience (prend 3/5 de la largeur) */}
                    <motion.div
                        variants={fadeInUp}
                        className="lg:col-span-3"
                    >
                        {/* Bio */}
                        <div className="mb-12">
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                Passionné par la création de solutions logicielles
                                élégantes et performantes, je possède plusieurs
                                années d&apos;expérience dans le développement
                                d&apos;applications web complètes. Mon parcours
                                m&apos;a permis de maîtriser à la fois les
                                technologies frontend et backend, me permettant de
                                transformer une idée en un produit robuste.
                            </p>
                        </div>

                        {/* Expérience */}
                        <div>
                            <h3 className="flex items-center text-2xl font-bold text-primary-600 dark:text-primary-400 mb-8">
                                <Briefcase className="w-8 h-8 mr-3" />
                                Expérience Professionnelle
                            </h3>
                            <div className="relative border-l-2 border-primary-200 dark:border-primary-800 pl-8 space-y-12">
                                {experienceData.map((exp, index) => (
                                    <div key={index} className="relative">
                                        <div className="absolute -left-[42px] top-1 h-4 w-4 rounded-full bg-primary-500 border-4 border-white dark:border-gray-800"></div>
                                        <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
                                            {exp.date}
                                        </p>
                                        <h4 className="font-bold text-xl text-gray-900 dark:text-white mt-1">
                                            {exp.title}
                                        </h4>
                                        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mt-1">
                                            <MapPin className="w-4 h-4 mr-1.5" />
                                            {exp.company} - {exp.location}
                                        </div>
                                        <ul className="mt-3 space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside">
                                            {exp.description.map((desc, i) => (
                                                <li key={i}>{desc}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Ligne bouton CV */}
                <motion.div variants={fadeInUp} className="mt-16 flex justify-center">
                    <a
                        href="/cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-x-2 bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                        Télécharger mon CV
                    </a>
                </motion.div>
            </Container>
        </motion.section>
    );
};

export default AboutSection;
