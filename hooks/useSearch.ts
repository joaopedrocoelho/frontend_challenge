import {useState, useCallback} from 'react';


const useSearch = () => {
    const [input, setTempInput] = useState<string>('')

    const setInput = useCallback((value:string) => {
        setTempInput(value);
        console.log('new value',value);

    }, [])

    return {
        input,
        setInput
    }

}

export default useSearch;