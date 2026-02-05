import { useState, useEffect } from 'react';
import type { ApiResponse } from '../types/index';

/**
 * Custom hook with generic type T for async operations
 */
export function useAsync<T>(asyncFn: () => Promise<T>, dependencies: any[] = []) {
    const [state, setState] = useState<ApiResponse<T>>({
        data: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        let isMounted = true;
        setState(prev => ({ ...prev, loading: true }));

        asyncFn()
            .then((data) => {
                if (isMounted) setState({ data, loading: false, error: null });
            })
            .catch((err) => {
                if (isMounted) setState({ data: null, loading: false, error: err instanceof Error ? err.message : 'Unknown error' });
            });

        return () => {
            isMounted = false;
        };
    }, dependencies);

    return state;
}
