import React, { useState } from 'react';
import { fromLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';
import Map from './Map';
import Layers from './GenericLayers/Layers';
import TileLayer from './GenericLayers/TileLayer';
import DistrictLayer from './GenericLayers/DistrictLayer';

const MapPage: React.FC = () => {
  const [center] = useState([19.70590523920156, 48.7163185502946]);
  const [zoom] = useState(8);

  return (
    <Map center={fromLonLat(center)} zoom={zoom}>
      <Layers>
        <TileLayer source={new OSM()} zIndex={0} />
        <DistrictLayer />
      </Layers>
    </Map>
  );
};

export default MapPage;
