import "./SearchComponents.css"; 
import { Link } from "react-router-dom";

function SearchButton() {
    return (
        <div className="body">
           <div> 
                <Link to="Overview"><button className="searchButton grow" type='submit'>Search now</button></Link>
            </div>
        </div>
    );
  }
  
  export default SearchButton;