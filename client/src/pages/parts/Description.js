import "./Description.css";
import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import SearchButton from "../../components/search/searchComponents/SearchButton";


    

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
                                <h2 id='name'>{item.name}</h2>
                                <br /> <br />

                                <div id='Price'>
                                <div id='PriceDesc'>
                                    
                                    <h3 id='SharesWord'>Available Shares:</h3>
                                    <h3 id='TotalShares'>Total Shares:</h3>
                                    <h3 id='PriceWord'>Price:</h3>
                                </div>
                                <div id='PriceNum'>
                                    <h3 id='SharesWord'>{item.availableShares}</h3>
                                    <h3 id='TotalShares'>{item.totalShares}</h3>
                                    <h3 id='PriceWord'>{item.priceInEuro} </h3>
                                </div>
                                    <div id='attributes'>
                                        <h3>{item.areaInSqM} m²</h3>
                                        <h3>{item.roomCount} Rooms</h3>
                                        <h3>{item.bathroomCount} Baths</h3>
                                    </div>
                                </div>
                                <br />
                                <div id='YP'>
                                    <h2>Your Price: </h2>
                                    <h2 id='YP1'>{item.priceInEuro / item.totalShares}</h2>
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
                                <br />
                                <br />
                                <br />
                                
                            </div>
                        </div>
                            <div className="tc">
                                <button className="tc searchButton grow" type='submit'>
                                                Connect now!
                                </button>
                                
                            </div>

                            
                    </div>
                    
                    )
        })}
        </div> 
    )
}
    

export default Desc;