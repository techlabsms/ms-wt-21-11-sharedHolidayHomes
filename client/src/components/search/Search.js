import "./Search.css"
import PriceRange from "./searchComponents/PriceRange";
import Place from "./searchComponents/Place";
import SearchButton from "./searchComponents/SearchButton";
import HouseData from "./mock.json";

function Search() {
    return (
      <div>
     
        <div className="search-body">
          <h1 className="f2 fw9 white tc ma2"> <strong>Der smarte Weg in dein Shared-Holiday Home</strong></h1>
          <h3 className="f3 white tc ma4">Finde Dein neues Zuhause an den schönsten Orten der Welt!</h3>

              <div className="searchcomponents"><PriceRange /></div>
              <div className="searchcomponents"><Place placeholder="Everywhere" data={HouseData}/> </div>
              <SearchButton />
        </div>
      </div>
    );
  }
  
  export default Search;