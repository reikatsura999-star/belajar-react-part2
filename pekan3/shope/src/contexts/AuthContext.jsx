import { createContext, useState } from 'react'

 
 const AuthContext = createContext()


export function  AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    // Fungsi login (simulasi)
    const login = (username) => {
        setUser({ username })
        setIsLoggedIn(true)
    }

    // Fungsi logout
    const logout = () => {
        const isConfirm =  confirm('Anda yakin ingin logout?')
        if (!isConfirm) return

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

export default AuthContext;



