import api from './axios';
import { Project, Technology } from '@/types/project';

export interface PaginatedProjectsResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Project[];
}

export const getProjects = async (
    params: { [key: string]: unknown } = {}
): Promise<PaginatedProjectsResponse> => {
    try {
        const response = await api.get('projects/', { params });
        return response.data;
    } catch (error) {
        console.error('Failed to fetch projects:', error);
        return { count: 0, next: null, previous: null, results: [] };
    }
};

export const getTechnologies = async (): Promise<Technology[]> => {
    try {
        const response = await api.get('technologies/');
        return response.data;
    } catch (error) {
        console.error('Failed to fetch technologies:', error);
        return [];
    }
};
