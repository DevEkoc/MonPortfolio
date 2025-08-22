'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { getPosts } from '@/lib/blogApi';
import { Post } from '@/types/blog';
import BlogCard from './BlogCard';
import Container from './Container';
import BlogFilters from './BlogFilters';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const BlogSection: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);

  const fetchPosts = useCallback(async (page: number, tag: string | null) => {
    if (page === 1) setLoading(true);
    else setLoadingMore(true);

    setError(null);

    try {
      const params = { page, tags__name: tag || undefined };
      const response = await getPosts(params);
      
      setPosts(prevPosts => page === 1 ? response.results : [...prevPosts, ...response.results]);
      setHasNextPage(!!response.next);
    } catch (err) {
      setError('Impossible de charger les articles du blog.');
      console.error(err);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, []);

  useEffect(() => {
    setCurrentPage(1);
    fetchPosts(1, selectedTag);
  }, [selectedTag, fetchPosts]);

  const handleSelectTag = (tag: string | null) => {
    setSelectedTag(tag);
  };

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchPosts(nextPage, selectedTag);
  };

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Dernières Publications</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">Découvrez mes réflexions sur le développement, la technologie et plus encore.</p>
        </div>

        <BlogFilters selectedTag={selectedTag} onSelectTag={handleSelectTag} />

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 animate-pulse">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mb-4"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
              </div>
            ))}
          </div>
        )}

        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && posts.length === 0 && (
          <p className="text-center text-gray-500">Aucun article trouvé pour le moment.</p>
        )}

        {!loading && posts.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {posts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </motion.div>
        )}

        {hasNextPage && (
          <div className="text-center mt-12">
            <button
              onClick={handleLoadMore}
              disabled={loadingMore}
              className="bg-primary-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-700 transition-colors duration-300 disabled:bg-gray-400"
            >
              {loadingMore ? 'Chargement...' : 'Charger plus'}
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default BlogSection;
