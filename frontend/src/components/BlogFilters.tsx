'use client';

import React, { useState, useEffect, useRef } from 'react';
import { getAllTags } from '@/data/posts';
import { Search, ChevronDown } from 'lucide-react';

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
    const [tags, setTags] = useState<{name: string}[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tagStrings = getAllTags();
        const tagObjects = tagStrings.map(name => ({ name }));
        setTags(tagObjects);
    }, []);

    useEffect(() => {
        const handler = setTimeout(() => {
            onSearchChange(searchQuery);
        }, 500); // 500ms debounce delay

        return () => {
            clearTimeout(handler);
        };
    }, [searchQuery, onSearchChange]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const baseClasses =
        'px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200';
    const activeClasses = 'bg-primary-600 text-white shadow-md';
    const inactiveClasses =
        'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700';

    const handleTagSelect = (tagName: string | null) => {
        onSelectTag(tagName);
        setIsDropdownOpen(false);
    };

    const selectedTagName =
        tags.find(t => t.name === selectedTag)?.name || 'Catégories';

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
                    onClick={() => handleTagSelect(null)}
                    className={`${baseClasses} ${
                        !selectedTag ? activeClasses : inactiveClasses
                    }`}
                >
                    Tous les articles
                </button>

                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`${baseClasses} ${
                            selectedTag ? activeClasses : inactiveClasses
                        } flex items-center gap-2`}
                    >
                        {selectedTagName}
                        <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${
                                isDropdownOpen ? 'rotate-180' : ''
                            }`}
                        />
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div
                                className="py-1"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="options-menu"
                            >
                                {tags.map(tag => (
                                    <button
                                        key={tag.name}
                                        onClick={() => handleTagSelect(tag.name)}
                                        className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                                        role="menuitem"
                                    >
                                        {tag.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogFilters;
