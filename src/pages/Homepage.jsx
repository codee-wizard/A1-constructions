import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Growth from '../components/Growth'
import Projects from '../components/Projects'
import Team from '../components/Team'
import Credentials from '../components/Credentials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div className="antialiased text-gray-900 bg-white">
      <Navbar />
      <main id="home">
        <Hero />
        <About />
        <Growth />
        <Projects />
        <Team />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Homepage