import React, { useContext, useState } from "react";
import Image from "next/image";
import Female from "./icons/female.svg";
import Male from "./icons/male.svg";
import Email from "./icons/email.svg";
import Cake from "./icons/birthday.svg";
import Phone from "./icons/phone.svg";
import Adress from "./icons/address.svg";
import Hashtag from "./icons/hashtag.svg";
import Flag from "./icons/flag.svg";
import Share from "./icons/share.svg";
import Close from './icons/close.svg';
import User from '../Nav/user.svg';

import { titleCase } from "title-case";
import { Router, useRouter } from "next/router";
import ThemeContext from "../../context/themeContext";


interface Props {
  picture: string;
  fullName: string;
  gender: string;
  email: string;
  birthday: string;
  phone: string;
  nationality: string;
  address: string;
  id: string;
  
}

const UserModal = (props: Props): JSX.Element => {
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState(`⚠ Copied URL to clipboard!`)
    const {asPath, push} = useRouter()
    const  {color} = useContext(ThemeContext)

    const userURL = 'https://frontend-challenge-joaopedrocoelho.vercel.app'+asPath
    

  const imageSrc =
    props.gender === "male"
      ? `https://randomuser.me/api/portraits/men/${props.picture}.jpg`
      : `https://randomuser.me/api/portraits/women/${props.picture}.jpg`;
  const genderIcon =
    props.gender === "male" ? (
      <Male className={`w-8 p-2`} />
    ) : (
      <Female className={`w-4 block m-auto text-${color}-800 fill-current`} />
    );

  return (
    <div
      className={`absolute w-5/6 h-max top-28 left-2/4 
        transform -translate-x-2/4 
        bg-${color}-100 z-20 flex flex-col items-center rounded-3xl`}
    >
      <button onClick={() => push('/')} 
      className={`absolute right-4 top-4 rounded-full bg-${color}-500 w-8 h-8`}>
        <Close className={`w-4 h-4 text-${color}-900 fill-current m-auto`} /> </button>
      <div className={`rounded-full overflow-hidden w-32 h-32 -mt-16 bg-${color}-400 user-image`}>
       <Image src={imageSrc} width={130} height={130} className={`z-20 absolute transform`} alt={`user ${props.fullName} photo`}/>
        <User className={`w-full h-full p-8 text-${color}-900 fill-current m-auto z-0 transform -translate-y-full`} />
     
         
      </div>
      <h2 className={`font-extrabold text-3xl opacity-75`}>
        {props.fullName}
      </h2>
      <div
        className={`flex flex-col text-base font-normal  w-full px-10 my-5 justify-center flex-nowrap items-start`}
      >
        <div className={`flex flex-row items-center my-2 flex-wrap`}>
          <span
            className={`bg-${color}-400 rounded-full h-9 w-9 flex justify-center`}
          >
            {genderIcon}
          </span>
          <h3 className={` text-lg font-semibold mx-2 opacity-75`}>Gender:</h3>
          {titleCase(props.gender)}
        </div>
        <div className={`flex flex-row items-center my-2 flex-wrap`}>
        <span
            className={`bg-${color}-400 rounded-full h-9 w-9 flex justify-center`}
          >
          <Email className={`w-9 p-2 block m-auto text-${color}-800 fill-current`} />
          </span>
          <h3 className={`text-lg font-semibold mx-2 opacity-75`}>Email:</h3>
          {props.email}
        </div>
        <div className={`flex flex-row items-center my-2 flex-wrap`}>
        <span
            className={`bg-${color}-400 rounded-full h-9 w-9 flex justify-center`}
          >
          <Cake className={`w-9 p-2 block m-auto text-${color}-800 fill-current`} />
          </span>
          <h3 className={`text-lg font-semibold mx-2 opacity-75`}>Birthday:</h3>
          {props.birthday}
        </div>
        <div className={`flex flex-row items-center my-2 flex-wrap`}>
        <span
            className={`bg-${color}-400 rounded-full h-9 w-9 flex justify-center`}
          >
          <Flag className={`w-8 p-2 block m-auto text-${color}-800 fill-current`} />
          </span>
          <h3 className={` text-lg font-semibold mx-2 opacity-75`}>Nationality:</h3>
          {props.nationality}
        </div>
        <div className={`flex flex-row items-center my-2 flex-wrap`}>
        <span
            className={`bg-${color}-400 rounded-full h-9 w-9 flex justify-center`}
          >
          <Phone className={`w-8 p-2 text-${color}-800 fill-current`} />
          </span>
          <h3 className={` text-lg font-semibold mx-2 opacity-75`}>Phone:</h3>
          {props.phone}
        </div>
        <div className={`flex flex-row items-center my-2 flex-wrap`}>
        <span
            className={`bg-${color}-400 rounded-full h-9 w-9 flex justify-center`}
          >
          <Adress className={`w-8 p-2 text-${color}-800 fill-current`} />
          </span>
          <h3 className={` text-lg font-semibold mx-2 opacity-75`}>Address:</h3>
          {props.address}
        </div>
        <div className={`flex flex-row items-center my-2 flex-wrap`}>
        <span
            className={`bg-${color}-400 rounded-full h-9 w-9 flex justify-center`}
          >
          <Hashtag className={`w-8 p-2 text-${color}-800 fill-current`} />
          </span>
          <h3 className={` text-lg font-semibold mx-2 opacity-75`}>ID:</h3>
          {props.id}
        </div>
      </div>
      <div>
        <button 
        onClick={() => {
            navigator.clipboard.writeText(userURL).then((success) =>{
              setShowAlert(true);
              setTimeout((() => {
                setAlertMessage(`⚠ Copied URL to clipboard!`)
                setShowAlert(false);
              }), 1400)
            }, (err) => {
              setShowAlert(true);
              setTimeout((() => {
                setAlertMessage(`⚠ Sorry, an error occurred`)
                setShowAlert(false);
              }), 1200)

            });
        }}
        className={`mb-4 rounded-lg flex flex-row flex-nowrap 
        place-items-center p-4 bg-${color}-300 w-max
        cursor-pointer`} >
            <Share className={`w-6 text-${color}-900 fill-current mr-3`}/>
            Copy user URL
        </button>
        {showAlert && <div className={`absolute -my-36 fadeInOut pointer-events-nones cursor-default transform rounded-xl p-2 bg-${color}-500 text-${color}-50 z-50`}>{alertMessage}</div>}
    </div></div>
  );
};

export default UserModal;
