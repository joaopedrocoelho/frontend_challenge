import 'tailwindcss/tailwind.css'

import '../styles/animations.css';
import '../styles/checkbox.css';

import {  useState } from 'react';
import dataContext from '../context/dataContext';


import type { AppProps } from 'next/app'
import { useData } from '../hooks/useData';
import pageContext from '../context/pageNumber';

import useSearch from '../hooks/useSearch';
import searchContext from '../context/searchContext';
import ThemeContext from '../context/themeContext';
import { useTheme } from '../hooks/useTheme';

function MyApp({ Component, pageProps }: AppProps) {
  const dataHook = useData();
  const searchHook = useSearch();
  const colorTheme = useTheme();
  const [pagesLoaded, nextPage] = useState(1)


  return(
    <ThemeContext.Provider value={colorTheme}>
    <pageContext.Provider value={{pagesLoaded,nextPage}}>
    <dataContext.Provider value={dataHook}>
    <searchContext.Provider value={searchHook}>
      <Component {...pageProps} />
      </searchContext.Provider>
    </dataContext.Provider>
    </pageContext.Provider>
    </ThemeContext.Provider>
  ) 
}

export default MyApp
