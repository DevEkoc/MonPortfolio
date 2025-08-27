import axios from './axios';
import { Post, PagedPostsResponse, Tag } from '@/types/blog';

export interface GetPostsParams {
    page?: number;
    search?: string;
    tags__name?: string;
}

export const getPosts = async (
    params: GetPostsParams = {}
): Promise<PagedPostsResponse> => {
    const response = await axios.get<PagedPostsResponse>('/blog/', { params });
    return response.data;
};

export const getPostBySlug = async (slug: string): Promise<Post> => {
    const response = await axios.get<Post>(`/blog/${slug}/`);
    return response.data;
};

export const getBlogTags = async (): Promise<Tag[]> => {
    const response = await axios.get<Tag[]>('/blog/tags/');
    return response.data;
};
