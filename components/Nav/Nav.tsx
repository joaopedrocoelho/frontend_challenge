import React, {useContext} from "react";
import Pill from "./pill.svg";
import User from "./user.svg";
import Link from "next/link";

import ThemeContext from "../../context/themeContext";

const Nav = () => {
  const {color} = useContext(ThemeContext);
  return (
    <div
      className={`flex flex-row items-center justify-between w-full p-2 px-5
           bg-${color}-400 h-14`}
    >
      <Link href="/">
        <div className={`flex flex-row items-center opacity-80 gap-x-2 cursor-pointer`}>
          <Pill className={`w-7 h-7 fill-current `} />
          <span className={` font-black text-2xl text-`}>Pharma Inc</span>
        </div>
      </Link>
      <div className={`opacity-80 p-2 rounded-full bg-${color}-200`}>
        <User className={`w-6 h-6`} />
      </div>
    </div>
  );
};

export default Nav;
