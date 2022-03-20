import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import './map.css';
import { useParams } from 'react-router-dom';

export class MapContainer extends Component {
  render() {
    return (
      <div className='map'>
        <Map
          google={this.props.google}
          zoom={14}
          initialCenter={{ lat: 48.16725, lng: 11.60236 }}
        >
          <Marker onClick={this.onMarkerClick} name={'Current location'} />

          <InfoWindow onClose={this.onInfoWindowClose}>
            {/* <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                    </div> */}
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAoSqBI70Dp7qrsmP1ypCVboTY33gi8JWg',
})(MapContainer);
