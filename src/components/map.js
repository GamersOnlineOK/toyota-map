/* eslint-disable react/jsx-props-no-spreading,react/prop-types */

import * as React from 'react';
import { useEffect, useMemo, useState } from 'react';
import ReactMapGL, { Layer, Source } from 'react-map-gl';
import { styleLayer } from './mapStyle';
import updateWeek from '../helpers/utils';
import useWindowSize from './windowSize';
import WeeklyValuesLocal from '../assets/data/weekValues.json';

export default function Map(props) {
  // eslint-disable-next-line
  const {selectedWeek, selectedValue, startDate, endDate } = props;
  const [geoData, setgeoData] = useState(null);
  const [initDateApi, setInitDateApi] = useState('2022-03-01');
  const [endDateApi, setEndDateApi] = useState('2022-03-01');
  const [weeklyValues, setWeeklyvalues] = useState(WeeklyValuesLocal);
  useEffect(() => {
    let Day;
    let Month;
    const Year = startDate.getFullYear();
    if (startDate.getDate() <= 9) {
      // eslint-disable-next-line
      Day = "0"+startDate.getDate();
    } else {
      Day = startDate.getDate();
    }
    if (startDate.getMonth() <= 8) {
      // eslint-disable-next-line
      Month = "0"+(startDate.getMonth()+1);
    } else {
      Month = startDate.getMonth() + 1;
    }
    // eslint-disable-next-line
    const InitDate = Year + "-" + Month + "-" + Day;
    setInitDateApi(InitDate);
  }, [startDate]);
  useEffect(() => {
    if (endDate != null) {
      let Day;
      let Month;
      const Year = endDate.getFullYear();
      if (endDate.getDate() <= 9) {
      // eslint-disable-next-line
      Day = "0"+endDate.getDate();
      } else {
        Day = endDate.getDate();
      }
      if (endDate.getMonth() <= 8) {
      // eslint-disable-next-line
      Month = "0"+(endDate.getMonth()+1);
      } else {
        Month = endDate.getMonth() + 1;
      }
      // eslint-disable-next-line
    const InitDate = Year + "-" + Month + "-" + Day;
      setEndDateApi(InitDate);
    } else {
      setEndDateApi(initDateApi);
    }
  }, [endDate]);
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '119vh',
    latitude: -34.900290,
    longitude: -56.177892,
    zoom: 13,
    pitch: 60, // pitch in degrees
    bearing: 50,
  });
  useEffect(() => {
    // eslint-disable-next-line
    const URLAPI = "https://staging.boronstudio.com/focusapi/api/api.php?action=getTelemetryAndZonesInfoByDateRange&from="+initDateApi+"&to="+endDateApi+"";
    // eslint-disable-next-line
    fetch(URLAPI)
      .then((res) => res.json())
      .then((res) => {
        setgeoData(res);
        console.log(res);
        setViewport({
          width: '100%',
          height: '119vh',
          latitude: res.init_map.lat,
          longitude: res.init_map.lng,
          zoom: 15, // estaba en 13
          pitch: 60, // pitch in degrees
          bearing: 50,
        });
      });
  }, [endDateApi]);
  useEffect(() => {
    // eslint-disable-next-line
    const URLAPI = "https://staging.boronstudio.com/focusapi/api/api.php?action=getTelemetryAndZonesInfoByDateRange&from="+initDateApi+"&to="+endDateApi+"";
    console.log(URLAPI);
    // eslint-disable-next-line
    fetch(URLAPI)
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
          // eslint-disable-next-line
          response.data[i][0]['zoneId'] = i;
          // eslint-disable-next-line
          response.data[i][0]['week']  ='1092021';
          // eslint-disable-next-line
          weekvalues.push(response.data[i][0]);
        }
        // eslint-disable-next-line
        var nuevoJSemana=JSON.parse(JSON.stringify(weekvalues));
        // eslint-disable-next-line
        setWeeklyvalues(nuevoJSemana);
      });
  }, [endDateApi]);
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
  const data = useMemo(() => geoData && updateWeek(geoData, weeklyValues), [[selectedValue]]);
  console.log(geoData);
  console.log(weeklyValues);
  // eslint-disable-next-line max-len
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
