// Types de base pour les réponses API
export interface ApiResponse<T = unknown> {
    data: T;
    message?: string;
    success: boolean;
}

export interface PaginatedResponse<T = unknown> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}

// Types d'erreur
export interface ApiError {
    message: string;
    code?: string;
    details?: Record<string, unknown>;
}

// Types pour les requêtes
export interface PaginationParams {
    page?: number;
    page_size?: number;
}

export interface SearchParams {
    search?: string;
    ordering?: string;
}

// Types combinés pour les requêtes avec pagination et recherche
export type RequestParams = PaginationParams &
    SearchParams &
    Record<string, string | number | boolean>;
