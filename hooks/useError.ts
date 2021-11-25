import  { useState, useCallback} from 'react';

const useError = () => {
    const [error, setErrorMessage] = useState('')

    const setError = useCallback((error:string) => {
        setErrorMessage(error);
    },[])

    return {
        error,
        setError
}}


export default useError;