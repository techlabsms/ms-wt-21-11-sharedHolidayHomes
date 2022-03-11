import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Offer from './components/Offer.js';
import Login from './components/Login.js';
import Overview from './components/Overview.js';
import { ReactDOM } from 'react'; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/offer">
              <Offer />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/searchresults">
              <Overview />
            </Route>
          </Switch>
        </div>
        <Footer/>
      </div> 
    </Router>
  )
}
export default App
