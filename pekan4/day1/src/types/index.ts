export interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
    roles: string[];
}

export interface Product {
    id: string;
    name: string;
    price: number;
    tags: string[];
    inStock: boolean;
}

export interface ApiResponse<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}
