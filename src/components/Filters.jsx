import React from 'react';

const Filters = () => {

    const regions = [
        'Africa',
        'America',
        'Asia',
        'Europe',
        'Oceania'
    ]

    return (
        <div>
            <select name="regions" id="region" className='shadow-lg rounded-md px-6 py-4 relative'>
                <option value="" disabled selected>Filter by Regions</option>
                {
                regions.map(region => (
                    <option value={region} className='p-2'>{region}</option>
                ))
                }
            </select>
            
        </div>
    );
}

export default Filters;
