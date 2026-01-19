import { createContext,useContext, useReducer } from "react";
import { themeReducer } from "../reducers/themeReducer";

export const ThemeContext = createContext();

export function ThemeProvider({children}){
    const [theme, dispatch] = useReducer(themeReducer,'light')

    const ToggleTheme = () => {
        dispatch({type: "CHANGE_THEME"})
    }
    return(
        <ThemeContext.Provider value={{theme,ToggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

