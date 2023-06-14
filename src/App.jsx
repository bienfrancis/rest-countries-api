import { useEffect, useState } from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import CountryDetails from './components/CountryDetails'
import Home from './components/Home'



function App() {


  return (
    
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/country/:name' element={<CountryDetails/>}/>
      </Routes>
    </>
    
  )
}

export default App


