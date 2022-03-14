import React from "react";
import "./SearchResults/SearchResults.css";
import { houseData } from "./SearchResults/houseData";
import ListedHouses from "./SearchResults/ListedHouses";




const Overview=() => {
    return (
      <div className="houses">
        <div className="header-overview">
          <h1> Our selection to find your Shared Holiday Home</h1>
        </div>

        <div className="headline-overview">
          Your search results
        </div>

        <ListedHouses houseData={houseData} />
      </div>
    )
  }
  
  export default Overview;