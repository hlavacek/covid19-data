import React, { useState } from 'react';
import { fromLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';
import Map from './Map';
import Layers from './Layers/Layers';
import TileLayer from './Layers/TileLayer';

const MapPage: React.FC = () => {
  const [center, setCenter] = useState([19.70590523920156, 48.7163185502946]);
  const [zoom, setZoom] = useState(8);

  return (
    <Map center={fromLonLat(center)} zoom={zoom}>
      <Layers>
        <TileLayer source={new OSM()} zIndex={0} />
      </Layers>
    </Map>
  );
};

export default MapPage;
