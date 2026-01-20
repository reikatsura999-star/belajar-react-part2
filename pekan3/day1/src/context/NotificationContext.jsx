import { createContext, useContext, useState } from "react";

export const NotificationContext = createContext();

export function NotificationProvider({ children }) {
    const [notification, setNotification] = useState(3)

    const addNotification = () => {
        setNotification(prev => prev + 1)
    }

    const clearNotification = () => {
        setNotification(0)
    }

    const value = {
        notification,
        addNotification,
        clearNotification,
    }

    return (
        <NotificationContext.Provider value={value}>
            {children}
        </NotificationContext.Provider>
    )
}


export function useNotification() {
    const context = useContext(NotificationContext);

    if (!context) {
        throw new Error("useNotification harus di dalam NotificationProvider");

    }

    return context;
}