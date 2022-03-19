import React from "react";
import { useParams } from "react-router-dom";
import Slider from "./pages/parts/Slider/Slider";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer"
import MapContainer from "./pages/parts/map";
import DescMunich from "./pages/parts/Description";


function ObjDetail(){

    let { houseID } = useParams(); 

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