import React from 'react';

import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';

import VectorLayer from './VectorLayer';

const vectorSource = new VectorSource({
  url: `${process.env.PUBLIC_URL}/data/districts_epsg_4326.geojson`,
  format: new GeoJSON(),
});

const DistrictLayer: React.FC = () => (
  <VectorLayer source={vectorSource} zIndex={1} />
);

export default DistrictLayer;
