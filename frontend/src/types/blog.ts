import { PagedResponse } from './api';

export interface Tag {
    id: number;
    name: string;
    slug: string;
}

export interface Post {
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    content: string;
    tags: string[];
    published: boolean;
    published_at: string | null;
    created_at: string;
    updated_at: string;
}

export type PagedPostsResponse = PagedResponse<Post>;
