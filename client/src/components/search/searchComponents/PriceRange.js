import "./SearchComponents.css";


function PriceRange() {
    return (
        <div className="body">
            <div className='wrapper'>
                <div className="header">
                        <h2> What is your budget?</h2>
                </div>
                <div className="search-input"> 
                    <div className="field">
                        <input type="number" className="input-min" defaultValue="100">
                        </input>
                    </div>
                    <div className="separator"> 
                        -
                    </div>
                    <div className="field">
                        <input type="number" className="input-max" defaultValue="100000" > 
                        </input>
                        <p>€</p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default PriceRange;