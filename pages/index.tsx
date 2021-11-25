import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

import dataContext from "../context/dataContext";
import { Result } from "../context/datatype";

import { useData } from "../hooks/useData";
import FetchData from "../hooks/FetchData";

import Layout from "../components/Layout";
import Loading from "../components/Loading";
import errorContext from "../context/errorContext";

const Home: NextPage = () => {
  const { data, setData, isLoading, setLoading } = useContext(dataContext);
  const { setError} = useContext(errorContext);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    FetchData(1).then((res) => {
      if(!res.results) 
      {
        setError(res); 
        setLoading(false);
      }
      else {
      const sorted = res.results.sort((a: Result, b: Result) =>
        a.name.first.localeCompare(b.name.first)
      );
      setData([...data, ...sorted]);
      setLoading(false);
    }
    })
  }, []);

  return <Layout />;
};

export default Home;
