import React, { useState,  useContext} from "react";
import LoadingIcon from "./loading.svg";

import { useRouter } from "next/router";
import FetchData from "../../hooks/FetchData";
import dataContext from "../../context/dataContext";
import ThemeContext from "../../context/themeContext";


const LoadMore = ():JSX.Element => {
  const {color} = useContext(ThemeContext);
  const { pathname, asPath, query } = useRouter();
  const { data, setData, isLoading, setLoading } = useContext(dataContext);
  const [pagesLoaded, setPagesLoaded] = useState(1);

  return (
    <button
      onClick={() => {
        setPagesLoaded(pagesLoaded + 1);
        setLoading(true);
        FetchData(pagesLoaded + 1).then((res) => {
          console.log("data", data);
          console.log("test", [...data, ...res.results]);
          setData([...data, ...res.results]);
          console.log("res", res);
          setLoading(false);
        });
      }}
      className={`my-6  rounded-lg flex flex-row flex-nowrap 
        place-items-center p-4 bg-${color}-100 w-max
        cursor-pointer
        hover:bg-${color}-300`}
    >
      <LoadingIcon className={`w-8 ${isLoading && `animate-spin`}`} />
      <span className={`pl-2`}>{isLoading ? "Loading" : "Load More"}</span>
    </button>
  );
};

export default LoadMore;
