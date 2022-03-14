import React from "react";
import { Link } from "react-router-dom";
import Slider from "./pages/parts/Slider/Slider";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer"
import MapContainer from "./pages/parts/map";
import DescMunich from "./pages/parts/Description";


function ObjDetail(){
    return (
        <div>
            <Navbar/>
            <Slider/>
            <MapContainer/>
            <DescMunich/>
            <Footer/> 
        </div>
    )
}

export default ObjDetail