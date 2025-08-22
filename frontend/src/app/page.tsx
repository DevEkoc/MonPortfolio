import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import BlogSection from '@/components/BlogSection';

export default function Home() {
    return (
        <Layout>
            <Hero />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <BlogSection />
        </Layout>
    );
}
