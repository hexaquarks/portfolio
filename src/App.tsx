import React from 'react';
import Cover from './components/cover/Cover';
import About from './components/about/About';
import './App.css';

function App() {
  return (
    <div className="window">
      <div className="coverPage"> 
        <Cover />
      </div>
      <div className="secondPage"> 
        <About />
      </div>
    </div>
  );
}

export default App;
