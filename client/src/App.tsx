import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Certification from './components/Certification';
import Projects from './components/Projects';
import Footer from './components/Footer';
const App = () => {
  return (
    <div>
        {/* add component here */}
        <Hero />
        <Navbar />
        <Experience />
        <Certification />
        <Projects />
        <Footer />
    </div>
  )
}

export default App
