// Configuration générale du portfolio (données spécifiques non dupliquées ailleurs)

// Configuration des services externes
export interface ExternalServices {
  analytics?: {
    googleAnalyticsId?: string;
  };
  contact: {
    formspreeId?: string;
    emailjsServiceId?: string;
    emailjsTemplateId?: string;
    emailjsPublicKey?: string;
  };
}

export const externalServices: ExternalServices = {
  analytics: {
    // googleAnalyticsId: "G-XXXXXXXXXX" // À configurer si nécessaire
  },
  contact: {
    // Configuration pour le service de contact (Formspree ou EmailJS)
    // formspreeId: "xXXXXXXX" // ID Formspree si utilisé
    // emailjsServiceId: "service_XXXXXX",
    // emailjsTemplateId: "template_XXXXXX",
    // emailjsPublicKey: "XXXXXXXXXXXXXX"
  }
};

// Navigation du site
export interface NavItem {
  name: string;
  href: string;
  external?: boolean;
}

export const navigation: NavItem[] = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/#about" },
  { name: "Projets", href: "/#projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/#contact" }
];

// Note: Les autres configurations sont dans leurs fichiers respectifs :
// - Métadonnées du site : frontend/src/app/layout.tsx
// - Compétences techniques : frontend/src/lib/skillsData.tsx
// - Informations personnelles : dispersées selon leur usage