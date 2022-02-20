import "./Search.css"
import PriceRange from "./searchComponents/PriceRange";
import Place from "./searchComponents/Place";
import HouseData from "./mock.json";

function Search() {
    return (
       <div className="search-body">
            <div className="searchcomponents"><PriceRange /></div>
            <div className="searchcomponents"><Place placeholder="Everywhere" data={HouseData}/> </div>
      </div>
    );
  }
  
  export default Search;