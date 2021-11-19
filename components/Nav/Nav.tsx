import React from "react";
import Pill from './pill.svg';
import User from './user.svg';

const Nav = () => {
  return (
    <div
      className={`flex flex-row items-center justify-between w-screen p-2 px-5
           bg-green-400 h-14`}
    > 
    <div className={`flex flex-row items-center opacity-80`}>
      <Pill
      className={`w-7 h-7 fill-current `}/>
      <span className={`ml-2 font-black text-2xl text-`}>Pharma Inc</span>
      </div>
      <div className={
          `opacity-80 p-2 rounded-full bg-green-200`
      }>
        <User
        className={`w-6 h-6`}/>
        
      </div>
    </div>
  );
};

export default Nav;
