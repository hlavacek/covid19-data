import React, { useContext, useEffect } from 'react';
import { Attribution } from 'ol/control';
import MapContext from '../MapContext';

const FullScreenControl: React.FC = () => {
  const map = useContext(MapContext);
  useEffect(() => {
    if (!map) return () => {};

    const attribution = new Attribution({
      collapsible: true,
      collapsed: false,
    });

    map.addControl(attribution);

    return () => map.removeControl(attribution);
  }, [map]);
  return null;
};
export default FullScreenControl;
