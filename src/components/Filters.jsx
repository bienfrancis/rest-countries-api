import React from 'react';

const Filters = (props) => {

    const { regions, ...opt} = props;
   
    return (
        <div>
            <select name="regions" id="region" className='shadow-lg rounded-md px-6 py-4 relative' {...opt} onChange={props.onChange}>
                <option value="" disabled selected>Filter by Regions</option>
                {
                    regions.map(region => (
                        <option key={region} value={region} className='p-2'>{region}</option>
                    ))
                }
            </select>
            
        </div>
    );
}

export default Filters;
