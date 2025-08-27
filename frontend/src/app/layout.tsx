import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    metadataBase: new URL('https://www.devekoc.com'),
    title: {
        default: 'DevEkoc - Ingénieur Logiciel & Développeur Full-Stack',
        template: '%s | DevEkoc',
    },
    description:
        'Portfolio de Christophe Ekobena, développeur passionné. Découvrez mes projets, compétences et articles de blog sur les technologies web modernes.',
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
            'Portfolio de Christophe Ekobena, développeur passionné.',
        url: 'https://www.devekoc.com',
        siteName: 'DevEkoc Portfolio',
        images: [
            {
                url: '/images/eko.jpg', // Chemin vers l'image OG
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
        images: ['/images/eko.jpg'],
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
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}