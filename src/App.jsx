import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campas from './Components/Campas/Campas'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Program' title='What We Offer'/>
       <Programs/>
       <About/>
       <Title subTitle='Gallery' title='Campus Photos'/> 
       <Campas/>
       <Title subTitle='TESTIMONIALS' title='What Student Says'/> 
       <Testimonials/>
       <Title subTitle='Contact US' title='Get in Touch'/> 
       <Contact/>
       <Footer/>
      </div>
    </div>
  )
}

export default App