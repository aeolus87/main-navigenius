import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './coordinates.css'

const Coordinates = ({ userLocation, companionLocation, distance, markerIcon }) => {


  return (
    <div>
      <div className="mx-3 mt-2">Device Longitude: <span>{companionLocation?.Longitude || 'Fetching...'}</span></div>
      <div className="mx-3 mt-2">Device Latitude: <span>{companionLocation?.Latitude || 'Fetching...'}</span></div>
      <br />
      <div className="mx-3 mt-2">Current Longitude: <span>{userLocation?.[1] || 'Fetching...'}</span></div>
      <div className="mx-3 mt-2">Current Latitude: <span>{userLocation?.[0] || 'Fetching...'}</span></div>
      <br />
      <div className="mx-3 mt-2">Distance: <span>{distance || '...'}</span></div>
    </div>
  );
};

export default Coordinates;