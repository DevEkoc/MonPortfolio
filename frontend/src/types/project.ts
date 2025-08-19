export interface Technology {
    id: number;
    name: string;
}

export interface Project {
    id: number;
    title: string;
    slug: string;
    summary: string;
    description: string;
    tech_stack: Technology[];
    image: string | null;
    demo_url: string;
    code_url: string;
    status: 'published' | 'draft';
    created_at: string;
    updated_at: string;
}
