/* eslint-disable react/jsx-props-no-spreading,react/prop-types */

import * as React from 'react';
import { useEffect, useMemo, useState } from 'react';
import ReactMapGL, { Layer, Source } from 'react-map-gl';
import { styleLayer } from './mapStyle';
import updateWeek from '../helpers/utils';
import useWindowSize from './windowSize';

export default function Map(props) {
  const { selectedWeek, selectedValue } = props;
  const [geoData, setgeoData] = useState(null);
  const [weeklyValues, setWeeklyvalues] = useState({});
  useEffect(() => {
    // eslint-disable-next-line
    fetch("https://staging.boronstudio.com/focusapi/api/api.php?action=getZones")
      .then((res) => res.json())
      .then((res) => setgeoData(res));
  }, []);
  useEffect(() => {
    // eslint-disable-next-line
    fetch("https://staging.boronstudio.com/focusapi/api/api.php?action=getTelemetryByDateRangeByZone&from=2021-09-01&to=2021-09-02")
      .then((res) => res.json())
      // eslint-disable-next-line
      .then((response) => {
        // eslint-disable-next-line
        const weekvalues = new Array();
        // eslint-disable-next-line
        const cant = Object.values(response.data).length;
        // eslint-disable-next-line
        var objetos = 'aaa';
        // eslint-disable-next-line
        const values = null;
        // eslint-disable-next-line
        const nuevoDato = null;
        // eslint-disable-next-line
      for (var i=1;i<=cant; i++) {
          response.data[i][0]['zoneId'] = i;
          // eslint-disable-next-line
          response.data[i][0]['week']  ='1092021';
          // eslint-disable-next-line
          weekvalues.push(response.data[i][0]);
        }
        // eslint-disable-next-line
        var nuevoJSemana=JSON.parse(JSON.stringify(weekvalues));
        // eslint-disable-next-line
        console.log(nuevoJSemana);
        // eslint-disable-next-line
        setWeeklyvalues(nuevoJSemana);
      });
  }, [selectedWeek]);
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
          [10, '#98FED6'],
          [30, '#63FFC2'],
          [50, '#32FFB0'],
          [70, '#00FF9D'],
          [90, '#00EB8E'],
          [120, '#02D47E'],
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
  console.log(data);
  return (
    <ReactMapGL
      onMouseMove={(e) => { console.log(e); }}
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
