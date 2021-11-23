import { useState, useCallback } from "react";
import { Colors } from "../context/themeContext";


export const useTheme = () => {
    const [color, setTheme] = useState<Colors>('green');

    const setColor = useCallback((color:Colors) => {
        setTheme(color);
    }, []);

    return {
        color,
        setColor
    }
}
