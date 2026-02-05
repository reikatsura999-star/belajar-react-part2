import React, { createContext, useContext, useState,type ReactNode } from 'react';
import type { User } from '../types/index';

interface AppContextType {
    currentUser: User | null;
    setCurrentUser: (user: User | null) => void;
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

    return (
        <AppContext.Provider value={{ currentUser, setCurrentUser, theme, toggleTheme }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
