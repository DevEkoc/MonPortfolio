import React from 'react';
import { motion } from 'framer-motion';
import { TimelineItem as TimelineItemType } from '@/types/timeline';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

interface TimelineItemProps {
    item: TimelineItemType;
    align?: 'left' | 'right'; // Pour alternance desktop
}

const iconMap = {
    experience: (
        <FaBriefcase className="text-primary-600 dark:text-primary-400" />
    ),
    education: (
        <FaGraduationCap className="text-primary-600 dark:text-primary-400" />
    ),
};

const TimelineItem: React.FC<TimelineItemProps> = ({
    item,
    align = 'left',
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`relative flex flex-col md:flex-row md:items-center ${align === 'right' ? 'md:flex-row-reverse' : ''}`}
        >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent-100 dark:bg-accent-900/50 mb-4 md:mb-0 md:mx-6">
                {iconMap[item.type]}
            </div>
            <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <h3 className="text-lg font-bold text-primary-600 dark:text-primary-400 mb-1">
                    {item.title}
                </h3>
                <div className="text-sm text-gray-500 dark:text-gray-300 mb-2">
                    {item.org} &mdash; {item.dateRange}
                </div>
                <p className="text-gray-700 dark:text-gray-200 text-base">
                    {item.description}
                </p>
            </div>
        </motion.div>
    );
};

export default TimelineItem;
