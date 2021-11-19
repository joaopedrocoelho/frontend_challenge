import 'tailwindcss/tailwind.css'
import { useEffect, useState } from 'react';
import dataContext from '../context/dataContext';
import { DataObject } from "../context/datatype";
import { useRouter } from "next/router";
import useFetch from "../hooks/useFetch";

import type { AppProps } from 'next/app'
import { useData } from '../hooks/useData';
import pageContext from '../context/pageNumber';

function MyApp({ Component, pageProps }: AppProps) {
  const dataHook = useData();
  const [pagesLoaded, nextPage] = useState(1)


  return(
    <pageContext.Provider value={{pagesLoaded,nextPage}}>
    <dataContext.Provider value={dataHook}>
      <Component {...pageProps} />
    </dataContext.Provider>
    </pageContext.Provider>
  ) 
}

export default MyApp
