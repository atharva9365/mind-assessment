import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DonationBox from './components/DonationBox'
import About from './components/About'
import Programs from './components/Programs'
import Publications from './components/Publications'
import Contactus from './components/Contactus'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
       <Navbar/>
      <Hero/>
      <DonationBox/>
      <About/>
      <Publications/>
      <Programs/>
      <Contactus/>
      <Footer/>
     
    </>
  )
}

export default App
