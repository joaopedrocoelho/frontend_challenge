import React, { useState, useEffect, useContext, useCallback } from "react";
import LoadingIcon from "./loading.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import useFetch from "../../hooks/useFetch";
import dataContext from "../../context/dataContext";
import pageContext from "../../context/pageNumber";

const LoadMore = () => {
  const { pathname, asPath, query } = useRouter();
  const { data, setData, isLoading, setLoading } = useContext(dataContext);
  const [ pagesLoaded, setPagesLoaded ] = useState(1) ;

  const fetchData = (page:number) => {
    setLoading(true);
    useFetch(page).then((res) => {
      console.log('data', data)
      console.log('test',[...data,...res.results])
      setData([...data, ...res.results]);
      console.log("res", res);
      setLoading(false);
    });
  }
  

  return (
    
      <button onClick={() => {
          setPagesLoaded(pagesLoaded+1)
          fetchData(pagesLoaded+1);
      }}
        className={`mt-6  rounded-lg flex flex-row flex-nowrap 
        place-items-center p-4 bg-green-100 w-max
        cursor-pointer`}
      >
        <LoadingIcon className={`w-8 ${isLoading && `animate-spin`}`} />
        <span className={`pl-2`}>{isLoading ? 'Loading': 'Load More'}</span>
      </button>
   
  );
};

export default LoadMore;
