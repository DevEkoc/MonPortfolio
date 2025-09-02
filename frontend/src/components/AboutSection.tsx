'use client';

import { motion } from 'framer-motion';
import Container from './Container';
import Image from 'next/image';
import {
    staggerContainer,
    fadeInUp,
    useInViewAnimation,
} from '@/lib/animations';
import { GraduationCap, Briefcase, MapPin } from 'lucide-react';

// Les données restent les mêmes...
const educationData = [
    {
        degree: 'Ingénieur des Travaux en Génie Informatique - option Génie Logiciel',
        institution: 'Institut Universitaire Siantou, Yaoundé',
        date: '2024 - 2025',
    },
    {
        degree: "Bac + 2 en Gestion des Systèmes d'Information",
        institution:
            'Institut Universitaire Catholique Sainte Thérèse de Yaoundé (INUCASTY)',
        date: '2020 - 2022',
    },
    {
        degree: 'Baccalauréat',
        institution: 'Lycée Bilingue de Mendong',
        date: '2020',
    },
];

const experienceData = [
    {
        title: 'Développeur Full-Stack',
        company: 'Freelance',
        date: 'Mars 2025 - Présent',
        location: 'Yaoundé, Cameroun',
        description: [
            "Conception et développement d'applications web et mobile sur mesure, de la base de données au déploiement.",
            'Gestion de projets de A à Z : recueil des besoins, analyse, spécifications techniques et suivi du développement.',
            'Utilisation de technologies variées (HTML, CSS, JavaScript, React, Next.JS, Python/Django, Java, C#) pour des solutions robustes et évolutives.',
            'Collaboration avec les clients pour adapter les solutions à leurs besoins spécifiques.',
        ],
    },
    {
        title: 'Responsable Développement',
        company: 'Global Corporation Group SARL',
        date: 'Novembre 2024 - Février 2025',
        location: 'Yaoundé, Cameroun',
        description: [
            'Refonte partielle du site web, améliorant l’expérience utilisateur (+40% de trafic)',
            'Étude du système existant de gestion des rendez-vous et stockage des données',
            'Optimisation de la base de données MySQL, réduisant le temps de traitement des données de 30%',
            "Conception et développement d'une application web de gestion des parcours d'immigration",
        ],
    },
    {
        title: 'Développeur Backend (Stage)',
        company: 'e-ROBOT Entreprise',
        date: 'Juin - Octobre 2021',
        location: 'Yaoundé, Cameroun',
        description: [
            'Développement de solutions web avec tests unitaires et validation des fonctionnalités avant mise en production',
            'Gestion de projets de communication digitale.',
            'Relations clients et coordination des livraisons de services.',
        ],
    },
];

const AboutSection = () => {
    // Utilisation du nouveau hook centralisé
    const animationControls = useInViewAnimation(false, 0.1);

    return (
        <motion.section
            id="about"
            className="py-16 bg-gray-50 dark:bg-gray-900"
            {...animationControls} // Application des contrôles d'animation
            variants={staggerContainer}
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
                    {/* Colonne de Gauche: Éducation & Photo */}
                    <motion.div
                        variants={fadeInUp}
                        className="lg:col-span-2 space-y-8"
                    >
                        {/* Photo */}
                        <div className="relative w-full max-w-xs mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-orange-500 rounded-full -inset-4 blur-xl opacity-30"></div>
                            <Image
                                src="/images/eko.webp"
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

                    {/* Colonne de Droite: Bio & Expérience */}
                    <motion.div variants={fadeInUp} className="lg:col-span-3">
                        {/* Bio */}
                        <div className="mb-12">
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                Passionné par l’informatique depuis le lycée,
                                mon parcours académique en génie logiciel et mes
                                expériences professionnelles m’ont permis
                                d’explorer un large éventail de technologies et
                                de renforcer mon expertise en développement.
                                Grâce à mes compétences en analyse et en
                                conception de systèmes d’information, je conçois
                                des solutions adaptées, innovantes et orientées
                                résultats. Polyvalent en tant que développeur
                                full-stack, je me distingue particulièrement
                                dans le backend, où je conçois des architectures
                                robustes et performantes
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
                                        <div className="absolute -left-[42px] top-1 h-4 w-4 rounded-full bg-primary-500 border-4 border-white dark:border-gray-900"></div>
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
                <motion.div
                    variants={fadeInUp}
                    className="mt-16 flex justify-center"
                >
                    <a
                        href="/docs/Curriculum-vitae-Christophe EKOBENA.pdf"
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