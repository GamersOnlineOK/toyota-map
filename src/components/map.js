/* eslint-disable react/jsx-props-no-spreading,react/prop-types */

import * as React from 'react';
import { useEffect, useMemo, useState } from 'react';
import ReactMapGL, { Layer, Source } from 'react-map-gl';

import geoData from '../assets/data/features.json';
import weeklyValues from '../assets/data/weekValues.json';
import { styleLayer } from './mapStyle';
import updateWeek from '../helpers/utils';
import useWindowSize from './windowSize';

export default function Map(props) {
  const { selectedWeek, selectedValue } = props;

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '119vh',
    latitude: -34.900290,
    longitude: -56.177892,
    zoom: 13,
    pitch: 60, // pitch in degrees
    bearing: 50,
  });

  function redrawMap() {
    setViewport({
      ...viewport,
      width: '100%',
      height: '119vh',
    });
  }

  const { windowWidth, windowHeight } = useWindowSize();

  // redraw if the map's parent container or window changes size
  useEffect(() => {
    redrawMap();
  }, [windowWidth, windowHeight]);

  const [paintLayer, setPaintLayer] = useState(null);

  useEffect(() => {
    // TODO figure out animation
    // Grab selected value and modify map style.paint
    const animation = window.requestAnimationFrame(() => setPaintLayer({
      // 'fill-outline-color': '#ffae00',
      'fill-extrusion-color': {
        property: selectedValue.id,
        stops: [
          [0, '#00ff02'],
          [100, '#93bd5b'],
          [200, '#017f01'],
          [300, '#fefe01'],
          [400, '#ff9966'],
          [500, '#fe0000'],
        ],
      },
      'fill-extrusion-height': [
        'interpolate',
        ['linear'],
        ['get', selectedValue.id],
        // stop pairs
        0, 0,
        100, 100,
        200, 200,
        300, 300,
        400, 400,
        500, 500,
      ],
    }));
    return () => window.cancelAnimationFrame(animation);
  }, [selectedValue]);

  // eslint-disable-next-line max-len
  const data = useMemo(() => geoData && updateWeek(geoData, weeklyValues, selectedWeek), [selectedWeek]);

  return (
    <ReactMapGL
      mapboxApiAccessToken="pk.eyJ1IjoiZnJhbmtqcmFuZ2VsIiwiYSI6ImNrdDljMmhocDFhbWYzMnI1eDl2Y2lwYm0ifQ.Op0miDb3t-6zZG61Ai2Z2g"
      {...viewport}
      mapStyle="mapbox://styles/frankjrangel/cktylwl5e0r3a18p6ej97upu0"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      interactiveLayerIds={['data']}
    >
      <Source type="geojson" data={data}>
        <Layer {...styleLayer} paint={paintLayer} />
      </Source>
    </ReactMapGL>
  );
}
