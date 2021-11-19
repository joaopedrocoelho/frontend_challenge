import React, { useEffect, useContext, useState } from "react";
import Link from "next/link";
import { titleCase } from "title-case";
import dataContext from "../../context/dataContext";
import { useRouter } from "next/router";
import { Result } from "../../context/datatype";
import  dayjs from 'dayjs';

interface Props {
  pageIndex?: number;
}

const Table = ({ pageIndex }: Props): JSX.Element => {
  const { data, setData, isLoading, setLoading } = useContext(dataContext);
  //const [pageIndex, setPageIndex] = useState(0)
  const [renderTable, setRenderTable] = useState<JSX.Element[]>([]);
  const { pathname, asPath, query } = useRouter();

  useEffect(() => {
    console.log(data, query);
    //if(query.page) setPageNumber(Number(query.page))
  }, [data, query]);

  return (
    <table
      className={`relative border-3  rounded border-green-900 mt-8 w-full`}
    >
      <thead>
        <tr>
          <th
            className={`border-2 border-green-900 p-2 bg-green-200 text-opacity-80 text-black`}
          >
            Name
          </th>
          <th
            className={`border-2 border-green-900 p-2 bg-green-200 text-opacity-80 text-black`}
          >
            Gender
          </th>
          <th
            className={`border-2 border-green-900 p-2 bg-green-200 text-opacity-80 text-black`}
          >
            Birth
          </th>
          <th
            className={`border-2 border-green-900 p-2 bg-green-200 text-opacity-80 text-black`}
          >
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {
          data.length > 0 &&
          data.map((user: Result, index: number) => {
            const dob = dayjs(user.dob.date);
            const image = user.picture.large.match(/\d/g)?.join('');

            return (
              <tr key={`${user.name.first}-${user.name.last}`}>
                <td className={`border-2 border-green-900 text-center p-2`}>
                  {`${user.name.first} ${user.name.last}`}
                </td>
                <td className={`border-2 border-green-900 text-center p-2`}>
                  {titleCase(user.gender)}
                </td>
                <td className={`border-2 border-green-900 text-center p-2`}>
                  {dob.format('DD/MM/YYYY')}
                </td>
                <td className={`border-2 border-green-900 text-center p-2`}>
                   <Link 
                    href={{
                      pathname:`/user/${user.name.first}-${user.name.last}`,
                    query:{
                      picture: image,
                      gender: user.gender,
                      email:user.email,
                      dob: dob.format('DD/MM/YYYY'),
                      phone: user.phone,
                      nat: user.nat,
                      address: `${titleCase(user.location.street.name)}, ${user.location.street.number}, ${titleCase(user.location.city)}, ${user.location.state}, ${user.location.country}`,
                      id:`${user.id.name}-${user.id.value}`
                    }}}
                  >
                    <span className={`text-black text-opacity-75 p-1 bg-green-200 rounded-sm cursor-pointer`}
                    >View</span>
                  </Link> 
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Table;
