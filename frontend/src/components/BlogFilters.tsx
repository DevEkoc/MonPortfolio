'use client';

import React, { useState, useEffect } from 'react';
import { getBlogTags } from '@/lib/blogApi';
import { Tag } from '@/types/blog';

interface BlogFiltersProps {
  selectedTag: string | null;
  onSelectTag: (tag: string | null) => void;
}

const BlogFilters: React.FC<BlogFiltersProps> = ({ selectedTag, onSelectTag }) => {
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const fetchedTags = await getBlogTags();
        setTags(fetchedTags);
      } catch (error) {
        console.error("Failed to fetch blog tags", error);
      }
    };
    fetchTags();
  }, []);

  const baseClasses = 'px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200';
  const activeClasses = 'bg-primary-600 text-white shadow-md';
  const inactiveClasses = 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700';

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
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
  );
};

export default BlogFilters;
