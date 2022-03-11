import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/HomeComponent";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={ <Home/> } />
          </Routes>
        </div>
        <Footer />
      </Router> 
    </div> 
  )
}
export default App
