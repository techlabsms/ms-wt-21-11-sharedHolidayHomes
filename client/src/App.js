import React from 'react'
import { Routes, Route } from "react-router-dom";
import ObjDetail from './ObjDetail';
import Overview from './Overview';
import Homepage from './Homepage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="Overview" element={<Overview/>} />
        <Route path="ObjDetail/:houseID" element={<ObjDetail/>} />
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
