// Technologies utilisées dans les projets (exportées depuis Django)
export interface Technology {
  id: number;
  name: string;
}

export const technologies: Technology[] = [
  {
    "id": 1,
    "name": "Angular"
  },
  {
    "id": 2,
    "name": "CSS3"
  },
  {
    "id": 3,
    "name": "Django"
  },
  {
    "id": 4,
    "name": "Docker"
  },
  {
    "id": 5,
    "name": "FastAPI"
  },
  {
    "id": 56,
    "name": "Firebase"
  },
  {
    "id": 6,
    "name": "Flask"
  },
  {
    "id": 7,
    "name": "HTML5"
  },
  {
    "id": 8,
    "name": "Java"
  },
  {
    "id": 9,
    "name": "JavaScript"
  },
  {
    "id": 10,
    "name": "MySQL"
  },
  {
    "id": 11,
    "name": "Next.js"
  },
  {
    "id": 12,
    "name": "Nginx"
  },
  {
    "id": 13,
    "name": "Node.js"
  },
  {
    "id": 14,
    "name": "PostgreSQL"
  },
  {
    "id": 15,
    "name": "Python"
  },
  {
    "id": 16,
    "name": "React"
  },
  {
    "id": 17,
    "name": "SQLite"
  },
  {
    "id": 18,
    "name": "Swing"
  },
  {
    "id": 19,
    "name": "Tailwind CSS"
  },
  {
    "id": 20,
    "name": "TypeScript"
  },
  {
    "id": 21,
    "name": "Vue.js"
  }
];

// Helper pour récupérer une technologie par nom
export const getTechnologyByName = (name: string): Technology | undefined => {
  return technologies.find(tech => tech.name === name);
};

// Helper pour récupérer plusieurs technologies par noms
export const getTechnologiesByNames = (names: string[]): Technology[] => {
  return names.map(name => getTechnologyByName(name)).filter(Boolean) as Technology[];
};