import React from 'react';
import Home from './components/Home'
import Header from './components/Header'
import Performances from './components/Performances'
import AboutUs from './components/AboutUs'
import Prices from './components/Prices'
import Contact from './components/Contact'
import Footer from './components/Footer'
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button"; 
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Performances"component={Performances}/>
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
