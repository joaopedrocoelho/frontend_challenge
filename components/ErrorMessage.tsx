import React, {useContext} from 'react'
import ThemeContext from '../context/themeContext';


const ErrorMessage = ({error}:{error:string}) => {
    const {color} = useContext(ThemeContext);

    return (
        <div className={`rounded-xl p-4 bg-${color}-200 flex flex-row gap-x-3`}>
            <div className={`h-full text-6xl`}>⚠</div>
        <div>
        <p className={`font-bold mb-2`}>Sorry, the data could not be loaded 😞</p>
        <p>{error}</p>
        </div>
      </div>
    )
}

export default ErrorMessage
