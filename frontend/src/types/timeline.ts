export type TimelineType = 'experience' | 'education';

export interface TimelineItem {
    title: string;
    org: string;
    dateRange: string;
    description: string;
    type: TimelineType;
}
