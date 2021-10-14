/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import ReactMapGL from 'react-map-gl';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Routes from '../constants/routes';

export default function MapPreview() {
  const history = useHistory();

  const [isPageChange, setPageChange] = useState(false);
  useEffect(() => {
    setPageChange(false);
    const timer = setTimeout(() => {
      history.push(Routes.MAP_PAGE);
      return () => clearTimeout(timer);
    }, 6000);
  }, []);

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '119vh',
    latitude: -34.900290,
    longitude: -56.177892,
    zoom: 13,
    pitch: 60, // pitch in degrees
    bearing: 50,
  });

  return (
    <>
      <div className={`default-background loading-screen fade-out-fast ${isPageChange ? 'is-hidden' : ''}`} />
      <div className="container has-text-centered ">
        <h1>ECHO Index</h1>
        <p style={{ color: 'white' }}>
          Mide algunos de los factores más importantes relacionados con la salud de los lugares.
          <br />
          <br />
          Marcá con el cursor cuál deseas conocer y desplazate por el mapa
        </p>
      </div>
      <div className="map-container">
        <ReactMapGL
          mapboxApiAccessToken="pk.eyJ1IjoiZnJhbmtqcmFuZ2VsIiwiYSI6ImNrdDljMmhocDFhbWYzMnI1eDl2Y2lwYm0ifQ.Op0miDb3t-6zZG61Ai2Z2g"
          {...viewport}
          mapStyle="mapbox://styles/frankjrangel/cktylwl5e0r3a18p6ej97upu0"
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
        />
      </div>
    </>
  );
}
