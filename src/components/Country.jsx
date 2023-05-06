import React from 'react';


const Country = (props) => {
    return (
        <div className='card shadow-lg max-w-sm rounded-md'>
            <img src={props.img} alt={props.alt} />
            <div className="card-body p-6">
                <h4 className='font-bold mb-3'>{props.title}</h4>
                <p className='font-bold'>Population: <span className='font-normal'>{props.population}</span></p>
                <p className='font-bold'>Region: <span className='font-normal'>{props.region}</span></p>
                <p className='font-bold'>Capital: <span className='font-normal'>{props.capital}</span></p>
            </div>
        </div>
    );
}

export default Country;
