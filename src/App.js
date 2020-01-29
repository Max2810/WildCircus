import React from 'react';
import Header from './components/Header'
import Performances from './components/Performances'
import AboutUs from './components/AboutUs'
import Prices from './components/Prices'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Performances />
      <AboutUs />
      <Prices />
    </div>
  );
}

export default App;
