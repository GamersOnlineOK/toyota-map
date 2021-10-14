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
    }, 10000);
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
      <div style={{ height: '110vh', background: 'rgba(0,0,0,0.5)' }} className="has-text-centered columns is-vcentered">
        <div className="column is-centered has-text-centered is-halfheight intro-container pl-6 pr-6">
          <h1 style={{ fontSize: '1.5rem' }}>ECHO Index</h1>
          <br />
          <p style={{ color: 'white' }} className="intro-p">
            Mide algunos de los factores más importantes
            {' '}
            <br />
            {' '}
            relacionados con la salud de los lugares.
            <br />
            <br />
            Marcá con el cursor cuál deseas conocer y
            {' '}
            <br />
            {' '}
            desplazate por el mapa
          </p>
          <br />
          <div className="preview-line" />
        </div>
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
