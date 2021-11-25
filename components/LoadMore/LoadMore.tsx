import React, { useState, useContext } from "react";
import LoadingIcon from "./loading.svg";

import { useRouter } from "next/router";
import FetchData from "../../hooks/FetchData";
import dataContext from "../../context/dataContext";
import ThemeContext from "../../context/themeContext";
import errorContext from "../../context/errorContext";
import { Result } from "../../context/datatype";

const LoadMore = (): JSX.Element => {
  const { color } = useContext(ThemeContext);
  const { pathname, asPath, query } = useRouter();
  const { data, setData, isLoading, setLoading } = useContext(dataContext);
  const [pagesLoaded, setPagesLoaded] = useState(1);
  const { error, setError } = useContext(errorContext);

  return (
    <button
      onClick={() => {
        if (error != "" && pagesLoaded == 1) {
          location.reload();
        } else {
          setPagesLoaded(pagesLoaded + 1);
          setLoading(true);
          FetchData(pagesLoaded + 1).then((res) => {
            if (!res.results) {
              setError(res);
              setLoading(false);
            } else {
              const sorted = res.results.sort((a: Result, b: Result) =>
                a.name.first.localeCompare(b.name.first)
              );
              setData([...data, ...sorted]);
              setLoading(false);
            }
          });
        }
      }}
      className={`my-6  rounded-lg flex flex-row flex-nowrap 
        place-items-center p-4 bg-${color}-100 w-max
        cursor-pointer
        hover:bg-${color}-300`}
    >
      <LoadingIcon className={`w-8 ${isLoading && `animate-spin`}`} />
      <span className={`pl-2`}>
        {isLoading ? "Loading" : 
        error != "" ? "Try again" : "Load more"}
      </span>
    </button>
  );
};

export default LoadMore;
