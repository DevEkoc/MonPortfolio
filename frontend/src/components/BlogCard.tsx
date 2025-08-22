import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Post } from '@/types/blog';
import { FiCalendar, FiTag } from 'react-icons/fi';

interface BlogCardProps {
  post: Post;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const publishedDate = post.published_at ? new Date(post.published_at).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Non publié';

  return (
    <motion.div
      variants={cardVariants}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="p-6">
          <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">{post.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
            <FiCalendar className="mr-2" />
            <span>{publishedDate}</span>
          </div>
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="flex items-center bg-accent-100 dark:bg-accent-900/50 text-accent-800 dark:text-accent-200 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                  <FiTag className="mr-1.5" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
