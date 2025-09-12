import Link from 'next/link';
import Container from '@/components/Container';
import Layout from '@/components/Layout';

export default function NotFound() {
    return (
        <Layout>
            <Container>
                <div className="min-h-[60vh] flex flex-col items-center justify-center text-center py-16">
                    <h1 className="text-6xl md:text-8xl font-bold text-primary-600 dark:text-primary-400">
                        404
                    </h1>
                    <h2 className="mt-4 text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        Page non trouvée
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        Désolé, la page que vous recherchez n&apos;existe pas ou
                        a été déplacée.
                    </p>
                    <Link
                        href="/"
                        className="mt-8 btn-primary text-lg px-8 py-4 inline-flex items-center shadow-lg shadow-primary-500/20"
                    >
                        Retour à l&apos;accueil
                    </Link>
                </div>
            </Container>
        </Layout>
    );
}
