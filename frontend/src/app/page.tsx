
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <SkillsSection />
    </Layout>
  );
}

