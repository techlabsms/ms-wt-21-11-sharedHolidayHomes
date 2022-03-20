import React from 'react';
import './SearchResults.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const ListedHouses = () => {
  const location = useLocation();
  const [minPrice, setMinPrice] = useState(location.state?.minPrice ?? null);
  const [maxPrice, setMaxPrice] = useState(location.state?.maxPrice ?? null);
  const [place, setPlace] = useState(location.state?.place ?? null);
  const [listedHouses, setListedHouses] = useState([]);

  useEffect(() => {
    const fetchListedHouses = async () => {
      const requestPlace = place === 'everywhere' ? '' : place;
      const result = await axios({
        method: 'get',
        url: 'http://localhost:5000/houses',
        params: { minPrice, maxPrice, place: requestPlace },
      });
      setListedHouses(result.data);
    };
    fetchListedHouses();
  }, [minPrice, maxPrice, place]);

  return (
    <div className='results'>
      {listedHouses.map((house) => {
        return (
          <div className='card'>
            <img className='image' alt='houses' src={house.images[0]} />
            <div>
              <div className='text-wrapper'>
                <p className='text city'>{house.address.locality}</p>
                <p className='pipe'> | </p>
                <p className='text country'>{house.address.country}</p>
              </div>
              <h2 className='house-title'>{house.name}</h2>
              <div className='text-wrapper description'>
                <div className='text match'>
                  <p className='size'>{house.areaInSqM}</p>
                  <p>m²</p>
                </div>
                <p className='pipe'> | </p>
                <div className='text match'>
                  <p className='rooms'> {house.roomCount}</p>
                  <p className='space'> bedrooms</p>
                </div>
                <p className='pipe'> | </p>
                <div className='text match'>
                  <p className='rooms'> {house.bathroomCount} </p>
                  <p className='space'> bathrooms</p>
                </div>
              </div>
              <div className='text-wrapper pricedetails'>
                <div className='text match'>
                  <p className='price'>{house.priceInEuro}</p>
                  <p className='currency'>€</p>
                </div>
                <p className='pipe'> | </p>
                <div className='text match'>
                  <p className='shares'>{house.availableShares}</p>
                  <p className='slash'>/</p>
                  <p className='totalshares'>{house.totalShares}</p>
                  <p className='space'>Shares</p>
                </div>
              </div>
              <div>
                <button> More details</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListedHouses;
