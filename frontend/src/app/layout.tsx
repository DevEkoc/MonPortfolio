import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
    display: 'swap',
    preload: true,
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
    display: 'swap',
    preload: true,
});

export const metadata: Metadata = {
    metadataBase: new URL('https://www.devekoc.com'),
    title: {
        default: 'DevEkoc - Ingénieur Logiciel & Développeur Full-Stack',
        template: '%s | DevEkoc',
    },
    description:
        'Portfolio de Christophe Cédric Ekobena, développeur passionné. Découvrez mes projets, compétences et articles de blog sur les technologies web modernes.',
    keywords: [
        'développeur',
        'ingénieur',
        'portfolio',
        'projets',
        'compétences',
        'web',
        'logiciel',
        'freelance',
        'React',
        'Next.js',
        'Django',
        'Python',
    ],
    authors: [{ name: 'Christophe EKOBENA', url: 'https://www.devekoc.com' }],
    creator: 'Christophe EKOBENA',

    openGraph: {
        title: 'DevEkoc - Ingénieur Logiciel & Développeur Full-Stack',
        description:
            'Portfolio de Christophe Cédric Ekobena, développeur passionné. Découvrez mes projets, compétences et articles de blog sur les technologies web modernes.',
        url: 'https://www.devekoc.com',
        siteName: 'DevEkoc Portfolio',
        images: [
            {
                url: '/images/eko1.webp', // Chemin vers l'image OG
                width: 800,
                height: 600,
                alt: 'Photo de Christophe Ekobena',
            },
        ],
        locale: 'fr_FR',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'DevEkoc - Ingénieur Logiciel & Développeur Full-Stack',
        description:
            'Portfolio de Christophe Ekobena, développeur passionné.',
        creator: '@Chris_Ekobena',
        images: ['/images/eko1.webp'],
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className="scroll-smooth">
            <head>
                <link 
                    rel="preload" 
                    href="/images/eko1.webp" 
                    as="image" 
                    type="image/webp"
                />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
                <Analytics />
            </body>
        </html>
    );
}