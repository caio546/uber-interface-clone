import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({destination, origin, onReady}) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyBAlq2Zs0pDwDxLIW5iKfHg4K9tVIw6McA"
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;
