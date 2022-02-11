
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { ReactDOM } from 'react'; 
import Footer from './components/Footer.js';
import Content from './content';


function App() {
  return (
    <div>
      <Navbar/>
      <Content/>
      <Footer/>
    </div> 
  )
}
    
export default App
