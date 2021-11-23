import { createContext } from "react";

export type Colors =
    'gray'|
    'red' |
    'yellow' |
    'green' |
    'blue'  |
    'indigo' |
    'purple' |
    'pink'

    interface themeContext {
        color: Colors
        setColor: (color: Colors) => void
    }

    const ThemeContext = createContext<themeContext>({
        color: 'green',
        setColor: (color:Colors) => {}
    })


    export default ThemeContext;