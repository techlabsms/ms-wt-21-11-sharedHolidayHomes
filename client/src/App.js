import React from 'react'
import { Routes, Route } from "react-router-dom";
import ObjDetail from './pages/ObjDetail';
import Overview from './pages/Overview';
import Homepage from './Homepage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="Overview" element={<Overview/>} />
        <Route path="ObjDetail" element={<ObjDetail/>} />
      </Routes>
      {/* <Homepage /> */}
      {/* <Navbar/>
      <Search />
      <Card/>
      <Footer/> */}
    </div> 
  )
}
export default App
