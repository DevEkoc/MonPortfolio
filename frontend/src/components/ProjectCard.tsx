import { Project } from '@/types/project';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer"
        >
            {project.image && (
                <div className="relative h-56 w-full">
                    <Image
                        src={project.image}
                        alt={`Image du projet ${project.title}`}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            )}
            <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.summary}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech_stack.map(tech => (
                        <span
                            key={tech.id}
                            className="bg-primary-100 text-primary-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-primary-900 dark:text-primary-300"
                        >
                            {tech.name}
                        </span>
                    ))}
                </div>
                <div className="flex justify-end gap-4 mt-4">
                    {project.demo_url && (
                        <a
                            href={project.demo_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                        >
                            <FaExternalLinkAlt size={24} />
                        </a>
                    )}
                    {project.code_url && (
                        <a
                            href={project.code_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                        >
                            <FaGithub size={24} />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
