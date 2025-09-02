import dynamic from 'next/dynamic';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection'; // Retour à l'import direct pour Above-the-Fold

// Lazy load des composants vraiment non critiques

const SkillsSection = dynamic(() => import('@/components/SkillsSection'), {
    loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-800" />
});

const ProjectsSection = dynamic(() => import('@/components/ProjectsSection'), {
    loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-800" />
});

const BlogSection = dynamic(() => import('@/components/BlogSection'), {
    loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-800" />
});

const DynamicContactForm = dynamic(() => import('@/components/DynamicContactForm'), {
    loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-800" />
});

export default function Home() {
    return (
        <Layout>
            <Hero />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <BlogSection />
            <DynamicContactForm />
        </Layout>
    );
}
