import React from 'react';


const Country = ({img, alt, title, population, region, capital}) => {
    return (
        <div className='card shadow-lg max-w-sm rounded-md'>
            <img src={img} alt={alt} className='h-52 w-full' />
            <div className="card-body p-6 pb-10">
                <h4 className='font-bold mb-3'>{title}</h4>
                <p className='font-bold'>Population: <span className='font-normal'>{population}</span></p>
                <p className='font-bold'>Region: <span className='font-normal'>{region}</span></p>
                <p className='font-bold'>Capital: <span className='font-normal'>{capital}</span></p>
            </div>
        </div>
    );
}

export default Country;
