import { createContext, useState, useContext } from 'react'

 
const AuthContext = createContext()


export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    // Fungsi login (simulasi)
    const login = (username) => {
        setUser({ username })
        setIsLoggedIn(true)
    }

    // Fungsi logout
    const logout = () => {
        setUser(null)
        setIsLoggedIn(false)
    }

    const value = {
        user,
        isLoggedIn,
        login,
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
        throw new Error('useAuth harus digunakan dalam AuthProvider')
    }
    return context
}
