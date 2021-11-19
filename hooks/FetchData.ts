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

  const response = await fetch(url);
  return response.json();
};

export default FetchData;
