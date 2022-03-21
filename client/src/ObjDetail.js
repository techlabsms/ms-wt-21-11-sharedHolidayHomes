import React from 'react';
import { useParams } from 'react-router-dom';
import Slider from './pages/parts/Slider/Slider';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import MapContainer from './pages/parts/map';
import DescMunich from './pages/parts/Description';

function ObjDetail() {
  let { houseID } = useParams();

  return (
    <div>
      <Slider />
      <MapContainer />
      <DescMunich />
    </div>
  );
}

export default ObjDetail;
