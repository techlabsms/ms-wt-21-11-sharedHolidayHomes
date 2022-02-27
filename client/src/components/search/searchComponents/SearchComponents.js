import { useState} from "react";
import "./SearchComponents.css";
import Place from "./Place";
import HouseData from "../mock.json";

const SearchComponents = ({placeholder, data}) => {
    const [minPrice, setMinPrice] = useState ('');
    const [maxPrice, setMaxPrice] = useState ('');
    

    return (
        <div>
            <form>
                <div className="body">
                    <div className="wrapper">
        
                    <div className="header">
                            <h2> What is your budget?</h2>
                    </div>
                    <div className="search-input"> 
                        <div className="field">
                            <input 
                            type="number" 
                            className="input-min" 
                            placeholder="From"
                            value={minPrice}
                            onChange={(event) => setMinPrice(event.target.value)}
                            >
                            </input>
                        </div>
                        <div className="separator"> 
                            -
                        </div>
                        <div className="field">
                            <input 
                            type="number" 
                            className="input-max" 
                            placeholder="To"
                            value={maxPrice}
                            onChange={(event) => setMaxPrice(event.target.value)}> 
                            </input>
                            <p>€</p>
                        </div>
                    </div>
                    </div>
                </div>
            
            <Place placeholder="Everywhere" data={HouseData}/>

            <div className="body">
                <div> 
                    <button className="searchButton grow" type='submit'>Search now</button>
                </div>
            </div>

                
                <p> {minPrice}</p>
                <p> {maxPrice}</p>
            </form>
        </div>
    )} 

    export default SearchComponents;