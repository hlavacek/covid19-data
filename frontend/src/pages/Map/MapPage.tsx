import React, { useState } from 'react';
import { fromLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';
import Map from './Map';
import Layers from './Layers/Layers';
import TileLayer from './Layers/TileLayer';
import PCRTestsLayer from './Layers/PCRTestsLayer';
import Controls from './Controls/Controls';
import DefaultControls from './Controls/DefaultControls';
import 'ol/ol.css';

const MapPage: React.FC = () => {
  const [center] = useState([19.70590523920156, 48.7163185502946]);
  const [zoom] = useState(8);

  return (
    <Map center={fromLonLat(center)} zoom={zoom}>
      <Layers>
        <TileLayer source={new OSM()} zIndex={0} />
        <PCRTestsLayer />
      </Layers>
      <Controls>
        <DefaultControls />
        {/* <Attribution /> */}
      </Controls>
    </Map>
  );
};

export default MapPage;
