import { getPostBySlug } from '@/data/posts';
import { notFound } from 'next/navigation';
import Container from '@/components/Container';
import Layout from '@/components/Layout';
import { FiCalendar, FiTag } from 'react-icons/fi';
import type { Metadata } from 'next';

type BlogPostPageProps = {
    params: Promise<{ slug: string }>;
};

// Generate metadata for SEO
export async function generateMetadata({
    params,
}: BlogPostPageProps): Promise<Metadata> {
    try {
        const resolvedParams = await params;
        const post = getPostBySlug(resolvedParams.slug);

        if (!post) {
            return {
                title: 'Article non trouvé | Blog',
                description:
                    "Cet article n'existe pas ou n'est plus disponible.",
            };
        }

        return {
            title: `${post.title} | Blog`,
            description: post.excerpt,
            openGraph: {
                title: post.title,
                description: post.excerpt || '',
                type: 'article',
                publishedTime: post.publishedAt || undefined,
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
    const resolvedParams = await params;
    const post = getPostBySlug(resolvedParams.slug);

    if (!post) {
        notFound();
    }

    const publishedDate = post.publishedAt
        ? new Date(post.publishedAt).toLocaleString('fr-FR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              hour12: false,
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
                                    <FiCalendar className="mr-2 w-5 h-5 flex-shrink-0" />
                                    <span>{publishedDate}</span>
                                </div>
                                {post.tags.length > 0 && (
                                    <div className="flex items-center">
                                        <FiTag className="mr-1.5 w-5 h-5 flex-shrink-0" />
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
                                __html: post.content,
                            }}
                        ></div>
                    </article>
                </Container>
            </div>
        </Layout>
    );
}
