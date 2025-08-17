
import { ReactNode } from 'react';

export interface Skill {
  name: string;
  icon?: ReactNode; // Icône devient optionnelle
}

export interface SkillCategory {
  name: string;
  description: string; // Description détaillée de la compétence
  featured?: boolean; // Pour marquer les compétences clés
  skills: Skill[];
}
