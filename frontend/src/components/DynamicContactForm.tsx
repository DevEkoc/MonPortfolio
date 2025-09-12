'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// Créez un composant de chargement simple pour une meilleure UX
const LoadingSpinner = () => (
    <div className="flex justify-center items-center py-16">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-500"></div>
    </div>
);

// Importez dynamiquement le ContactForm uniquement côté client
const ContactForm = dynamic(() => import('@/components/ContactForm'), {
    ssr: false,
    loading: () => <LoadingSpinner />,
});

const DynamicContactForm: React.FC = () => {
    return <ContactForm />;
};

export default DynamicContactForm;
