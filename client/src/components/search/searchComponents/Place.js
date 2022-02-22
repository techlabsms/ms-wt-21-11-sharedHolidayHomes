import React, { useState } from "react";
import "./SearchComponents.css"

function Place({ placeholder, data }) {

    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = (event) => {
     const searchLocation = event.target.value
     const newFilter = data.filter((value) => {
         return value.address.locality.toLowerCase().includes(searchLocation.toLowerCase());
     });
     if (searchLocation === "") {
        setFilteredData([]);
      } else {
      setFilteredData (newFilter);
      }
    };
    return (
        <div className="body">
            <div className='wrapper'>
                <div className="header">
                        <h2> Place?</h2>
                </div>
                <div className="location-input"> 
                    <div className="field">
                        <div className="locationResult"> 
                            <input 
                            type="text" 
                            placeholder={placeholder}
                            onChange={handleFilter}
                            />
                            <div className="dropdownIcon">
                            </div>
                        </div>
                    </div>
                </div>
                {filteredData.length != 0 && (
                <div className="dataEnter">
                    {filteredData.slice(0, 15).map((value, key) => {
                        return <a className="locationItem" href={value.images[0]} target="_blank"> 
                        <p> {value.address.locality}
                        </p>
                        </a>;
                    })}
                </div> 
                )}
            </div>
        </div>
    );
  }
  
  export default Place;