'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from './Container';
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaFacebook,
    FaInstagram,
    FaEnvelope,
    FaWhatsapp,
    FaPhone,
} from 'react-icons/fa';

const socialLinks = [
    {
        name: 'GitHub',
        href: 'https://github.com/DevEkoc',
        icon: FaGithub,
    },
    {
        name: 'LinkedIn',
        href: 'https://linkedin.com/in/christophe-cédric-ekobena-7a0a7328a',
        icon: FaLinkedin,
    },
    {
        name: 'Twitter',
        href: 'https://x.com/DevEkoc237',
        icon: FaTwitter,
    },
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/cedric.denver.33',
        icon: FaFacebook,
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/cedr_eko/',
        icon: FaInstagram,
    },
    {
        name: 'Gmail',
        href: 'mailto:christophecedricekobena@devekoc.com',
        icon: FaEnvelope,
    },
    {
        name: 'WhatsApp',
        href: 'https://wa.me/237690909496?text=Bonjour%20DevEkoc%2C%20je%20vous%20contacte%20depuis%20votre%20site%20web',
        icon: FaWhatsapp,
    },
    {
        name: 'Téléphone',
        href: 'tel:+237690909496',
        icon: FaPhone,
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
        <footer className="bg-gray-50 dark:bg-gray-900 border-t-2 border-gray-200 dark:border-gray-700">
            <Container>
                <div className="py-12">
                    {/* Row 1: Logo/Desc and Nav */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-10">
                        {/* Column 1: Logo and Description (4/5 width) */}
                        <div className="md:col-span-4 text-center md:text-left">
                            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-orange-500 dark:from-primary-400 dark:to-orange-400">
                                DevEkoc.com
                            </span>
                            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-md mx-auto md:mx-0">
                                Ce site a été conçu et réalisé par{' '}
                                <b>Christophe Cédric EKOBENA</b> aka{' '}
                                <i>DevEkoc</i>. Je suis Ingénieur en Génie
                                Informatique, spécialisé dans le Génie Logiciel.
                                Ma mission est de créer des expériences
                                numériques modernes et efficaces pour les
                                entreprises et les paticuliers. Vous pouvez me
                                contacter à travers un des liens ci-dessous :
                            </p>
                        </div>

                        {/* Column 2: Navigation (1/5 width) */}
                        <nav className="md:col-span-1 flex flex-col items-center md:items-start space-y-2">
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-2">
                                Navigation
                            </h4>
                            {navLinks.map(link => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-600 dark:text-gray-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Row 2: Social Icons (much less height) */}
                    <div className="flex justify-center space-x-8 my-6">
                        {socialLinks.map(social => (
                            <motion.a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 dark:text-gray-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                                whileHover={{ scale: 1.2, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={social.name}
                            >
                                <social.icon className="w-8 h-8" />
                            </motion.a>
                        ))}
                    </div>

                    {/* Row 3: Copyright (much less height) */}
                    <div className="pt-4 mt-6 border-t border-gray-200 dark:border-gray-800">
                        <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
                            © {new Date().getFullYear()} Christophe Cédric EKOBENA.
                            Tous droits réservés.
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
