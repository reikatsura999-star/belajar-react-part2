import { useState, useContext, createContext } from "react";
import { ReactNode } from "react";

type User = {
    id: number
    name: string,
    email: string
}

type UserContexttype = {
    user: User | null,
    login: (email : string, password: string) => boolean,
    logout: () => void
};

export const UserContext = createContext<UserContexttype | null>(null);

export function UserProvider ({children} :{children: ReactNode}){
    const [user, setUser] = useState<User | null>(null);

    const login = (email: string, password: string) => {

        if(email === "admin@gmail.com" && password === '123'){
          setUser({ id: 1, name: 'admin', email})
          return true;
        }
         return false;
        }

    const logout = () => setUser(null);
    
    return (
        <UserContext.Provider value={{user,login,logout}}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser ( ) {
    const context = useContext(UserContext);
    if(!context) throw new Error("useUser harus di pakai di dalam  UserProvider");
    return context;
}


