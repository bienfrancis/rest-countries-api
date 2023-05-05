import { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Filters from './components/Filters'
import Country from './components/Country'
import img from './assets/react.svg'

function App() {

  return (
    <>
      <Header/>
      <div className="content bg-veryLightGray">
          <div className=" container py-16">
              <div className="filters flex justify-between items-center">
                <SearchBar/>
                <Filters/>
              </div>
              <div className='my-10 grid grid-flow-col'>
                  <Country 
                    img={img}
                    title="country"
                    population="500"
                    region="region"
                    capital="asd"
                  />
              </div>
          </div>
      </div>
    </>
  )
}

export default App
