import { MetadataRoute } from 'next';

// TODO: Importer les fonctions de l'API (ex: getPosts) quand leur emplacement sera connu.

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://www.devekoc.com';

    // --- Routes Statiques ---
    const staticRoutes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/experience-education`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
    ];

    // --- Routes Dynamiques (Blog Posts) ---
    // Décommentez et adaptez ce bloc une fois que getPosts() est disponible
    /*
    try {
        const posts = await getPosts({ limit: 1000 }); // Assurez-vous que votre API peut retourner tous les posts
        const postUrls = posts.results.map(post => ({
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: new Date(post.updated_at),
            changeFrequency: 'yearly',
            priority: 0.7,
        }));
        return [...staticRoutes, ...postUrls];
    } catch (error) {
        console.error("Impossible de générer les routes dynamiques pour le sitemap:", error);
        return staticRoutes;
    }
    */

    return staticRoutes;
}
