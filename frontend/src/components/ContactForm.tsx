'use client';

import React, { useState, useEffect } from 'react';
import { z } from 'zod';
import api from '@/lib/axios';
import axios from 'axios';
import Container from './Container';
import {
    motion
} from 'framer-motion';
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

    const animationControls = useInViewAnimation();

    useEffect(() => {
        if (successMessage) {
            const timer = setTimeout(() => setSuccessMessage(null), 5000);
            return () => clearTimeout(timer);
        }
    }, [successMessage]);

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

        try {
            contactFormSchema.parse(formData);
            const response = await api.post('/contact/', formData);
            if (response.status === 201) {
                setSuccessMessage('Votre message a été envoyé avec succès !');
                setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
            }
        } catch (err) {
            if (err instanceof z.ZodError) {
                setErrors(err.issues);
                setErrorMessage('Veuillez corriger les erreurs.');
            } else if (axios.isAxiosError(err) && err.response) {
                const { data } = err.response;
                setErrorMessage(data.message || "Erreur lors de l'envoi.");
                if (data.errors) {
                    const apiErrors = Object.keys(data.errors).map(key => ({
                        path: [key],
                        message: Array.isArray(data.errors[key]) ? data.errors[key][0] : data.errors[key],
                        code: 'custom',
                        expected: 'valid',
                        received: 'invalid',
                    }));
                    setErrors(apiErrors as z.ZodIssue[]);
                }
            } else {
                setErrorMessage('Une erreur inattendue est survenue.');
            }
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
                            N'hésitez pas à me laisser un message.
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
                        <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
                            {/* Les champs du formulaire restent les mêmes... */}
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
                            <div>
                                <button type="submit" disabled={loading} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed">
                                    {loading ? 'Envoi en cours...' : 'Envoyer le message'}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
};

export default ContactForm;