import { useState} from "react";
import "./SearchComponents.css";


const SearchComponents = () => {
    const [minPrice, setMinPrice] = useState ('');
    const [maxPrice, setMaxPrice] = useState ('');
    const [place, setPlace] = useState ('everywhere');

    const handleSubmit = (event) => {
        event.preventDefault();
        const search = {minPrice, maxPrice, place};

        console.log(search);

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                    <div className="wrapper">
                    <div className="header">
                            <h2> Place?</h2>
                    </div>
                    <div className="location-input"> 
                        <div className="field">
                            <div className="locationResult"> 
                                <select
                                    value={place}
                                    onChange={(event) => setPlace(event.target.value)}>
                                    <option value="everywhere">Everywhere</option>
                                    <option value="germany">Germany</option>
                                    <option value="italy">Italy</option>
                                    <option value="netherlands">The Netherlands</option>
                                    <option value="spain">Spain</option>
                                    <option value="sweden">Sweden</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    </div>
            

            <div className="body">
                <div> 
                    <button className="searchButton grow" type='submit'>Search now</button>
                </div>
            </div>

            </form>
        </div>
    )} 

    export default SearchComponents;