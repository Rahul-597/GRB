// App.jsx
import React from 'react'
// index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from './components/Navbar.jsx'
import {HeroSection} from './components/HeroSection.jsx'
import {About} from './components/About.jsx'
import {Services} from './components/Services.jsx'
import {Projects} from './components/Projects.jsx'
import {Contact} from './components/Contact.jsx'
import {Footer} from './components/Footer.jsx'
import { ClientsStats } from './components/ClientsStats.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <ClientsStats/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
