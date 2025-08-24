'use client';

import React, { useState, useEffect } from 'react';
import { z } from 'zod';
import api from '@/lib/axios'; // Our shared axios instance
import axios from 'axios'; // Import axios directly for isAxiosError check
import Container from './Container'; // Assuming this is a common layout component

// Define the Zod schema for validation
const contactFormSchema = z.object({
    name: z.string().min(1, 'Le nom est requis.'),
    email: z
        .string()
        .email('L&apos;adresse email n&apos;est pas valide.')
        .min(1, 'L&apos;email est requis.'),
    subject: z.string().max(200, 'Le sujet est trop long.').optional(),
    message: z
        .string()
        .min(10, 'Le message doit contenir au moins 10 caractères.')
        .max(1000, 'Le message est trop long.'),
    honeypot: z.string().max(0, 'Ce champ doit rester vide.').optional(), // Honeypot field
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormInputs>({
        name: '',
        email: '',
        subject: '',
        message: '',
        honeypot: '', // Initialize honeypot
    });
    const [errors, setErrors] = useState<z.ZodIssue[]>([]);
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    // Ajout : disparition automatique du message de succès
    useEffect(() => {
        if (successMessage) {
            const timer = setTimeout(() => {
                setSuccessMessage(null);
            }, 4000); // 4 secondes
            return () => clearTimeout(timer);
        }
    }, [successMessage]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Clear errors for the field being changed
        setErrors(prev => prev.filter(err => err.path[0] !== e.target.name));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMessage(null);
        setErrorMessage(null);
        setErrors([]);

        try {
            // Validate form data with Zod
            contactFormSchema.parse(formData);

            // Submit to API
            const response = await api.post('/contact/', formData);

            if (response.status === 201) {
                setSuccessMessage('Votre message a été envoyé avec succès !');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                    honeypot: '',
                }); // Clear form
            } else {
                // This case should ideally not happen with 201 check, but for robustness
                setErrorMessage('Une erreur inattendue est survenue.');
            }
        } catch (err) {
            if (err instanceof z.ZodError) {
                setErrors(err.issues);
                setErrorMessage(
                    'Veuillez corriger les erreurs dans le formulaire.'
                );
            } else if (axios.isAxiosError(err) && err.response) {
                const responseData = err.response.data;
                // API returned an error response (e.g., 400, 500)
                setErrorMessage(
                    responseData?.message ||
                        "Erreur lors de l'envoi du message."
                );
                // If API returns validation errors, display them
                if (responseData?.errors) {
                    // Assuming API returns errors in a similar format to Zod or a flat object
                    // This part might need adjustment based on actual API error response structure
                    const apiErrors = Object.keys(responseData.errors).map(
                        key => ({
                            path: [key],
                            message: Array.isArray(responseData.errors[key])
                                ? responseData.errors[key][0]
                                : responseData.errors[key], // Take the first error message
                            code: 'custom', // Or a more specific code if API provides it
                            expected: 'valid', // Placeholder
                            received: 'invalid', // Placeholder
                        })
                    );
                    setErrors(apiErrors as z.ZodIssue[]); // Cast to ZodIssue[]
                }
            } else if (axios.isAxiosError(err)) {
                // Network error or request was made but no response received
                setErrorMessage(
                    'Impossible de se connecter au serveur. Veuillez réessayer plus tard.'
                );
            } else {
                setErrorMessage('Une erreur inattendue est survenue.');
            }
        } finally {
            setLoading(false);
        }
    };

    const getError = (fieldName: keyof ContactFormInputs) => {
        if (!errors || !Array.isArray(errors)) {
            return null;
        }
        const fieldError = errors.find(
            err => err.path && err.path[0] === fieldName
        );
        return fieldError ? fieldError.message : null;
    };

    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        Contactez-moi
                    </h2>
                    <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                        N'hésitez pas à me laisser un message.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                    {successMessage && (
                        <div
                            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
                            role="alert"
                        >
                            {successMessage}
                        </div>
                    )}
                    {errorMessage && (
                        <div
                            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
                            role="alert"
                        >
                            {errorMessage}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                            >
                                Nom
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                            />
                            {getError('name') && (
                                <p className="mt-1 text-sm text-red-600">
                                    {getError('name')}
                                </p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                            />
                            {getError('email') && (
                                <p className="mt-1 text-sm text-red-600">
                                    {getError('email')}
                                </p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="subject"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                            >
                                Sujet (optionnel)
                            </label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                            />
                            {getError('subject') && (
                                <p className="mt-1 text-sm text-red-600">
                                    {getError('subject')}
                                </p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                            ></textarea>
                            {getError('message') && (
                                <p className="mt-1 text-sm text-red-600">
                                    {getError('message')}
                                </p>
                            )}
                        </div>

                        {/* Honeypot field - hidden from users */}
                        <div style={{ display: 'none' }}>
                            <label
                                htmlFor="honeypot"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                            >
                                Ne pas remplir ce champ
                            </label>
                            <input
                                type="text"
                                name="honeypot"
                                id="honeypot"
                                value={formData.honeypot}
                                onChange={handleChange}
                                tabIndex={-1} // Prevent tabbing to it
                                autoComplete="off" // Prevent browser autofill
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading
                                    ? 'Envoi en cours...'
                                    : 'Envoyer le message'}
                            </button>
                        </div>
                    </form>
                </div>
            </Container>
        </section>
    );
};

export default ContactForm;
