import React from 'react'
import Navbar from './components/Navbar/Navbar'

import Footer from './components/Footer.js';
import Card from './components/Favorites';

import { ReactDOM } from 'react'; 
import Search from './components/search/Search';


function App() {
  return (
    <div>
      <Navbar/>
      <Search />
      <Footer/>
    </div> 
  )
}
export default App
