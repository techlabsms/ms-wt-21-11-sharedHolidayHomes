import React from "react";
import { Link } from "react-router-dom"

function Overview(){
    return (
        <div>
            <h1>Just wait a week. Shortly you can see your search results</h1>
            <Link to="/"><button className="grow" type='submit'>Back to Homepage</button></Link>
        </div>

    )
}

export default Overview