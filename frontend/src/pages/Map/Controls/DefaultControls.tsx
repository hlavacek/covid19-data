import React, { useContext, useEffect } from 'react';
import { defaults as defaultControls } from 'ol/control';
import MapContext from '../MapContext';

const FullScreenControl: React.FC = () => {
  const map = useContext(MapContext);
  useEffect(() => {
    if (!map) return () => {};

    const controls = defaultControls({ attribution: true });
    controls.forEach((control) => map.addControl(control));

    return () => controls.forEach((control) => map.removeControl(control));
  }, [map]);
  return null;
};
export default FullScreenControl;
