import dynamic from 'next/dynamic';
import Layout from '@/components/Layout';
import HeroOptimized from '@/components/HeroOptimized';
import AboutSection from '@/components/AboutSection';

// Lazy loading optimisé pour réduire le TBT
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
            <HeroOptimized />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <BlogSection />
            <DynamicContactForm />
        </Layout>
    );
}
