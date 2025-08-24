'use client';

import React, { useState, useEffect } from 'react';
import { getBlogTags } from '@/lib/blogApi';
import { Tag } from '@/types/blog';
import { Search } from 'lucide-react';

interface BlogFiltersProps {
    selectedTag: string | null;
    onSelectTag: (tag: string | null) => void;
    onSearchChange: (query: string) => void;
}

const BlogFilters: React.FC<BlogFiltersProps> = ({
    selectedTag,
    onSelectTag,
    onSearchChange,
}) => {
    const [tags, setTags] = useState<Tag[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchTags = async () => {
            try {
                const fetchedTags = await getBlogTags();
                setTags(fetchedTags);
            } catch (error) {
                console.error('Failed to fetch blog tags', error);
            }
        };
        fetchTags();
    }, []);

    useEffect(() => {
        const handler = setTimeout(() => {
            onSearchChange(searchQuery);
        }, 500); // 500ms debounce delay

        return () => {
            clearTimeout(handler);
        };
    }, [searchQuery, onSearchChange]);

    const baseClasses =
        'px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200';
    const activeClasses = 'bg-primary-600 text-white shadow-md';
    const inactiveClasses =
        'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700';

    return (
        <div className="mb-12">
            <div className="relative mb-6 max-w-lg mx-auto">
                <input
                    type="text"
                    placeholder="Rechercher des articles..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Search size={20} />
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
                <button
                    onClick={() => onSelectTag(null)}
                    className={`${baseClasses} ${!selectedTag ? activeClasses : inactiveClasses}`}
                >
                    Tous les articles
                </button>
                {tags.map(tag => (
                    <button
                        key={tag.id}
                        onClick={() => onSelectTag(tag.name)}
                        className={`${baseClasses} ${selectedTag === tag.name ? activeClasses : inactiveClasses}`}
                    >
                        {tag.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BlogFilters;
