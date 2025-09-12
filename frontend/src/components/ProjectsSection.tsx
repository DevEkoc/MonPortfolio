'use client';

import { useState, useEffect, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { getPublishedProjects, getProjectsByTechnology } from '@/data/projects';
import ProjectCard from './ProjectCard';
import ProjectFilters from './ProjectFilters';
import Container from './Container';
import {
    staggerContainer,
    fadeInUp,
    useInViewAnimation,
} from '@/lib/animations';

const INITIAL_DISPLAY_LIMIT = 6;

const ProjectsSection = () => {
    const [selectedTech, setSelectedTech] = useState<string>('');
    const [displayLimit, setDisplayLimit] = useState(INITIAL_DISPLAY_LIMIT);

    const animationControls = useInViewAnimation(false, 0.1);

    // Récupération des projets depuis les données statiques
    const projects = useMemo(() => {
        if (!selectedTech) {
            return getPublishedProjects();
        }
        return getProjectsByTechnology(selectedTech);
    }, [selectedTech]);

    // Réinitialise la limite d'affichage lorsque les filtres changent
    useEffect(() => {
        setDisplayLimit(INITIAL_DISPLAY_LIMIT);
    }, [selectedTech]);

    const handleFilterChange = (filter: { type: string; value: string }) => {
        if (filter.type === 'tech') {
            setSelectedTech(filter.value);
        }
    };

    const handleClearFilters = () => {
        setSelectedTech('');
    };

    return (
        <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-900">
            <Container>
                <motion.div {...animationControls} variants={staggerContainer}>
                    <motion.div
                        variants={fadeInUp}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                            Mes Projets
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
                            Voici une sélection de projets personnels qui
                            illustrent mon parcours et mes compétences.
                        </p>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <ProjectFilters
                            onFilterChange={handleFilterChange}
                            onClearFilters={handleClearFilters}
                            activeTech={selectedTech}
                        />
                    </motion.div>

                    <motion.div
                        layout
                        variants={fadeInUp}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
                    >
                        <AnimatePresence>
                            {projects.slice(0, displayLimit).map(project => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                />
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {projects.length === 0 && (
                        <motion.div
                            variants={fadeInUp}
                            className="text-center text-gray-500 dark:text-gray-400 mt-8"
                        >
                            Aucun projet ne correspond à votre recherche.
                        </motion.div>
                    )}

                    {projects.length > displayLimit && (
                        <motion.div
                            variants={fadeInUp}
                            className="text-center mt-8"
                        >
                            <button
                                onClick={() => setDisplayLimit(projects.length)}
                                className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                            >
                                Voir plus
                            </button>
                        </motion.div>
                    )}
                </motion.div>
            </Container>
        </section>
    );
};

export default ProjectsSection;
