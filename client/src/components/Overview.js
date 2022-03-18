import React from "react";
import "./SearchResults/SearchResults.css";
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

        <ListedHouses />
      </div>
    )
}
  
  export default Overview;