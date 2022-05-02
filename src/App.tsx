import React from 'react';
import { useEffect } from 'react';
import Cover from './components/cover/Cover';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import BottomNavbar from './components/navbars/BottomNavbar';
import TopNavbar from './components/navbars/TopNavbar';

import './App.scss';

const App = () => {
  useEffect(()=>{
    if (navigator.userAgent.match(/samsung/i)) {
      alert(`You are using a special browser (Samsung Internet) that 
      might not display this website's colors properly.`);
    }
  },[]);
  
  return (
    <React.Fragment>
      <div className="top">
        <TopNavbar />
      </div>
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
    </React.Fragment>
  );
}

export default App;
