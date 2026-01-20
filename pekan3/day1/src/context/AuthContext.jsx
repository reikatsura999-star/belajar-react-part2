import { useState, createContext, useContext } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (dataUser) => {
        setUser(dataUser);
    }

    const logout = () => {
        setUser(null)
    }

    const value = {
        user,
        login,
        isAuthenticated: !!user,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {

    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth di pakai dalam AuthProvider");

    }
    return context;
}

