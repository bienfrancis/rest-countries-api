import React from 'react';


const Country = ({img, alt, title, population, region, capital}) => {
    return (
        <div className='card shadow-lg max-w-sm rounded-md dark:bg-darkBlue'>
            <img src={img} alt={alt} className='h-52 w-full rounded-t-md' />
            <div className="card-body p-6 pb-10">
                <h4 className='font-bold mb-3 dark:text-white'>{title}</h4>
                <p className='font-bold dark:text-white'>Population: <span className='font-normal'>{population}</span></p>
                <p className='font-bold dark:text-white'>Region: <span className='font-normal'>{region}</span></p>
                <p className='font-bold dark:text-white'>Capital: <span className='font-normal'>{capital}</span></p>
            </div>
        </div>
    );
}

export default Country;
