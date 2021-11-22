import 'tailwindcss/tailwind.css'
import { useEffect, useState } from 'react';
import dataContext from '../context/dataContext';
import { DataObject } from "../context/datatype";
import { useRouter } from "next/router";
import FetchData from "../hooks/FetchData";

import type { AppProps } from 'next/app'
import { useData } from '../hooks/useData';
import pageContext from '../context/pageNumber';
import '../styles/animations.css';
import useSearch from '../hooks/useSearch';
import searchContext from '../context/searchContext';

function MyApp({ Component, pageProps }: AppProps) {
  const dataHook = useData();
  const searchHook = useSearch();
  const [pagesLoaded, nextPage] = useState(1)


  return(
    <pageContext.Provider value={{pagesLoaded,nextPage}}>
    <dataContext.Provider value={dataHook}>
    <searchContext.Provider value={searchHook}>
      <Component {...pageProps} />
      </searchContext.Provider>
    </dataContext.Provider>
    </pageContext.Provider>
  ) 
}

export default MyApp
