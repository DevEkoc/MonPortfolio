import { Project } from '@/data/projects';
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
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer"
        >
            {project.image && (
                <div className="relative h-56 w-full">
                    <Image
                        src={project.image}
                        alt={`Image du projet ${project.title}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className={
                            project.id === 5 ? 'object-contain' : 'object-cover'
                        }
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyEkJYgqScMucn6nqfxBKNGPBKjYjgsb8rYIYwUVSZIxOjwMMADcvs/rDHZ/XpOw3CNySTgJ4CkYYdoHUgf6vKgShJJ8BHCS1cT4JGQHf5JGKwH4fJCNRLUIbTWfttc7sTImdtVkQfhIwRwKxeXFbFIvwAhc4NiIiIiIiIiIg9bxJJGiXPdpOdLUYuLzLw9Dqv3JZjJCg=="
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
                    {project.techStack.map(tech => (
                        <span
                            key={tech}
                            className="bg-primary-100 text-primary-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-primary-900 dark:text-primary-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex justify-end gap-4 mt-4">
                    {project.demoUrl && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-accent-500 dark:text-gray-400 dark:hover:text-accent-400 transition-colors"
                        >
                            <FaExternalLinkAlt size={24} />
                        </a>
                    )}
                    {project.codeUrl && (
                        <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-accent-500 dark:text-gray-400 dark:hover:text-accent-400 transition-colors"
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
