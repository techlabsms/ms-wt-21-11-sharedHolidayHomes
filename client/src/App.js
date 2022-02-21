
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer.js';
import Content from './content';
import Card from './components/Favorites';


function App() {
  return (
    <div>
      <Navbar/>
      <Content/>
      <Card/>
      <Footer/>
    </div> 
  )
}
    
export default App
