import type { User, Product } from '../types/index';

/**
 * Type Guard to check if an object is a User
 */
export function isUser(obj: any): obj is User {
    return (
        obj !== null &&
        typeof obj === 'object' &&
        'name' in obj &&
        'email' in obj &&
        'roles' in obj
    );
}

/**
 * Type Guard to check if an object is a Product
 */
export function isProduct(obj: any): obj is Product {
    return (
        obj !== null &&
        typeof obj === 'object' &&
        'price' in obj &&
        'inStock' in obj
    );
}

/**
 * Enhanced Error Handling with TypeScript
 */
export class ProcessingError extends Error {
    statusCode: number;
    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
        this.name = 'ProcessingError';
    }
}
