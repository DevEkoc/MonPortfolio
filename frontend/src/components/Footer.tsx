'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from './Container';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const socialLinks = [
    {
        name: 'GitHub',
        href: 'https://github.com/Chris-Ekobena',
        icon: FaGithub,
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/christophe-ekobena/',
        icon: FaLinkedin,
    },
    {
        name: 'Twitter',
        href: 'https://twitter.com/Chris_Ekobena',
        icon: FaTwitter,
    },
];

const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/#about' },
    { name: 'Projets', href: '/#projects' },
    { name: 'Blog', href: '/blog' },
];

export default function Footer() {
    return (
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <Container>
                <div className="py-16 flex flex-col items-center justify-center text-center">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Christophe EKOBENA
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 mb-6 max-w-md">
                        Développeur passionné, je transforme les idées en expériences web modernes et performantes.
                    </p>

                    <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
                        {navLinks.map(link => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex space-x-6">
                        {socialLinks.map(social => (
                            <motion.a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                whileHover={{ scale: 1.2, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={social.name}
                            >
                                <social.icon className="w-6 h-6" />
                            </motion.a>
                        ))}
                    </div>
                </div>

                <div className="py-6 border-t border-gray-200 dark:border-gray-800">
                    <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
                        © {new Date().getFullYear()} Christophe EKOBENA. Tous
                        droits réservés.
                    </p>
                </div>
            </Container>
        </footer>
    );
}
