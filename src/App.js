import React from 'react';
import Header from './components/Header'
import Performances from './components/Performances'
import AboutUs from './components/AboutUs'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Performances />
      <AboutUs />
    </div>
  );
}

export default App;
