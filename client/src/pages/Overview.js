import React from "react";
import { Link } from "react-router-dom"

function Overview(){
    return (
        <div>
            <h1>On this page the searched objects will be listed</h1>
            <Link to="/"><button className="grow" type='submit'>Back to Homepage</button></Link>
        </div>

    )
}

export default Overview