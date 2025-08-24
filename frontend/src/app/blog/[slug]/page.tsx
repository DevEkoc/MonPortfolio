import { getPostBySlug } from '@/lib/blogApi';
import { notFound } from 'next/navigation';
import Container from '@/components/Container';
import Layout from '@/components/Layout';
import { FiCalendar, FiTag } from 'react-icons/fi';
import type { Metadata } from 'next';

type BlogPostPageProps = {
    params: { slug: string };
};

// Generate metadata for SEO
export async function generateMetadata({
    params,
}: BlogPostPageProps): Promise<Metadata> {
    try {
        const resolvedParams = await params;
        const post = await getPostBySlug(resolvedParams.slug);
        return {
            title: `${post.title} | Blog`,
            description: post.excerpt,
            openGraph: {
                title: post.title,
                description: post.excerpt || '',
                type: 'article',
                publishedTime: post.published_at || undefined,
                tags: post.tags,
            },
        };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_error) {
        return {
            title: 'Article non trouvé',
            description: "Cet article de blog n'existe pas ou a été déplacé.",
        };
    }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    let post;
    try {
        const resolvedParams = await params;
        post = await getPostBySlug(resolvedParams.slug);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_error) {
        notFound();
    }

    const publishedDate = post.published_at
        ? new Date(post.published_at).toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
          })
        : 'Non publié';

    return (
        <Layout>
            <div className="py-20 lg:py-28">
                <Container>
                    <article>
                        <header className="text-center mb-12">
                            <h1 className="text-4xl lg:text-6xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                                {post.title}
                            </h1>
                            <div className="flex justify-center items-center space-x-4 text-gray-500 dark:text-gray-400">
                                <div className="flex items-center">
                                    <FiCalendar className="mr-2" />
                                    <span>{publishedDate}</span>
                                </div>
                                {post.tags.length > 0 && (
                                    <div className="flex items-center flex-wrap gap-2">
                                        <FiTag className="mr-1.5" />
                                        {post.tags.join(', ')}
                                    </div>
                                )}
                            </div>
                        </header>

                        {post.excerpt && (
                            <p className="text-xl lg:text-2xl text-center italic text-gray-600 dark:text-gray-300 mb-12">
                                {post.excerpt}
                            </p>
                        )}

                        <div
                            className="prose dark:prose-invert lg:prose-xl max-w-4xl mx-auto"
                            dangerouslySetInnerHTML={{
                                __html: post.content.replace(/\n/g, '<br />'),
                            }}
                        ></div>
                    </article>
                </Container>
            </div>
        </Layout>
    );
}
