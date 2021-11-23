import React, { useState , useEffect, useContext} from "react";
import searchContext from "../../context/searchContext";
import ThemeContext from "../../context/themeContext";
import Checkmark from "./checkmark.svg";

const GenderFilter = () => {
   const {color} = useContext(ThemeContext);

  const [maleFilter, setMaleFilter] = useState(false);
  const [femaleFilter, setFemaleFilter] = useState(false);
  const {setMaleOnly, setFemaleOnly} = useContext(searchContext);

useEffect(() => {
    setMaleOnly(maleFilter);
   
}, [maleFilter])

useEffect(() => {
    setFemaleOnly(femaleFilter);
   
}, [femaleFilter])

  return (
    <div
      className={`rounded-md bg-${color}-200 p-3 flex flex-row  flex-wrap `}
    >
      <h4 className={`font-bold mr-2`}>Gender:</h4>

      <input
        className={`hidden`}
        onClick={() => setMaleFilter(!maleFilter)}
        type="checkbox"
        id="male"
        name="male"
        value="male"
        
      />

    <label htmlFor="male" className={`flex flex-row flex-nowrap w-min`}> 
      <div
        className={`w-5 h-5  flex flex-col justify-center rounded-lg ${
          maleFilter ? `bg-${color}-900 text-white` : `bg-white`
        } border-${color}-900 border-2 my-1 mx-1`}
      >
        {maleFilter && (
          <Checkmark
            className={`block fill-current w-9/12 m-auto text-center `}
          />
        )}
        
      </div>
      Male</label>

      <input
        className={`hidden`}
        onClick={() => setFemaleFilter(!femaleFilter)}
        type="checkbox"
        id="female"
        name="female"
        value="female"
        
      />


<label htmlFor="female"  className={`flex flex-row flex-nowrap w-min`}>
      <div
        className={`w-5 h-5  flex flex-col justify-center rounded-lg ${
          femaleFilter ? `bg-${color}-900 text-white` : `bg-white`
        } border-${color}-900 border-2 my-1  ml-2 mr-1`}
      >
        {femaleFilter && (
          <Checkmark
            className={`block fill-current w-9/12 m-auto text-center `}
          />
        )}
        
      </div>
       Female</label>
     
    </div>
  );
};

export default GenderFilter;
