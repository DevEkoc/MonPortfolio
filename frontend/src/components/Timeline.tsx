import React from 'react';
import TimelineItem from './TimelineItem';
import { TimelineItem as TimelineItemType } from '@/types/timeline';

interface TimelineProps {
    items: TimelineItemType[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
    return (
        <div className="relative border-l-2 border-accent-200 dark:border-accent-700 md:border-l-0 md:border-none">
            <div className="flex flex-col gap-12 md:gap-16">
                {items.map((item, idx) => (
                    <TimelineItem
                        key={idx}
                        item={item}
                        align={idx % 2 === 0 ? 'left' : 'right'}
                    />
                ))}
            </div>
        </div>
    );
};

export default Timeline;
