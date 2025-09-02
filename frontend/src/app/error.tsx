'use client'; // Les composants d'erreur doivent être des composants clients

import { useEffect } from 'react';
import Container from '@/components/Container';
import Layout from '@/components/Layout';

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        // Log l'erreur dans un service de reporting
        console.error(error);
    }, [error]);

    return (
        <Layout>
            <Container>
                <div className="min-h-[60vh] flex flex-col items-center justify-center text-center py-16">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        Une erreur est survenue
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        Désolé, quelque chose s&apos;est mal passé de notre côté.
                    </p>
                    <button
                        onClick={() => reset()}
                        className="mt-8 btn-primary text-lg px-8 py-4 inline-flex items-center shadow-lg shadow-primary-500/20"
                    >
                        Réessayer
                    </button>
                </div>
            </Container>
        </Layout>
    );
}
