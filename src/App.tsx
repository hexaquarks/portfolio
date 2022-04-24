import React from 'react';
import Cover from './components/cover/Cover';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import BottomNavbar from './components/navbars/BottomNavbar';

import './App.scss';

function App() {
  return (
    <div className="window">
      <div className="coverPage"> 
        <Cover />
      </div>
      <div className="secondPage"> 
        <div className="firstSection">
          <h3>About Me</h3>
        </div>
        <About />
      </div>
      <div className="thirdPage"> 
        <div className="secondSection">
          <h3>Projects</h3>
        </div>
        <Projects />
      </div>
      <div className="fourthPage">
          <div className="thirdSection" >
            <h3>Contact</h3>
          </div>
        <Contact />
      </div>
      <div className="bottom">
        <BottomNavbar />
      </div>
    </div>
  );
}

export default App;
