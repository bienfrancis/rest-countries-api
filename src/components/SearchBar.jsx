import React from 'react';

const SearchBar = ({value, onChange}) => {
    return (
        <div className='relative flex items-center dark:bg-darkBlue'>
            <span className='absolute left-3 dark:text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </span>
            <input className='pl-12 pr-6 py-4 focus:bg-none rounded-md shadow-md dark:bg-darkBlue dark:text-white' type="text" value={value} onChange={onChange} name="search" id="searhbar" placeholder='Search for a country ...'/>
        </div>
    );
}

export default SearchBar;
