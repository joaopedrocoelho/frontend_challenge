import type { NextPage } from "next";
import { useRouter } from "next/router";

import { useContext, useEffect, useState } from "react";

import dataContext from "../../context/dataContext";
import { DataObject, Result } from "../../context/datatype";

import Layout from "../../components/Layout";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import UserModal from "../../components/UserModal/UserModal";

const User: NextPage = () => {
  const { data, setData, isLoading, setLoading } = useContext(dataContext);
  const [userIndex, setUserIndex] = useState(-1);
  const { pathname, asPath, query } = useRouter();

  useEffect(() => {
    console.log('query', query)
  }, [query]);

  useEffect(() => {}, [data, query]);

  return (
    <>
      <Layout />
      {query.user && <UserModal
      gender={query.gender as string}
      fullName={query.user as string}
      email={query.email as string}
      birthday={query.dob as string}
      phone={query.phone as string}
      nationality={query.nat as string}
      address={query.address as string}
      id={query.id as string}
      picture={query.picture as string}


      /> }
    </>
  );
};

export default User;
