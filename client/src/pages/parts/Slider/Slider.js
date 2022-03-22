import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider';
import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Slider() {
    
    const [houses, setHouses] = useState([]);
    let { houseID } = useParams(); 
     useEffect(() => {
         
         const fetchHouses = async () => {
            const result = await axios ({method:"get", url:(`http://localhost:5000/houseDetail/` + houseID)})
         const imagelist = []
         for (var i=0; i < result.data[0].images.length; i++) {
             imagelist.push({"id": i, "image": result.data[0].images[i]})
         }
         setHouses(imagelist)
         console.log(result.data)
         }
         fetchHouses() 
     },
     [],
     )
    
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== houses.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === houses.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(houses.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {houses.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                      <img src={obj.image} alt="House images"/>

                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: houses.length}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}
