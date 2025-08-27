'use client';

import { useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark';

export function useTheme() {
    // Initialiser à undefined pour éviter le rendu côté serveur avec un thème par défaut
    const [theme, setTheme] = useState<Theme | undefined>(undefined);
    const [mounted, setMounted] = useState(false);

    const toggleTheme = useCallback(() => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    }, []);

    useEffect(() => {
        setMounted(true);

        // Logique pour déterminer le thème initial côté client uniquement
        const savedTheme = localStorage.getItem('theme') as Theme | null;
        const systemPrefersDark = window.matchMedia(
            '(prefers-color-scheme: dark)',
        ).matches;

        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            setTheme(systemPrefersDark ? 'dark' : 'light');
        }
    }, []);

    useEffect(() => {
        // Appliquer le thème uniquement si le thème est défini et le composant est monté
        if (theme && mounted) {
            document.documentElement.classList.toggle('dark', theme === 'dark');
            localStorage.setItem('theme', theme);
        }
    }, [theme, mounted]);

    return {
        theme,
        toggleTheme,
        mounted,
    };
}
