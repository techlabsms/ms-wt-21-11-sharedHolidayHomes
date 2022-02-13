import React, { useState} from 'react'
import "./Searchbar.css";


function Searchbar({placeholder, data}) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState([""]);

  const handleFilter = (event) => {
    const searchWord =event.target.value
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
    setFilteredData (newFilter);
    }
  };
  
  const clearInput = () => {
    setFilteredData ([]);
    setWordEntered("");
  };

  return (
    <div className="search">
        <div className="searchInputs">
          <input 
            type="text" 
            placeholder={placeholder} 
            value={wordEntered} 
            onChange={handleFilter}
          />
            <div className="searchIcon" id="clearBtn" onClick={clearInput}>
               <i className={filteredData.length === 0 ? 'fas fa-search' : 'fas fa-times' }></i>
            </div>
        </div>
        {filteredData.length != 0 && (
          <div className="dataResult">
          {filteredData.slice(0, 5).map((value, key) => {
            return (
            <a className="dataItem" href={value.images[0]} target="_blank">
              <p>{value.name}</p>
            </a>
            );
            })}
          </div>
        )}
      
    </div>
  );
}

export default Searchbar
