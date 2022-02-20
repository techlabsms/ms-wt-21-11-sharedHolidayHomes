import "./Search.css"
import PriceRange from "./searchComponents/PriceRange";
import Place from "./searchComponents/Place";

function Search() {
    return (
       <div className="search-body">
            <div className="searchcomponents"><PriceRange /></div>
            <div className="searchcomponents"><Place /> </div>
      </div>
    );
  }
  
  export default Search;