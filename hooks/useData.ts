import { useState, useCallback } from "react";
import { DataObject, Result } from "../context/datatype";

export const useData = () => {
  const [data, setTempNewData] = useState<Result[]>([]);
  const [isLoading, setTempLoading] = useState<boolean>(true);

  const setData = useCallback((newData: Result[]) => {
      console.log('updating')
    setTempNewData(newData);
  }, []);

  const setLoading = useCallback(
    (val: boolean) => {
     setTempLoading(val)
    },
    [],
  )


  return {
    data,
    setData,
    isLoading,
    setLoading
  };
};
