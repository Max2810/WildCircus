import React from 'react';
import Header from './components/Header'
import Performances from './components/Performances'
import AboutUs from './components/AboutUs'
import Prices from './components/Prices'
import Contact from './components/Contact'
import Footer from './components/Footer'
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button"; 
import { Switch, Route } from 'react-router-dom';
import './App.css';
import PerformancesList from './components/PerformancesList';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={PerformancesList}/>
        <Route path="/Performances"component={PerformancesList}/>
        <Route path="/AboutUs"component={AboutUs}/>
        <Route path="/Prices"component={Prices}/>
        <Route path="/Contact" component={Contact}/>
      </Switch>
      <Footer />
      <ScrollUpButton />
    </div>
  );
}

export default App;
