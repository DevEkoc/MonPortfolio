'use client';

import React, { useState, useEffect } from 'react';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import Container from './Container';
import { motion } from 'framer-motion';
import {
    staggerContainer,
    fadeInUp,
    useInViewAnimation,
} from '@/lib/animations';

// Schéma de validation Zod
const contactFormSchema = z.object({
    name: z.string().min(1, 'Le nom est requis.'),
    email: z
        .string()
        .email("L'adresse email n'est pas valide.")
        .min(1, "L'email est requis."),
    subject: z.string().max(200, 'Le sujet est trop long.').optional(),
    message: z
        .string()
        .min(10, 'Le message doit contenir au moins 10 caractères.')
        .max(1000, 'Le message est trop long.'),
    honeypot: z.string().max(0, 'Ce champ doit rester vide.').optional(),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormInputs>({
        name: '',
        email: '',
        subject: '',
        message: '',
        honeypot: '',
    });
    const [errors, setErrors] = useState<z.ZodIssue[]>([]);
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

    const animationControls = useInViewAnimation();

    useEffect(() => {
        if (successMessage || errorMessage) {
            const timer = setTimeout(() => {
                setSuccessMessage(null);
                setErrorMessage(null);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [successMessage, errorMessage]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors(prev => prev.filter(err => err.path[0] !== e.target.name));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMessage(null);
        setErrorMessage(null);
        setErrors([]);

        // Validation avec Zod
        const validationResult = contactFormSchema.safeParse(formData);
        if (!validationResult.success) {
            setErrors(validationResult.error.issues);
            setErrorMessage('Veuillez corriger les erreurs.');
            setLoading(false);
            return;
        }

        // Vérification Honeypot
        if (formData.honeypot) {
            console.log("Bot détecté !");
            setLoading(false);
            return;
        }

        // Vérification reCAPTCHA
        if (!recaptchaToken) {
            setErrorMessage("Veuillez cocher la case reCAPTCHA.");
            setLoading(false);
            return;
        }

        // Récupération des clés depuis les variables d'environnement
        const serviceId = process.env.EMAILJS_SERVICE_ID;
        const templateId = process.env.EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            setErrorMessage("Configuration d'envoi d'email manquante.");
            setLoading(false);
            return;
        }

        try {

            // Envoi via EmailJS avec token reCAPTCHA
            await emailjs.send(
                serviceId,
                templateId,
                {
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject || 'Nouveau message',
                    message: formData.message,
                    'g-recaptcha-response': recaptchaToken,
                    sent_date: new Date().toLocaleString('fr-FR', {
                        year: 'numeric',
                        month: 'long', 
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    })
                },
                publicKey
            );
            setSuccessMessage('Votre message a été envoyé avec succès !');
            setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
            setRecaptchaToken(null); // Réinitialiser le token reCAPTCHA
        } catch (err) {
            console.error("Erreur lors de l'envoi via EmailJS:", err);
            setErrorMessage("Une erreur est survenue lors de l'envoi du message.");
        } finally {
            setLoading(false);
        }
    };

    const getError = (fieldName: keyof ContactFormInputs) => {
        return errors.find(err => err.path[0] === fieldName)?.message || null;
    };

    return (
        <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
            <Container>
                <motion.div {...animationControls} variants={staggerContainer}>
                    <motion.div variants={fadeInUp} className="text-center mb-12">
                        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            Contactez-moi
                        </h2>
                        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                            N&apos;hésitez pas à me laisser un message.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
                    >
                        {successMessage && (
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                                {successMessage}
                            </div>
                        )}
                        {errorMessage && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                                {errorMessage}
                            </div>
                        )}
                        <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off" noValidate>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Nom</label>
                                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100" autoComplete="name" />
                                {getError('name') && <p className="mt-1 text-sm text-red-600">{getError('name')}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
                                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100" autoComplete="email" />
                                {getError('email') && <p className="mt-1 text-sm text-red-600">{getError('email')}</p>}
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Sujet (optionnel)</label>
                                <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
                                <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"></textarea>
                                {getError('message') && <p className="mt-1 text-sm text-red-600">{getError('message')}</p>}
                            </div>
                            <div style={{ display: 'none' }}>
                                <label htmlFor="honeypot">Ne pas remplir</label>
                                <input type="text" name="honeypot" id="honeypot" value={formData.honeypot} onChange={handleChange} tabIndex={-1} autoComplete="off" />
                            </div>
                            
                            {/* reCAPTCHA v2 */}
                            <div className="flex justify-center">
                                <ReCAPTCHA
                                    sitekey={process.env.RECAPTCHA_SITE_KEY || ''}
                                    onChange={(token) => {
                                        setRecaptchaToken(token);
                                        setErrorMessage(null); // Effacer l'erreur reCAPTCHA si elle existe
                                    }}
                                    onExpired={() => setRecaptchaToken(null)}
                                    onError={() => {
                                        setRecaptchaToken(null);
                                        setErrorMessage("Erreur reCAPTCHA. Veuillez réessayer.");
                                    }}
                                    theme="light" // ou "dark" selon votre thème
                                    size="normal" // ou "compact"
                                />
                            </div>
                            <div>
                                <button type="submit" disabled={loading} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed">
                                    {loading ? 'Envoi en cours...' : 'Envoyer le message'}
                                </button>
                            </div>
                            
                            {/* Badge reCAPTCHA */}
                            <div className="text-center">
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    Ce site est protégé par reCAPTCHA et la{' '}
                                    <a href="https://policies.google.com/privacy" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">
                                        Politique de confidentialité
                                    </a>{' '}
                                    et les{' '}
                                    <a href="https://policies.google.com/terms" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">
                                        Conditions d'utilisation
                                    </a>{' '}
                                    de Google s&lsquoappliquent.
                                </p>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
};

export default ContactForm;
