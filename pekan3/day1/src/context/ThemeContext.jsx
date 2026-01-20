import { useContext,useState,createContext } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({children}){
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    const value = {
        theme,
        toggleTheme
    }

    return(
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(){
    const context = useContext(ThemeContext);

    if(!context){
        throw new Error("useTheme di pakai dalam ThemeProvider");
    }
    return context;
}

