import "./SearchComponents.css"

function Place() {
    return (
        <div className="body">
            <div className='wrapper'>
                <div className="header">
                        <h2> Place?</h2>
                </div>
                <div className="search-input"> 
                    <div className="field">
                        <input type="text" className="input-country" defaultValue="Everywhere">
                        </input>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Place;