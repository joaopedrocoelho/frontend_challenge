import {useState, useCallback} from 'react';
import { Nationalities } from '../context/searchContext';


const useSearch = () => {
    const [input, setTempInput] = useState<string>('')
    const [maleOnly,setTempMaleOnly] = useState(false)
    const [femaleOnly,setTempFemaleOnly] = useState(false)
    const [nationality, setTempNationality] = useState<Nationalities>('Any')

    const setInput = useCallback((value:string) => {
        setTempInput(value);
        console.log('new value',value);

    }, [])

    const setMaleOnly = useCallback((value:boolean) => {
        setTempMaleOnly(value);
    },[])

    const setFemaleOnly = useCallback((value:boolean) => {
        setTempFemaleOnly(value);
    },[])

    const setNationality = useCallback((value:Nationalities) => {
        setTempNationality(value);
    },[])

    return {
        input,
        setInput,
        maleOnly,
        femaleOnly,
        setMaleOnly,
        setFemaleOnly,
        nationality,
        setNationality
    }

}

export default useSearch;