import { MetadataRoute } from 'next';
import { getPublishedPosts } from '@/data/posts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://www.devekoc.com';

    // --- Routes Statiques ---
    const staticRoutes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/experience-education`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.5,
        },
    ];

    // --- Routes Dynamiques (Blog Posts) ---
    try {
        // Récupération des posts depuis les données statiques
        const posts = getPublishedPosts();
        const postUrls = posts.map(post => ({
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: new Date(post.updatedAt),
            changeFrequency: 'yearly' as const,
            priority: 0.7,
        }));

        return [...staticRoutes, ...postUrls];
    } catch (error) {
        console.error(
            'Erreur lors de la génération des routes du blog pour le sitemap:',
            error
        );
        // En cas d'erreur, on retourne au moins les routes statiques
        return staticRoutes;
    }
}
