import React from 'react';
import ol from 'ol';

const MapContext = React.createContext<ol.Map | null>(null);

export default MapContext;
