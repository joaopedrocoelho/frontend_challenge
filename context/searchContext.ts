import { createContext } from "react";

export type Nationalities =
  | "Any"
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

interface SearchContext {
  input: string;
  setInput: (input: string) => void;
  maleOnly: boolean;
  femaleOnly: boolean;
  setMaleOnly: (maleOnly: boolean) => void;
  setFemaleOnly: (femaleOnly: boolean) => void;
  nationality: Nationalities,
  setNationality: (nat:Nationalities) => void;
}

const searchContext = createContext<SearchContext>({
  input: "",
  setInput: (input: string) => {},
  maleOnly: false,
  femaleOnly: false,
  setMaleOnly: (maleOnly: boolean) => {},
  setFemaleOnly: (femaleOnly: boolean) => {},
  nationality: "Any",
  setNationality: (nat:Nationalities) => {}

});

export default searchContext;
