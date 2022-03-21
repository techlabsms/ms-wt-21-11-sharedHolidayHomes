
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Offer from './components/Offer.js';
import Login from './components/Login.js';
import Overview from './components/Overview.js';
import { ReactDOM } from 'react'; 
import { Routes, Route } from "react-router-dom"
import ObjDetail from './ObjDetail';



function App() {
  return (
      <div>
        <div className="App">
        <Navbar/>
        </div>
        <div className="App">
          <Routes>
            <Route exact path="/" element={ <Home/> } />
            <Route path="/about" element={ <About/> } />
            <Route path="/offer" element={ <Offer/> } />
            <Route path="/login" element={ <Login/> } />
            <Route path="/searchresults" element={ <Overview/> } />
            <Route path="ObjDetail/:houseID" element={<ObjDetail/>} />
          </Routes>
        </div>
        <Footer/>
      </div> 
  )
}
export default App
