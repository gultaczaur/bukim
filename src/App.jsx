import React from 'react'
import Home from './Pages/Home/Home'
import Search from './Pages/Search/Search'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Context from './Context/Context'
import Addtocard from './Pages/Addtocard/Addtocard'
import Aboutus from './Pages/About us/Aboutus'
import Corporatesales from './Pages/Corporate sales/Corporatesales'
import Market from './Pages/Market/Market'
import Question from './Pages/Questions/Question'
import Service from './Pages/Service/Service'
import Wishlist from './Pages/Wishlist/Wishlist'
import SearchLogin from './Pages/Log in/SearchLogin'

const App = () => {
  return (
    <>
     
      <Context> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/sebet" element={<Addtocard />} /> 
          <Route path="/login" element={<SearchLogin />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/question" element={<Question />} />
          <Route path="/market" element={<Market />} />
          <Route path="/corporate" element={<Corporatesales />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/service" element={<Service />} />
          
        </Routes>
      </BrowserRouter>
    </Context>
    </>
  )
}

export default App
