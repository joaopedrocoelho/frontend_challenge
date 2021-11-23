import React, { useEffect, useContext, useState } from "react";
import Link from "next/link";
import { titleCase } from "title-case";
import dataContext from "../../context/dataContext";
import ThemeContext from "../../context/themeContext";
import { Result } from "../../context/datatype";
import dayjs from "dayjs";
import searchContext from "../../context/searchContext";


interface Props {
  pageIndex?: number;
}

const Table = ({ pageIndex }: Props): JSX.Element => {
  const {color} = useContext(ThemeContext);
  const { data, setData, isLoading, setLoading } = useContext(dataContext);
  const [nameFilter, setNameFilter] = useState<string>("initialState");
  //const [filteredData, setfilteredData] = useState(data);
  const { input, maleOnly, femaleOnly, nationality } = useContext(searchContext);

  useEffect(() => {
    setNameFilter(input);
  }, [input,maleOnly,femaleOnly,nationality]);

 
  return (
    <table
      className={`relative border-3  rounded border-${color}-900 mt-8 w-full fadeIn`}
    >
      <thead>
        <tr>
          <th
            className={`border-2 border-${color}-900 p-2 bg-${color}-200 text-opacity-80 text-black`}
          >
            Name
          </th>
          <th
            className={`border-2 border-${color}-900 p-2 bg-${color}-200 text-opacity-80 text-black`}
          >
            Gender
          </th>
          <th
            className={`border-2 border-${color}-900 p-2 bg-${color}-200 text-opacity-80 text-black`}
          >
            Birth
          </th>
          <th
            className={`border-2 border-${color}-900 p-2 bg-${color}-200 text-opacity-80 text-black`}
          >
            Actions
          </th>
        </tr>
      </thead>

      <tbody className={`dark:text-gray-50`}>
        {data.length > 0 &&
          data.map((user: Result, index: number) => {
            const dob = dayjs(user.dob.date);
            const image = user.picture.large.match(/\d/g)?.join("");
            if(maleOnly && !femaleOnly && user.gender === 'female') return;
            if(femaleOnly && !maleOnly && user.gender === 'male') return;
            if(nationality != 'Any' && user.nat != nationality) return;

            if (
              nameFilter === "" ||
              (nameFilter.length > 0 &&
                user.name.first
                  .toLowerCase()
                  .includes(nameFilter.toLowerCase())) ||
              user.name.last.toLowerCase().includes(nameFilter.toLowerCase())
            ) {
              return (
                <tr
                  key={`${user.name.first}-${user.name.last}`}
                  className={`fadeIn delay-200`}
                >
                  <td className={`border-2 border-${color}-900 text-center p-2`}>
                    {`${user.name.first} ${user.name.last}`}
                  </td>
                  <td className={`border-2 border-${color}-900 text-center p-2`}>
                    {titleCase(user.gender)}
                  </td>
                  <td className={`border-2 border-${color}-900 text-center p-2`}>
                    {dob.format("DD/MM/YYYY")}
                  </td>
                  <td className={`border-2 border-${color}-900 text-center p-2`}>
                    <Link
                      href={{
                        pathname: `/user/${user.name.first}-${user.name.last}`,
                        query: {
                          picture: image,
                          gender: user.gender,
                          email: user.email,
                          dob: dob.format("DD/MM/YYYY"),
                          phone: user.phone,
                          nat: user.nat,
                          address: `${titleCase(user.location.street.name)}, ${
                            user.location.street.number
                          }, ${titleCase(user.location.city)}, ${
                            user.location.state
                          }, ${user.location.country}`,
                          id: `${user.id.name}-${user.id.value}`,
                        },
                      }}
                    >
                      <span
                        className={`text-black text-opacity-75 p-1 bg-${color}-200 rounded-sm cursor-pointer hover:bg-${color}-400`}
                      >
                        View
                      </span>
                    </Link>
                  </td>
                </tr>
              );
            }
          })}
      </tbody>
    </table>
  );
};

export default Table;
