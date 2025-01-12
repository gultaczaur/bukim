import React from 'react'
import Header from './assets/Components/Header/Header'
import SearchLogin from './assets/Components/Log in/SearchLogin'
import Wishlist from './assets/Components/Wishlist/wishlist'
import Question from './assets/Components/Questions/Question'
import Market from './assets/Components/Market/Market'
import Corporatesales from './assets/Components/Corporate sales/Corporatesales'
import Aboutus from './assets/Components/About us/Aboutus'
import Service from './assets/Components/Service/Service'

const App = () => {
  return (
    <>
      <Header/>
      <SearchLogin/>
      <Wishlist/>
      <Question/>
      <Market/>
      <Corporatesales/>
      <Aboutus/>
      <Service/>
    </>
  )
}

export default App
