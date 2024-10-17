import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Shared/Navbar'

import HeroSection from './components/HeroSection'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import ContactUs from './components/ContactUs'

function App() {
 

  return (
  <>
 <Navbar/>
<HeroSection/>
<Services/>
<AboutUs/>
<Testimonials/>
<FAQ/>
<ContactUs/>

  </>
  )
}

export default App
