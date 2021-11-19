import { createContext } from "react";
import { DataObject, Result } from "./datatype";

interface dataIntCont {
  data: Result[];
  isLoading: boolean;
  setData: (data: Result[]) => void;
  setLoading: (val: boolean) => void;
}
const dataContext = createContext<dataIntCont>(
    { 
     data: [], isLoading: true,
     setData: (data) => {},
     setLoading: (val) => {}
    });

export default dataContext;
