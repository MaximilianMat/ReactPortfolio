import React, { useEffect, useRef } from 'react';
import Header from './components/Header'
import Projects from './components/Projects'
import Aos from 'aos';
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      offset: 400,
      duration: 1000
    });
  }, [])

  const welcomeRef = useRef(null)
  const workRef = useRef(null)
  const aboutRef = useRef(null)

  return (
    <div className="app">
      <Header welcomeRef={welcomeRef} workRef={workRef} aboutRef={aboutRef}/>
      <div ref={welcomeRef} className="welcome">
        <h5>Hi there 👋 , I’m</h5>
        <h2>Maximilian</h2>
        <h4>and this is <span>my</span> Work:</h4>
      </div>
      <div ref={workRef} className="page">
        <Projects/>
      </div>
      <div ref={aboutRef} className="about">
        about
      </div>
    </div>
  );
}

export default App;
