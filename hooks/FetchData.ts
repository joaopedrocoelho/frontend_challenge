 import {useCallback} from 'react';
type nationalities =
  | "AU"
  | "BR"
  | "CA"
  | "CH"
  | "DE"
  | "DK"
  | "ES"
  | "FI"
  | "FR"
  | "GB"
  | "IE"
  | "IR"
  | "NO"
  | "NL"
  | "NZ"
  | "TR"
  | "US";

const FetchData = async (page: number) => {
  const url = `https://randomuser.me/api/?page=${page}&results=50&seed=pedro`;
 return await fetch(url).then(res => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
   
    return res.json();
  })
  .catch(error => {
    
    console.log('There has been a problem with your fetch operation:',error);
    return error.message;
  });
  
};

export default FetchData;
