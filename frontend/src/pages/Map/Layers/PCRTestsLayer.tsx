import React, { useCallback, useMemo } from 'react';

import httpStatus from 'http-status';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';

import Style, { StyleFunction } from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import { FeatureLike } from 'ol/Feature';
import VectorLayer from './VectorLayer';

const PCRTestsLayer: React.FC = () => {
  const vectorSource = useMemo(
    () =>
      new VectorSource({
        loader: async (extent, resolution, projection) => {
          const url = `${process.env.PUBLIC_URL}/data/processed/pcr_tests_districts.geojson`;

          const response = await fetch(url, {
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          if (response.status === httpStatus.OK) {
            const jsonData = await response.json();
            const format = vectorSource.getFormat() as GeoJSON;
            if (format) {
              const features = format.readFeatures(jsonData, {
                extent,
                featureProjection: projection,
              });
              vectorSource.addFeatures(features);
            }
          } else {
            vectorSource.removeLoadedExtent(extent);
          }
        },
        format: new GeoJSON(),
      }),
    []
  );

  const style: StyleFunction = useCallback((feature: FeatureLike) => {
    console.log(feature);
    return new Style({
      // image: new Circle({
      //   fill: fill,
      //   stroke: stroke,
      //   radius: 5
      // }),
      // fill: fill,
      stroke: new Stroke({
        color: '#3399CC',
        width: 1.25,
      }),
    });
  }, []);

  return <VectorLayer source={vectorSource} zIndex={1} style={style} />;
};

export default PCRTestsLayer;
