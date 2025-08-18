'use client';

import { motion } from 'framer-motion';
import { skillsData } from '@/lib/skillsData.tsx';
import { fadeInUp } from '@/lib/animations';
import Container from './Container';

const SkillsSection = () => {
    const featuredSkills = skillsData.filter(s => s.featured);
    const otherSkills = skillsData.filter(s => !s.featured);

    return (
        <section
            id="skills"
            className="py-24 bg-gray-50 dark:bg-gray-900"
        >
            <Container>
                {/* En-tête de la section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInUp}
                    viewport={{ amount: 0.2 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                        Mon Expertise
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
                        De la conception à la production, voici comment je
                        transforme vos idées en réalité. Mon approche est
                        centrée sur la création de logiciels fiables,
                        performants et parfaitement adaptés à vos besoins.
                    </p>
                </motion.div>

                {/* Compétences Clés (Featured) */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {featuredSkills.map((category, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeInUp}
                            viewport={{ amount: 0.2 }}
                            whileHover={{ scale: 1.03, y: -8 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg cursor-pointer"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                {category.name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                {category.description}
                            </p>
                            <ul className="space-y-2">
                                {category.skills.map(
                                    (skill, skillIndex) => (
                                        <li
                                            key={skillIndex}
                                            className="flex items-center text-gray-700 dark:text-gray-200"
                                        >
                                            {skill.icon ? (
                                                <span className="mr-3">
                                                    {skill.icon}
                                                </span>
                                            ) : (
                                                <span className="mr-3 h-6 w-6 text-primary-500">
                                                    -
                                                </span>
                                            )}
                                            <span>{skill.name}</span>
                                        </li>
                                    )
                                )}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Autres Compétences */}
                <div>
                    <motion.h3
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInUp}
                        viewport={{ amount: 0.2 }}
                        className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
                    >
                        Technologies & Outils
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {otherSkills.map((category, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                variants={fadeInUp}
                                viewport={{ amount: 0.1 }}
                                whileHover={{ scale: 1.05, y: -8 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 300,
                                }}
                                className="bg-white dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700/50 cursor-pointer"
                            >
                                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                                    {category.name}
                                </h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                    {category.description}
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    {category.skills.map(
                                        (skill, skillIndex) => (
                                            <div
                                                key={skillIndex}
                                                className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700/50 px-3 py-1 rounded-full"
                                            >
                                                {skill.icon}
                                                <span className="font-medium text-sm text-gray-700 dark:text-gray-200">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        )
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default SkillsSection;
