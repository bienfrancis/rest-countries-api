import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReturnButton from './ReturnButton';
import axios from 'axios';

const CountryDetails = () => {

    const { name } = useParams();
    const [countryData, setCountryData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
            setCountryData(response.data);
        };
        getData();
    },[name]);

    console.log(countryData)

    return (
        <div className='py-16 h-screen dark:bg-veryDarkBlue dark:text-white'>
           <div className="container ">
            <ReturnButton/>
                {
                countryData.length === 0 ?  <div className='loader-container'><div class="custom-loader"></div></div> :
                <div className="inner-row h-full mt-20">
                    <div className="mt-5 flex gap-20 h-100">
                        <div className="flag flex-1 h-100">
                            <img className='h-full w-full' src={countryData[0].flags.png} alt={countryData[0].flags.alt} />
                        </div>
                        <div className="content flex-1">
                            
                                <h2 className='font-bold mb-8 text-3xl'>{countryData[0].name?.common}</h2>
                                <div className="details flex gap-10 content-between">
                                    <div className='grid grid-flow-row gap-2'>
                                        <p className='font-bold mb-1'>Native Name: <span className='font-normal'>{countryData[0].name?.official}</span></p>
                                        <p className='font-bold mb-1'>Population: <span className='font-normal'>{countryData[0].population.toLocaleString()}</span></p>
                                        <p className='font-bold mb-1'>Region: <span className='font-normal'>{countryData[0]?.region}</span></p>
                                        <p className='font-bold mb-1'>Sub Region: <span className='font-normal'>{countryData[0].subregion}</span></p>
                                        <p className='font-bold mb-1'>Capital: <span className='font-normal'>{countryData[0].capital[0]}</span></p>
                                    </div>
                                    <div className='grid grid-flow-row place-content-start gap-2'>
                                        <p className='font-bold mb-1'>Top Level Domain: <span className='font-normal'>{Object.values(countryData[0].tld)}</span></p>
                                        <p className='font-bold mb-1'>Currencies: <span className='font-normal'>{Object.values(countryData[0].currencies)[0].name}</span></p>
                                        <p className='font-bold mb-1'>Languages: {Object.values(countryData[0].languages).join(", ")}<span className='font-normal'></span></p>
                                    </div>
                                </div>
                                <div className="details-borders mt-16">
                                    {
                                        countryData[0].borders != null && (
                                            <div className='border-list flex gap-3 content-center items-center'>
                                                <p className='font-bold'>Border Countries:</p>
                                                <div className="inner-border grid  grid-flow-col gap-2">
                                                    {Object.values(countryData[0].borders).map(item => (
                                                        <div className='border-item shadow-md rounded-md px-4 py-2 dark:bg-darkBlue dark:text-white'>
                                                                {item}
                                                        </div>
                                                    ))} 
                                                </div>
                                            </div>
                                        )
                                    }
                                
                                </div>
                            
                        </div>
                    </div>
                </div>
                
                }
           </div>
        </div>
    );
}

export default CountryDetails;
