import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import { useState, useEffect } from 'react';
import PuffLoader from "react-spinners/PuffLoader";

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  return (
    <div className="App" >
      {
        loading ?
          <div className='loading'>
            <PuffLoader color={"#ff4a57"} loading={loading} size={80} />
          </div>
          : <>
            <Navbar />
            <div className='sections'>
              <Home />
              <About />
              <Skills />
              <Projects />
              <Contact />
              <Footer />
              <ScrollToTop />
            </div>
          </>

      }

    </div>
  );
}

export default App;
