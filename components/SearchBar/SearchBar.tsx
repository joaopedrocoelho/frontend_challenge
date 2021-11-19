import React, {useEffect} from 'react'
import SearchIcon from './search.svg'




const SearchBar = () => {
   

    return (
        <div className={`relative flex flex-row justify-start items-center mt-4 w-full`}>
            
            <input type="text" placeholder="Search" 
                className={`w-full border-2 border-green-900 
                p-2 rounded-md placeholder-green-900
                placeholder-opacity-50 `}
            />
            <span className={`flex place-items-center`}> 
            <SearchIcon className={`
            w-6 h-6 absolute right-3.5 z-10 fill-current text-green-900` }/>
            </span>
        </div>
    )
}

export default SearchBar
