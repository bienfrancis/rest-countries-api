import React from 'react';
import { Link } from 'react-router-dom';
import colorMode from '../utils/color-mode'


const Header = () => {

    const handleColorSwitcher = () => {
       colorMode();
    }


    return (
        <header className='shadow-lg bg-white dark:bg-darkBlue'>
            <div className="container flex justify-between items-center py-5 dark:bg-darkBlue">
                <h2 className='font-bold text-2xl dark:text-white'>
                  <Link to="/">Where the world?</Link>
                </h2>
                <div className="color-mode">
                    <button onClick={handleColorSwitcher} className='p-2 rounded-sm flex items-center gap-3 dark:bg-darkBlue dark:text-white'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                            </svg>
                        </span>
                        Dark Mode
                    </button>
                </div>
            </div>
        </header>
    );
}



export default Header;
