import { createContext,useCallback,useState } from "react";
import { SetStateAction, Dispatch} from 'react';


interface Context {
    pagesLoaded: number,
    nextPage:Dispatch<SetStateAction<number>>
}

 const pageContext = createContext<Context>({
    pagesLoaded: 1,
    nextPage:() => {}
})
export default pageContext