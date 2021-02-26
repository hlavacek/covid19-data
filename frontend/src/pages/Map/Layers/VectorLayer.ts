import { useContext, useEffect } from 'react';
import OLVectorLayer from 'ol/layer/Vector';
import Style, { StyleFunction } from 'ol/style/Style';
import VectorSource from 'ol/source/Vector';
import MapContext from '../MapContext';

interface Props {
  source: VectorSource;
  zIndex: number;
  style?: Style | Style[] | StyleFunction;
}

const VectorLayer: React.FC<Props> = ({ source, style, zIndex = 0 }: Props) => {
  const map = useContext(MapContext);
  useEffect(() => {
    if (!map) return () => {};
    const vectorLayer = new OLVectorLayer({
      source,
      style,
    });
    map.addLayer(vectorLayer);
    vectorLayer.setZIndex(zIndex);
    return () => {
      if (map) {
        map.removeLayer(vectorLayer);
      }
    };
  }, [map, source, style, zIndex]);
  return null;
};
export default VectorLayer;
