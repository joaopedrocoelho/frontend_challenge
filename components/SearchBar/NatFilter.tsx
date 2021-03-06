import React, { useState, useEffect, useContext } from "react";
import searchContext, { Nationalities } from "../../context/searchContext";
import Dropdown from "./dropdown.svg";
import ThemeContext from "../../context/themeContext";

const nationalities: Nationalities[] = [
  "Any",
  "AU",
  "BR",
  "CA",
  "CH",
  "DE",
  "DK",
  "ES",
  "FI",
  "FR",
  "GB",
  "IE",
  "IR",
  "NO",
  "NL",
  "NZ",
  "TR",
  "US",
];

const NatFilter = () => {
    const {color} = useContext(ThemeContext);
  const [selected, setSelected] = useState<Nationalities>("Any");
  const [open, setOpen] = useState(false);

 
  const { setNationality } = useContext(searchContext);

  

  useEffect(() => {
      setNationality(selected);
  }, [selected])

  return (
    <div className={`flex flex-row justify-end`}>
      <div className={`rounded-md bg-${color}-200 p-3 flex flex-row gap-x-2`}>
        <h4 className={`font-bold`}>Nationality:</h4>

        <h5 className={`text-semibold w-6`}> {selected}</h5>
        <Dropdown
          onClick={() => {
            setOpen(!open);
          }}
          className={`w-6 h-6 rounded-full p-1 bg-${color}-900 
         text-white fill-current
         transition-transform duration-300
         ${open ? `transform rotate-180` : ``}`}
        />
      </div>
      <ul
        className={`absolute 
      flex-col z-50 mt-11
      
      flex ${open ? 'dropDown' : `opacity-0 pointer-events-none transform  duration-300 scale-y-0 ease-out origin-top `}
      bg-${color}-100 rounded-md shadow-lg
      w-20
      `}
      >
        {nationalities.map((nat,index) => {
          return (
            <li
              key={`${nat}-${index}`}
              onClick={() => {
                setSelected(nat);
                setOpen(false);
              }}
              className={`flex flex-row flex-nowrap w-full 
              justify-center items-center  border-${color}-300 
              ${index < nationalities.length -1 && `border-b`} hover:bg-${color}-600 
              hover:text-white cursor-pointer`}
            >
              {nat}
            </li>
          );
        })}

       
      </ul>
    </div>
  );
};

export default NatFilter;
