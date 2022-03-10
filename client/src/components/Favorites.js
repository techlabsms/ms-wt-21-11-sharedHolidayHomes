import React, {Component} from 'react';
import { objects } from "./Objects";
import './favorite.css';
// react hooks
import {useEffect, useState} from "react";
import axios from "axios";

const Card =() => { 
   const [houses, setHouses] = useState([]);
    /*useEffect(() => {
        const fetchHouses = async () => {
           const result = await axios ({method:"get", url:"http://localhost:5000/houses"})
        setHouses(result.data)
    }
    fetchHouses()
    })*/
        return (
            <div>
                <div class="tc ma2 pa3">
                    <hr color='#a3e8d6' />
                    <h1 className="light-green pa3">Unsere Empfehlungen für Dich!</h1>

                    {houses.map((item) => {
                        return (
                            <div className="gallery tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5">
                                <a href=''><img src={item.images[0]} height="180px" witdh="180px"/></a>
                                <div className="ma1 pa2">
                                    <h2>{item.name}</h2>
                                    <h4>{item.address.locality}</h4>
                                </div>
                            </div>   
                            )
                    })}
                    <div> 
                        <form action="www.google.de">
                        <button class="insp bg-light-gray grow tc" type='submit'>Gib mir mehr Inspiration!</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    
}
        

export default Card