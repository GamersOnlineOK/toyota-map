/* eslint-disable react/prop-types,max-len */

import ScrollAnimation from 'react-animate-on-scroll';
import { useEffect, useState } from 'react';
import ToyotaYaris from '../assets/images/toyota-yaris.png';
import SVG from './svg';
import EchoLogo from '../assets/images/logo-black.svg';

const chartItems = [
  {
    color: '#00ff02',
    value: 25,
  },
  {
    color: '#93bd5b',
    value: 50,
  },
  {
    color: '#017f01',
    value: 100,
  },
  {
    color: '#fefe01',
    value: 200,
  },
  {
    color: '#ff9966',
    value: 300,
  },
  {
    color: '#fe0000',
    value: 400,
  },
];

export default function EchoIndexModal(props) {
  const { active, toggle } = props;

  const [activeModal, setActiveModal] = useState(false);
  useEffect(() => {
    if (active) {
      const timer = setTimeout(() => {
        setActiveModal(true);
      }, 650);
      return () => clearTimeout(timer);
    }
    setActiveModal(false);
    return false;
  }, [active]);

  return (
    <div id="modal-fadeIn-fs" className={`modal modal-full-screen modal-fx-fadeIn ${activeModal ? 'is-active' : ''}`}>
      <div id="index-modal" className="modal-content modal-card modal-index">
        <div style={{ marginTop: '40px' }} className="modal-nav is-hidden-tablet">
          <SVG svgImage={EchoLogo} className="nav-logo" />
          <button
            type="button"
            onClick={toggle}
            className="close-button-wrapper"
            style={{
              color: '#979797', marginTop: '-13px', width: '45px', height: '45px',
            }}
          >
            x
          </button>
        </div>
        <div style={active ? { animationDuration: '3s', opacity: '1' } : {}} className={` ${active ? 'animated animate__fadeInUp animate__delay-2s' : ''}`}>
        </div>
        <div className="columns mt-6 echo-container">
          <div style={active ? { animationDuration: '3s', opacity: '1' } : {}} className={`column is-one-third ${active ? 'animated animate__fadeInUp animate__delay-2s' : ''}`}>
            <ScrollAnimation animateIn="animate__fadeInUp" animateOnce="true" scrollableParentSelector="#index-modal">
              <h2 className="modal-index-subtitle">ECHO INDEX</h2>
              <div style={active ? { animationDuration: '2s' } : {}} className={`column opacity-0 is-one-third pl-0 ${active ? 'fade-in-delay-1 animate__fadeInUp' : ''}`}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <ScrollAnimation animateIn="animate__fadeInUp" animateOnce="true" scrollableParentSelector="#index-modal">
                <div className="pr-4">
                  <b>El Proyecto Echo Index surge como una respuesta necesaria a las emergencias ambientales planetarias.</b>
                  <br />
                  <br />
                  <p>
                  Se trata de la primera red dinámica encargada de medir el estado de salud medioambiental en
                  tiempo real, compuesta por una flota de vehículos que funciona como una red interconectada
                  que captura data, la almacena en la nube y la procesa, para crear el índice Echo, 
                  un algoritmo específico de Toyota para medir el estado de salud de los lugares. 
                  </p>
                  <b>El Proyecto Echo Index surge como una respuesta necesaria a las emergencias ambientales planetarias.</b>
                  <br />
                  <br />
                </div>
              </ScrollAnimation>
            </div>
          </div>
            </ScrollAnimation>
          </div>
          <div style={active ? { animationDuration: '4s' } : {}} className={`column opacity-0 is-one-third pl-0 ${active ? 'fade-in-delay-3' : ''}`}>
            <div
              className="toyota-yaris-background"
              style={{
                backgroundImage: `url(${ToyotaYaris}`,
              }}
            >
              <img className="is-hidden-tablet" src={ToyotaYaris} alt="toyota yaris" />
            </div>
          </div>
          <button type="button" className="padded-close-button boxy-outline is-hidden-mobile" aria-label="close" onClick={toggle}>
            CLOSE
          </button>
        </div>
        <div className="columns modal-container" />
      </div>
    </div>
  );
}
