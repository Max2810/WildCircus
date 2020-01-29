import React from 'react';
import Header from './components/Header'
import Performances from './components/Performances'
import AboutUs from './components/AboutUs'
import Prices from './components/Prices'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Performances />
      <AboutUs />
      <Prices />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
