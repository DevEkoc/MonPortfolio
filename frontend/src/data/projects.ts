// Données des projets du portfolio (exportées depuis Django)
export interface Project {
    id: number;
    title: string;
    slug: string;
    summary: string;
    description: string;
    techStack: string[];
    image: string | null;
    demoUrl: string;
    codeUrl: string;
    status: 'published' | 'draft';
    createdAt: string;
    updatedAt: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'ALTARIS',
        slug: 'projet-altaris',
        summary:
            'ALTARIS est une application web de gestion centralisée des servants d’autel du Cameroun, permettant l’organisation des données, la gestion des rôles et la sécurisation des accès.',
        description:
            'ALTARIS est une application de gestion centralisée des servants d’autel du Cameroun. Elle permet la structuration et l’organisation des données administratives, la gestion des rôles utilisateurs, la sécurisation des accès et la fiabilisation des informations. Le projet inclut la mise en place d’une base de données structurée, le traitement des données, ainsi que la documentation et les tests des fonctionnalités.',
        techStack: ['Java', 'Spring Boot', 'Spring Web MVC', 'Spring Security', 'Spring Data JPA', 'Springdoc OpenAPI', 'Hibernate', 'JUnit', 'Mockito', 'MySQL'],
        image: '/images/altaris_project.webp',
        demoUrl: '',
        codeUrl: 'https://github.com/DevEkoc/Altaris.git',
        status: 'published',
        createdAt: '2025-08-23T07:51:24.242296+00:00',
        updatedAt: '2025-08-25T12:35:07.055476+00:00',
    },
    {
        id: 2,
        title: 'CAMER ALTAS',
        slug: 'projet-camer-altas',
        summary:
            'CAMER ALTAS est une application de centralisation et de consultation des données territoriales du Cameroun.',
        description:
            'CAMER ALTAS est une application permettant la centralisation, la consultation et l’exploitation des données territoriales du Cameroun. Elle intègre un système de gestion des rôles (consultation, contributeur, administrateur), une API pour l’exposition sécurisée des données, ainsi qu’un mécanisme de suggestions avec validation ou rejet automatique afin d’améliorer la fiabilité des informations.',
        techStack: ['Java', 'Spring Boot', 'Spring Web MVC', 'Spring Security', 'Spring Data JPA', 'Springdoc OpenAPI', 'Hibernate', 'JUnit', 'Mockito', 'MySQL'],
        image: '/images/default.webp',
        demoUrl: '',
        codeUrl: 'https://github.com/DevEkoc/CamerAtlas.git',
        status: 'published',
        createdAt: '2025-08-23T07:51:24.242296+00:00',
        updatedAt: '2025-08-25T12:35:07.055476+00:00',
    },
    {
        id: 3,
        title: 'Gestion des certificats de baptême',
        slug: 'gestion-certificats-bapteme',
        summary:
            'Application permettant l’informatisation des registres de baptême et l’automatisation de la génération des certificats.',
        description:
            'Cette application permet l’informatisation de registres de sacrements (baptême, communion, confirmation et mariage) existants, l’enregistrement et la consultation des informations des chrétiens ayant reçu les sacrements, ainsi que l’automatisation de la génération des certificats de baptême. Le projet met l’accent sur la fiabilisation des données utilisateurs et l’amélioration de la gestion administrative.',
        techStack: ['Java', 'Swing', 'MySQL'],
        image: '/images/default.webp',
        demoUrl: '',
        codeUrl: 'https://github.com/DevEkoc/Projet-Mbenda',
        status: 'published',
        createdAt: '2025-08-25T11:38:08.035971+00:00',
        updatedAt: '2025-08-25T12:13:27.551016+00:00',
    },

    {
        id: 4,
        title: 'Téléchargeur Youtube by DevEkoc',
        slug: 'telechargeur-youtube-by-devekoc',
        summary:
            'Une application web moderne pour télécharger des vidéos et audios YouTube avec une interface élégante et une progression en temps réel.',
        description:
            'Une application web moderne pour télécharger des vidéos et audios YouTube avec une interface élégante et une progression en temps réel.',
        techStack: ['Next.js', 'Python', 'Flask', 'TypeScript'],
        image: '/images/default.webp',
        demoUrl: 'https://youtube-downloader.devekoc.com/',
        codeUrl: 'https://github.com/DevEkoc/youtube-downloader',
        status: 'published',
        createdAt: '2025-09-10T06:51:20.180819+01:00',
        updatedAt: '2025-09-10T06:51:20.180819+01:00',
    },
    {
        id: 5,
        title: 'Site Web de Bertille Events',
        slug: 'bertille-events',
        summary:
            'Un site web élégant pour l\'entreprise d\'événementiel Bertille Events, spécialisée dans l\'organisation de mariages, anniversaires, obsèques et cérémonies traditionnelles (dot).',
        description:
            'Un site web élégant pour l\'entreprise d\'événementiel Bertille Events, spécialisée dans l\'organisation de mariages, anniversaires, obsèques et cérémonies traditionnelles (dot).',
        techStack: ['Next.js', 'TypeScript'],
        image: '/images/bertille-events.webp',
        demoUrl: 'https://bertille-events.devekoc.com',
        codeUrl: '',
        status: 'published',
        createdAt: '2025-09-11T22:51:20.180819+01:00',
        updatedAt: '2025-09-11T22:51:20.180819+01:00',
    },
];

// Helpers pour la manipulation des données
export const getProjectBySlug = (slug: string): Project | undefined => {
    return projects.find(
        project => project.slug === slug && project.status === 'published'
    );
};

export const getPublishedProjects = (): Project[] => {
    return projects.filter(project => project.status === 'published');
};

export const getProjectsByTechnology = (technology: string): Project[] => {
    return projects.filter(
        project =>
            project.status === 'published' &&
            project.techStack.includes(technology)
    );
};
