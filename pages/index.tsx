import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

import dataContext from "../context/dataContext";
import { DataObject } from "../context/datatype";

import { useData } from "../hooks/useData";
import FetchData from "../hooks/FetchData";

import Layout from "../components/Layout";
import Loading from "../components/Loading";

const Home: NextPage = () => {
  const { data, setData, isLoading, setLoading } = useContext(dataContext);
  const [initialLoading, setInitialLoading] = useState(true)


  useEffect(() => {
    setLoading(true);
    FetchData(1).then((res) => {
      setData([...data, ...res.results]);
      
      console.log("res", res.results);
      console.log('data',data)
      setLoading(false);
    });

  },[]);

  return  <Layout />;
};

export default Home;
