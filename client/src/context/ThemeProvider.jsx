import { createContext, useState, useCallback } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
    const [mode, setMode] = useState('light')

    return (<ThemeContext.Provider
    value = {{mode, setMode: useCallback((theme) => setMode(theme), [])}}
    >
        {children}
        </ThemeContext.Provider>
        )
}