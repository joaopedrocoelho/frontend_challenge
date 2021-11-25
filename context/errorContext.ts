import { useContext, createContext } from "react";

interface errorContextInt {
    error: string;
    setError: (error: string) => void;
}

const errorContext = createContext<errorContextInt>({
    error: "",
    setError: (error: string) => { }
});

export default errorContext;