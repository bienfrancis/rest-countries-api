import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ReturnButton = () => {
    const navigate = useNavigate();

    return (
        <button className='shadow-lg px-7 py-4 rounded-md flex gap-4 dark:bg-darkBlue dark:text-white' onClick={()=> navigate(-1)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back
        </button>
    );
}

export default ReturnButton;
