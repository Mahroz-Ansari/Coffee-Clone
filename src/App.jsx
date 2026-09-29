import React from 'react'
import Header from './component/Pages/Header'
import Hero from './component/Pages/Hero'
import About  from './component/Pages/About'
import Menu from './component/Pages/Menu'
import Gallery from './component/Pages/Gallery'
import Contact from './component/Pages/Contact'
import Footer from './component/Pages/Footer'
import Testimonials from './component/Pages/Testimonials'

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About/>
      <Menu/>
      <Testimonials/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App