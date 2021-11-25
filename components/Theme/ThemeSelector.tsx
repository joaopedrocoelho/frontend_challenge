import React, {useContext} from 'react'
import ThemeContext, { Colors } from '../../context/themeContext';

const colors:Colors[] = ['gray','red','yellow','green','blue','indigo','purple','pink']

const ThemeSelector = () => {
    const {color , setColor} = useContext(ThemeContext);

    return (
        <div className={`w-full flex flex-row flex-wrap justify-start items-center h-min gap-x-4 mt-4`}>
            <h2 className={`font-bold dark:text-gray-50 my-2`}>Theme:</h2>
            <div className={`flex flex-row  h-min gap-2 w-full items-center`}>
                {colors.map((themeColor:Colors) => {
                    return(
                        <button 
                        key={themeColor}
                        onClick={() => setColor(themeColor)}
                        className={`h-8 w-full bg-${themeColor}-400 
                        rounded-xl hover:opacity-50 border-4
                        ${color === themeColor ? `border-${themeColor}-900 dark:border-white` : `border-transparent`}`}>

                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default ThemeSelector
