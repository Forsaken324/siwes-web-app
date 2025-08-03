import { useContext } from "react";
import { themeContext } from "../contexts/ThemeContext";

export const useTheme = () => {
    const context = useContext(themeContext);
    if(!context)
    {
        throw new Error('Theme context must be used within its provider');
    }
    return context;
}
