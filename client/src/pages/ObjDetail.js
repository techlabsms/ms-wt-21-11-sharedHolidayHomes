import React from "react";
import { Link } from "react-router-dom"

function ObjDetail(){
    return (
        <div>
            <h1>This site is in progress. Soon you will be able to see a detailed information about your object</h1>
            <Link to="/"><button className="grow" type='submit'>Back to Homepage</button></Link>
        </div>
    )
}

export default ObjDetail