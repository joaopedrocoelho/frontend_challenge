import { createContext } from "react";

interface SearchContext {
    input: string;
    setInput: (input: string) => void;
}

const searchContext = createContext<SearchContext>({
    input: "",
    setInput: (input: string) => {},
});

export default searchContext;