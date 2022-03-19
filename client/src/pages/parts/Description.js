import React, { Component } from 'react';
import "./Description.css"


function DescMunich() {
    return (
    <body>
    <div id='container'>
        <div id="a">
            <h2>Home in the green heart of Munich</h2>
            <br /> <br />

            <div id='Price'>
               <h3 id='PriceWord'>Price: </h3> 
               <h3 id='Amount'>425.000€</h3>
            </div>
            
            <div id='tags'>
                <h5 id='tag1'>Pool</h5>
                <h5 id='tag2'>Nature</h5>
                <h5 id='tag3'>Modern</h5>
            </div>
        </div>

        
        <div id="b">
            <h2>About this home</h2>
            <br /> <br />
            <h4>
             This beautiful, high quality finished modern house in the heart of munich next to the famous english garden. A large open living/dining area, 4 bedrooms and 3 bathrooms offer enough space even for larger families or groups of friends. A fireplace and sauna house provide additional coziness on colder days. The view from the outdoor pool is characterized through the green nature of the english garden and its small creeks.
            </h4>
        </div>
    </div>
   </body>
    )}

export default DescMunich;