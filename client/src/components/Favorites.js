import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './favorite.css';
// react hooks
import {useEffect, useState} from "react";
import axios from "axios";

const Card =() => { 
   const [houses, setHouses] = useState([]);
    useEffect(() => {
        const fetchHouses = async () => {
           const result = await axios ({method:"get", url:"http://localhost:5000/houses"}) 
           console.log(result.data)
        setHouses(result.data.slice(0,3))
        }
        
        fetchHouses() 
    },
    [],
    )


    return (
        <div>
            <div class="tc ma2 pa3">
                <hr color='#353C42' />
                <h1 className="black pa3">Our recommandations for you!</h1>
                {houses.map((item) => {
                    return (
                        <div className="gallery tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5">
                            <Link to={`/ObjDetail/${item._id}`}><img src={item.images[0]} height="180px" witdh="180px"/></Link>
                            <div className="ma1 pa2">
                                <h2 className='Name'>{item.name}</h2>
                                <h4>{item.address.locality}</h4>
                            </div>
                        </div>   
                        )
                })}
                <div> 
                    <Link to="searchresults"><button className="insp grow bg-light-gray" type='submit'> Give me more inspiration!</button></Link>
                </div>
                </div>
            </div>
        ) 
    
}
        

export default Card