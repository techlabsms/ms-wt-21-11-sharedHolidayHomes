import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { ReactDOM } from 'react'; 
import Search from './components/search/Search';
import Footer from './Footer.js';


function App() {
  return (
    <div>
      <Navbar />
      <Search />
      <Footer />
    </div>
    
  );
};
    
export default App;
