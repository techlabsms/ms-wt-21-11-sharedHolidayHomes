import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer.js';
import Card from './components/Favorites';
import Search from './components/search/Search';



function Homepage() {
  return (
    <div>
      <Navbar/>
      <Search />
      <Card/>
      <Footer/>
    </div> 
  )
}
export default Homepage
