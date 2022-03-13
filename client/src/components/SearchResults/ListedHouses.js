import React from "react";
import "./SearchResults.css";

const ListedHouses = ({houseData}) => {
        return (     
            <div className="results">
                {houseData.map((houseData, i) => {
                        return (
                            <div className="card">
                                    <img className="image" alt="houses" src={houseData.images[0]} />
                                    <div>
                                        <div className="text-wrapper">
                                        <p className="text city">{houseData.address.locality}</p>
                                        <p className="pipe"> | </p>
                                        <p className="text country">{houseData.address.country}</p>
                                        </div>
                                        <h2 className="house-title">{houseData.name}</h2>
                                        <div className="text-wrapper description">
                                        <div className="text match">
                                            <p className="size">{houseData.areaInSqM}</p>
                                            <p>m²</p> 
                                        </div>
                                        <p className="pipe"> | </p>
                                        <div className="text match">
                                            <p className="rooms"> {houseData.roomCount}</p>
                                            <p className="space"> bedrooms</p>
                                        </div>
                                        <p className="pipe"> | </p>
                                        <div className="text match">
                                            <p className="rooms"> {houseData.bathrooms} </p>
                                            <p className="space"> bathrooms</p>
                                        </div>
                                        </div>
                                        <div className="text-wrapper pricedetails">
                                        <div className="text match">
                                            <p className="price">{houseData.priceInEuro}</p>
                                            <p className="currency">€</p>
                                        </div>
                                        <p className="pipe"> | </p>
                                        <div className="text match">
                                            <p className="shares">{houseData.availableShares}</p>
                                            <p className="slash">/</p>
                                            <p className="totalshares">{houseData.totalShares}</p>
                                            <p className="space">Shares</p>
                                        </div>
                                        </div>
                                        <div>
                                        <button> More details</button> 
                                        </div>
                                    </div>
                                </div>
                        );     
                    })
                }
            </div>          
        );
    }
        
  
  export default ListedHouses;