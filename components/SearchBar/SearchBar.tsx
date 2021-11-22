import React, { useEffect, useRef, useContext, useState } from "react";
import SearchIcon from "./search.svg";
import searchContext from "../../context/searchContext";
import LoadingIcon from "../LoadMore/loading.svg";


const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { setInput } = useContext(searchContext);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
      setLoading(true)
    const delayDebounceFn = setTimeout(() => {
      setInput(inputRef.current ? inputRef.current.value : "");
      setLoading(false);
      // Send Axios request here
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <div
      className={`relative flex flex-row justify-start items-center mt-4 w-full`}
    >
      <input
        type="text"
        placeholder="Search"
        ref={inputRef}
        onChange={(e) => {
          e.preventDefault();
          setSearchTerm(e.target.value);
        }}
        className={`w-full border-2 border-green-900 
                p-2 rounded-md placeholder-green-900
                placeholder-opacity-50 `}
      />
      <span className={`flex place-items-center`}>
        {loading ? (
          <LoadingIcon
            className={`
            w-6 h-6 absolute right-3.5 z-10 fill-current 
            text-green-900 animate-spin`}
          />
        ) : (
          <SearchIcon
            className={`
            w-6 h-6 absolute right-3.5 z-10 fill-current text-green-900`}
          />
        )}
      </span>
    </div>
  );
};

export default SearchBar;
