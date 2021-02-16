import { useContext, useEffect } from 'react';
import OLTileLayer from 'ol/layer/Tile';
import TileSource from 'ol/source/Tile';
import MapContext from '../MapContext';

interface Props {
  source: TileSource;
  zIndex: number;
}
const TileLayer: React.FC<Props> = ({ source, zIndex = 0 }) => {
  const map = useContext(MapContext);
  useEffect(() => {
    if (!map) return () => {};

    const tileLayer = new OLTileLayer({
      source,
      zIndex,
    });
    map.addLayer(tileLayer);
    tileLayer.setZIndex(zIndex);
    return () => {
      if (map) {
        map.removeLayer(tileLayer);
      }
    };
  }, [map, source, zIndex]);
  return null;
};
export default TileLayer;
