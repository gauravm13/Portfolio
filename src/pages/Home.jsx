import React from 'react'
import Togglebtn from '../components/Togglebtn'
import Background from '../components/Background'
import Navbar from '../components/Navbar'
import  {Hero}  from '../components/Hero'
import Emailbar from '../components/Emailbar'
import { About } from '../components/About'
import { Skills } from '../components/Skills'
import { Projects } from '../components/Projects'
import { Contacts } from '../components/Contacts'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
       

      <Emailbar />
     

      <Togglebtn />

      <Background />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contacts />
      </main>
      
      <Footer/>
    </div>
  )
}

export default Home
