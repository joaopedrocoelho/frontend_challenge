import "tailwindcss/tailwind.css";

import "../styles/animations.css";


import dataContext from "../context/dataContext";

import type { AppProps } from "next/app";
import { useData } from "../hooks/useData";


import useSearch from "../hooks/useSearch";
import searchContext from "../context/searchContext";
import ThemeContext from "../context/themeContext";
import { useTheme } from "../hooks/useTheme";
import errorContext from "../context/errorContext";
import useError from "../hooks/useError";

function MyApp({ Component, pageProps }: AppProps) {
  const dataHook = useData();
  const searchHook = useSearch();
  const errorHook = useError();
  const colorTheme = useTheme();

  return (
    <ThemeContext.Provider value={colorTheme}>
      <dataContext.Provider value={dataHook}>
        <errorContext.Provider value={errorHook}>
          <searchContext.Provider value={searchHook}>
            <Component {...pageProps} />
          </searchContext.Provider>
        </errorContext.Provider>
      </dataContext.Provider>
    </ThemeContext.Provider>
  );
}

export default MyApp;
