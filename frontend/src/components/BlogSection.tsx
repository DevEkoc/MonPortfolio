'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { getPublishedPosts, getPostsByTag } from '@/data/posts';
import BlogCard from './BlogCard';
import Container from './Container';
import BlogFilters from './BlogFilters';
import {
    staggerContainer,
    fadeInUp,
    useInViewAnimation,
} from '@/lib/animations';

const BlogSection: React.FC = () => {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [displayLimit, setDisplayLimit] = useState(6);

    const animationControls = useInViewAnimation(false, 0.1);

    // Récupération des articles depuis les données statiques
    const posts = useMemo(() => {
        let filteredPosts = getPublishedPosts();

        // Filtrer par tag si sélectionné
        if (selectedTag) {
            filteredPosts = getPostsByTag(selectedTag);
        }

        // Filtrer par recherche textuelle
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filteredPosts = filteredPosts.filter(
                post =>
                    post.title.toLowerCase().includes(query) ||
                    post.excerpt.toLowerCase().includes(query) ||
                    post.tags.some(tag => tag.toLowerCase().includes(query))
            );
        }

        return filteredPosts;
    }, [selectedTag, searchQuery]);

    const handleSelectTag = (tag: string | null) => {
        setSelectedTag(tag);
        setDisplayLimit(6); // Reset display limit when filtering
    };

    const handleSearchChange = (query: string) => {
        setSearchQuery(query);
        setDisplayLimit(6); // Reset display limit when searching
    };

    const hasMorePosts = posts.length > displayLimit;
    const displayedPosts = posts.slice(0, displayLimit);

    return (
        <section id="blog" className="py-16 bg-gray-50 dark:bg-gray-900">
            <Container>
                <motion.div {...animationControls} variants={staggerContainer}>
                    <motion.div
                        variants={fadeInUp}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            Dernières Publications
                        </h2>
                        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                            Découvrez mes réflexions sur le développement, la
                            technologie et plus encore.
                        </p>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <BlogFilters
                            selectedTag={selectedTag}
                            onSelectTag={handleSelectTag}
                            onSearchChange={handleSearchChange}
                        />
                    </motion.div>

                    {posts.length === 0 && (
                        <p className="text-center text-gray-500 mt-8">
                            Aucun article trouvé pour le moment.
                        </p>
                    )}

                    {posts.length > 0 && (
                        <motion.div
                            variants={staggerContainer}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
                        >
                            {displayedPosts.map(post => (
                                <BlogCard key={post.id} post={post} />
                            ))}
                        </motion.div>
                    )}

                    {hasMorePosts && (
                        <motion.div
                            variants={fadeInUp}
                            className="text-center mt-12"
                        >
                            <button
                                onClick={() =>
                                    setDisplayLimit(prev => prev + 6)
                                }
                                className="bg-primary-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-700 transition-colors duration-300"
                            >
                                Charger plus
                            </button>
                        </motion.div>
                    )}
                </motion.div>
            </Container>
        </section>
    );
};

export default BlogSection;
