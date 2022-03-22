import "./Description.css";
import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";


    

const Desc =() => { 
   const [houses, setHouses] = useState([]);
   let { houseID } = useParams(); 
    useEffect(() => {
        
        const fetchHouses = async () => {
           const result = await axios ({method:"get", url:(`http://localhost:5000/houseDetail/` + houseID)})
        setHouses(result.data)
        }
        fetchHouses() 
    },
    [],
    )
    return(
        <div>

        {houses.map((item) => {
                return ( 
                <div>
                    <div id='container'>
                            <div id="a">
                                <h2>{item.name}</h2>
                                <br /> <br />

                                <div id='Price'>
                                <h3 id='PriceWord'>Price: </h3> 
                                <h3 id='Amount'> {item.priceInEuro} </h3>
                                </div>
                                
                                <div id='tags'>
                                    <h5 id='tag1'>Pool {item.specials[0]}</h5>
                                    <h5 id='tag2'>Nature {item.specials[1]}</h5>
                                    <h5 id='tag3'>Modern {item.specials[2]}</h5>
                                </div>
                            </div>

                            
                            <div id="b">
                                <h2>About this home</h2>
                                <br /> <br />
                                <h4>
                                {item.description}
                                </h4>
                            </div>
                        </div>
                    </div>
                    )
        })}
        </div> 
    )
}
    

export default Desc;