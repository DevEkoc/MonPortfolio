'use client';

import React from 'react';
import Timeline from '@/components/Timeline';
import { TimelineItem } from '@/types/timeline';
import Layout from '@/components/Layout';
import Container from '@/components/Container';

const timelineData: TimelineItem[] = [
    {
        title: 'Développeur Full Stack',
        org: 'TechCorp',
        dateRange: '2022 - présent',
        description:
            'Développement d’applications web modernes avec React, Django et MySQL.',
        type: 'experience',
    },
    {
        title: 'Master Informatique',
        org: 'Université de Paris',
        dateRange: '2020 - 2022',
        description:
            'Spécialisation en développement logiciel et systèmes distribués.',
        type: 'education',
    },
    {
        title: 'Développeur Frontend',
        org: 'WebStudio',
        dateRange: '2019 - 2020',
        description:
            'Création d’interfaces réactives et animées avec Next.js et Tailwind.',
        type: 'experience',
    },
    {
        title: 'Licence Informatique',
        org: 'Université de Douala',
        dateRange: '2017 - 2020',
        description:
            'Bases solides en algorithmique, programmation et bases de données.',
        type: 'education',
    },
];

const ExperienceEducationPage = () => (
    <Layout>
        <div className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <Container>
                <h1 className="text-4xl lg:text-5xl font-bold text-center text-primary-600 dark:text-primary-400 mb-8">
                    Parcours & Éducation
                </h1>
                <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12">
                    Découvrez mon parcours professionnel et académique.
                </p>
                <Timeline items={timelineData} />
            </Container>
        </div>
    </Layout>
);

export default ExperienceEducationPage;
