import { useEffect, useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Filters from './components/Filters'
import Country from './components/Country'
import img from './assets/react.svg'
import axios from 'axios'

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <>
      <Header/>
      <div className="content bg-veryLightGray">
          <div className=" container py-16">
              <div className="filters flex justify-between items-center">
                <SearchBar/>
                <Filters/>
              </div>
              <div className='my-10 grid grid-cols-4 gap-16'>
                 {
                  data.map(item => (
  	                <Country 
                      img={item.flags.png}
                      alt={item.flags.alt}
                      title={item.name.common}
                      population={item.population}
                      region={item.region}
                      capital={item.capital}
                    />
                  ))
                 }
              </div>
          </div>
      </div>
    </>
  )
}

export default App
