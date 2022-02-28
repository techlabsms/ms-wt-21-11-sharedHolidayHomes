import "./Search.css";
import PriceRange from "./searchComponents/PriceRange";
import Place from "./searchComponents/Place";
import SearchButton from "./searchComponents/SearchButton";
import HouseData from "./mock.json";
import SearchComponents from "./searchComponents/SearchComponents";


function Search() {
    return (
      <div>
     
        <div className="search-body">
          <h1 className="f2 fw9 white tc ma2"> <strong>The smart way to your Shared Holiday Home</strong></h1>
          <h3 className="f3 white tc ma4">Find your new home in the most beautiful places around the world!</h3>

          <div className="searchcomponents"><PriceRange /></div>

          <div className="searchcomponents"><Place placeholder="Everywhere" data={HouseData}/> </div>
          <SearchButton />
          <br />
        
            {/* <div className="searchcomponents"><SearchComponents placeholder="Everywhere" data={HouseData}/></div> */}
        </div>
      </div>
    );
  }
  
  export default Search;