import React from 'react';
import SearchBar from './SearchBar'
import Filters from './Filters'
import Country from './Country'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'


const Home = () => {
      const [data, setData] = useState([]);
      const [error, setError] = useState(null);
      const [searchQuery, setSearchQuery] = useState('');
      const [filter, setFilter] = useState('');
      const [isLoading, setIsLoading] = useState(false);
    
      useEffect(() => {
        setIsLoading(true);
        axios.get('https://restcountries.com/v3.1/all')
          .then(response => {
            setData(response.data);
            setIsLoading(false);
          })
          .catch(error => {
            setError(error);
          })
      }, []);
    
      const searchCountry = (event) => {
        setSearchQuery(event.target.value);
      }
    
      const filteredData = data.filter((item) => {
        return (item.name.common.toLowerCase().includes(searchQuery.toLowerCase()) && item.region.includes(filter));
      })
    
      const filterCountry = (event) => {
        setFilter(event.target.value);
      }
    
      const regions = [
        'Africa',
        'America',
        'Asia',
        'Europe',
        'Oceania'
    ]

    console.log(filteredData)

    return (
        <div className="content bg-veryLightGray min-h-screen dark:bg-veryDarkBlue">
          <div className="container py-16">
              <div className="filters flex justify-between items-center">
                <SearchBar value={searchQuery} onChange={searchCountry}/>
                <Filters additionalClass='bg-dark-red' regions={regions} onChange={filterCountry}/>
              </div>
              {
                filteredData.length === 0 ? <div className='loader-container'><div class="custom-loader"></div></div> :
              
              <div className='my-10 grid grid-cols-4 gap-16'>
                 {
                  filteredData.map((item, i) => (
                    <div key={i}>
                    <Link to={`/country/${item.name.common}`} >  
                      <Country
                        key={i}
                        img={item.flags.png}
                        alt={item.flags.alt}
                        title={item.name.common}
                        population={item.population.toLocaleString()}
                        region={item.region}
                        capital={item.capital}
                      />
                    </Link>
                    </div>
                  ))
                 }
              </div>
              }
          </div>
      </div>
    );
}

export default Home;
