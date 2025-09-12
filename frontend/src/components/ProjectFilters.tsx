'use client';

import { useEffect, useState } from 'react';
import {
    Technology,
    technologies as staticTechnologies,
} from '@/data/technologies';

interface ProjectFiltersProps {
    onFilterChange: (filter: { type: string; value: string }) => void;
    onClearFilters: () => void;
    activeTech: string;
}

const ProjectFilters = ({
    onFilterChange,
    onClearFilters,
    activeTech,
}: ProjectFiltersProps) => {
    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // éviter l'hydratation côté serveur
        setMounted(true);
        setTechnologies(staticTechnologies);
    }, []);

    const handleTechChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        if (value) {
            onFilterChange({ type: 'tech', value });
        } else {
            onClearFilters();
        }
    };

    // 🚨 Important : ne pas rendre le <select> avant hydratation
    if (!mounted) {
        return null;
    }

    return (
        <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center">
            <select
                onChange={handleTechChange}
                value={activeTech}
                className="w-full sm:w-auto bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
                <option value="">Toutes les technologies</option>
                {technologies.map(tech => (
                    <option key={tech.id} value={tech.name}>
                        {tech.name}
                    </option>
                ))}
            </select>
            <button
                onClick={onClearFilters}
                className="w-full sm:w-auto px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
                Réinitialiser
            </button>
        </div>
    );
};

export default ProjectFilters;
