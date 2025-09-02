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
    "id": 1,
    "title": "Mon Portfolio",
    "slug": "mon-portfolio",
    "summary": "Le site que vous consultez actuellement, conçu pour présenter mes compétences et projets.",
    "description": "Un portfolio full-stack utilisant Next.js et Tailwind CSS pour le front-end, et Django pour le back-end API. Le projet est entièrement conteneurisé avec Docker.",
    "techStack": [
      "Django",
      "Next.js",
      "Tailwind CSS",
      "Docker"
    ],
    "image": "/images/default.webp",
    "demoUrl": "#",
    "codeUrl": "#",
    "status": "published",
    "createdAt": "2025-08-19T16:57:53.660453+00:00",
    "updatedAt": "2025-08-19T16:57:53.660453+00:00"
  },
  {
    "id": 2,
    "title": "Projet ALTARIS",
    "slug": "projet-altaris",
    "summary": "ALTARIS est une de gestion des servants d’autel du Cameroun. Elle permet de centraliser les informations des servants depuis la paroisse jusqu’à la coordination nationale, chaque membre disposant d’un matricule unique et d’un QR Code pour accéder à sa page dédiée.",
    "description": "ALTARIS est une application web destinée à la gestion des servants d’autel du Cameroun. Elle permet de centraliser les informations des servants depuis la paroisse jusqu’à la coordination nationale. Chaque membre dispose d’un matricule unique et d’un QR Code pour accéder à sa page dédiée. L’outil intègre également la gestion des bureaux à différents niveaux avec des rôles personnalisables, tout en offrant des fonctionnalités CRUD sécurisées pour les administrateurs.",
    "techStack": [
      "Python",
      "Django",
      "MySQL",
      "Docker",
      "Angular"
    ],
    "image": "/images/altaris_project.webp",
    "demoUrl": "https://github.com/DevEkoc/Projet-Altaris",
    "codeUrl": "https://github.com/DevEkoc/Projet-Altaris",
    "status": "published",
    "createdAt": "2025-08-23T07:51:24.242296+00:00",
    "updatedAt": "2025-08-25T12:35:07.055476+00:00"
  },
  {
    "id": 3,
    "title": "Projet Mbenda'a",
    "slug": "projet-mbendaa",
    "summary": "Mbenda est une application de bureau développée entièrement en Java, conçue pour la gestion des registres paroissiaux (Baptême, Communion, Confirmation et Mariage), pour une manipulation simplifiée et organisée des données sur les sacrements.",
    "description": "Mbenda est une application de bureau développée en Java avec l'interface utilisateur Java Swing et le thème moderne FlatLaf. Son objectif est d'offrir une solution complète et conviviale pour la gestion des registres d'une paroisse.\r\n\r\nChaque module (Baptême, Communion, Confirmation et Mariage) est doté de fonctionnalités CRUD complètes (Création, Lecture, Mise à jour, Suppression), permettant une manipulation aisée des enregistrements. L'application est architecturée selon le modèle MVC pour une meilleure séparation des préoccupations, rendant le code plus maintenable et évolutif.\r\n\r\nLa persistance des données est assurée par une base de données MySQL. L'installation du projet est simple grâce à son intégration avec l'IDE NetBeans et son script de base de données inclus, ce qui en fait un outil pratique et efficace pour les utilisateurs non techniques.",
    "techStack": [
      "MySQL",
      "Java",
      "Swing"
    ],
    "image": "/images/default.webp",
    "demoUrl": "https://github.com/DevEkoc/Projet-Mbenda",
    "codeUrl": "https://github.com/DevEkoc/Projet-Mbenda",
    "status": "published",
    "createdAt": "2025-08-25T11:38:08.035971+00:00",
    "updatedAt": "2025-08-25T12:13:27.551016+00:00"
  }
];

// Helpers pour la manipulation des données
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug && project.status === 'published');
};

export const getPublishedProjects = (): Project[] => {
  return projects.filter(project => project.status === 'published');
};

export const getProjectsByTechnology = (technology: string): Project[] => {
  return projects.filter(project => 
    project.status === 'published' && 
    project.techStack.includes(technology)
  );
};