import React, {useEffect, useState} from 'react';
import Caret from './caret.svg';
import {useRouter} from 'next/router';

const PaginationNav = () => {
    const {query} = useRouter();
    const [pageNumber, setPageNumber] = useState<string | string[]>('1');

    useEffect(() => {
        if(query.page) {
            setPageNumber(query.page);
        }
    }, [query])

    return (
        <div className={`flex flex-row flex-nowrap w-full h-14 justify-center items-center my-10`}>
            <button><Caret className={`w-12 h-12 fill-current text-${color}-900 transform rotate-180`}/></button>
            <div className={`w-10 h-10 flex flex-row justify-center items-center mx-20 font-bold text-xl bg-${color}-500 rounded-full`}>
                {pageNumber}
            </div>
            <button><Caret className={`w-12 h-12 fill-current text-${color}-900 `}/></button>
        </div>
    )
}

export default PaginationNav
