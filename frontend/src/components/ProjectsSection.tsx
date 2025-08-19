'use client';

import { useEffect, useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Project } from '@/types/project';
import { getProjects } from '@/lib/projectsApi';
import ProjectCard from './ProjectCard';
import ProjectFilters from './ProjectFilters';
import Container from './Container';

const INITIAL_DISPLAY_LIMIT = 6; // 2 rows * 3 projects/row

const ProjectsSection = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [filters, setFilters] = useState<{ [key: string]: string }>({});
    const [displayLimit, setDisplayLimit] = useState(INITIAL_DISPLAY_LIMIT);

    const fetchProjects = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const params: { [key: string]: string } = { ...filters };
            if (filters.tech) {
                params.tech_stack__name = filters.tech;
                delete params.tech;
            }
            const data = await getProjects(params);
            setProjects(data.results);
        } catch {
            setError(
                'Impossible de charger les projets. Veuillez réessayer plus tard.'
            );
        }
        setIsLoading(false);
    }, [filters]);

    useEffect(() => {
        fetchProjects();
    }, [fetchProjects]);

    // Reset displayLimit when filters change
    useEffect(() => {
        setDisplayLimit(INITIAL_DISPLAY_LIMIT);
    }, [filters]);

    const handleFilterChange = (filter: { type: string; value: string }) => {
        setFilters(prev => ({ ...prev, [filter.type]: filter.value }));
    };

    const handleClearFilters = () => {
        setFilters({});
    };

    return (
        <section id="projects" className="py-24 bg-gray-100 dark:bg-gray-900">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                        Mes Projets
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
                        Voici une sélection de projets qui illustrent mon
                        parcours et mes compétences.
                    </p>
                </motion.div>

                <ProjectFilters
                    onFilterChange={handleFilterChange}
                    onClearFilters={handleClearFilters}
                    activeTech={filters.tech || ''}
                />

                {isLoading && (
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        Chargement des projets...
                    </div>
                )}
                {error && (
                    <div className="text-center text-red-500">{error}</div>
                )}

                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {!isLoading &&
                            !error &&
                            projects
                                .slice(0, displayLimit)
                                .map(project => (
                                    <ProjectCard
                                        key={project.id}
                                        project={project}
                                    />
                                ))}
                    </AnimatePresence>
                </motion.div>

                {!isLoading && !error && projects.length === 0 && (
                    <div className="text-center text-gray-500 dark:text-gray-400 mt-8">
                        Aucun projet ne correspond à votre recherche.
                    </div>
                )}

                {!isLoading && !error && projects.length > displayLimit && (
                    <div className="text-center mt-8">
                        <button
                            onClick={() => setDisplayLimit(projects.length)}
                            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                        >
                            Voir plus
                        </button>
                    </div>
                )}
            </Container>
        </section>
    );
};

export default ProjectsSection;
