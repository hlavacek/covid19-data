import React, { useRef, useState, useEffect } from 'react';
import * as ol from 'ol';
import * as olCoordinate from 'ol/coordinate';
import './Map.css';
import MapContext from './MapContext';

interface Props {
  zoom: number;
  center: olCoordinate.Coordinate;
  children?: React.ReactNode;
}

const Map: React.FunctionComponent<Props> = ({
  zoom,
  center,
  children = null,
}: Props) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<ol.Map | null>(null);
  // on component mount
  useEffect(() => {
    const options = {
      view: new ol.View({ zoom, center }),
      layers: [],
      controls: [],
      overlays: [],
    };
    const mapObject = new ol.Map(options);
    if (mapRef.current) {
      mapObject.setTarget(mapRef.current);
    }

    setMap(mapObject);
    return () => mapObject.setTarget(undefined);
  }, [center, zoom]);

  // zoom change handler
  useEffect(() => {
    if (!map) return;
    map.getView().setZoom(zoom);
  }, [zoom, map]);

  // center change handler
  useEffect(() => {
    if (!map) return;
    map.getView().setCenter(center);
  }, [center, map]);

  return (
    <MapContext.Provider value={map}>
      <div ref={mapRef} className="ol-map">
        {children}
      </div>
    </MapContext.Provider>
  );
};

Map.defaultProps = {
  children: null,
};
export default Map;
