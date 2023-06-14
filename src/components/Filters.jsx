import React from 'react';

const Filters = (props) => {

    const { regions, ...opt} = props;
    const {addtionalClassName} = props
    const arrayClass = `p-3 ${addtionalClassName}`;
    return (
        <div>
            <select name="regions" id="region" className='shadow-lg rounded-md px-6 py-4 relative cursor-pointer focus:bg-none dark:bg-darkBlue dark:text-white' {...opt} onChange={props.onChange}>
                <option className='p-3' value="" disabled selected>Filter by Regions</option>
                {
                    regions.map(region => (
                        <option key={region} value={region} className={arrayClass}>{region}</option>
                    ))
                }
            </select>
        </div>
    );
}

export default Filters;
