import { createContext, useContext, useState } from "react";

 export const LanguageContext = createContext();

export function LanguageProvider({children}){
    const [language, setLanguage] = useState('en');

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'id' : 'en')
    }

    const value = {
        language,
        toggleLanguage
    }

    return(
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage(){
    const context = useContext(LanguageContext);

    if(!context){
        throw new Error("useLanguage di pakai dalam LanguageProvider");
    }
    return context;
}