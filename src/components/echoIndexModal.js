/* eslint-disable react/prop-types,max-len */

import ScrollAnimation from 'react-animate-on-scroll';
import { useEffect, useState } from 'react';
import ToyotaYaris from '../assets/images/toyota-yaris.png';
import SVG from './svg';
import EchoLogo from '../assets/images/logo-black.svg';

const chartItems = [
  {
    color: '#fff',
    value: 25,
  },
  {
    color: '#c4ffa3',
    value: 50,
  },
  {
    color: '#6fc73f',
    value: 100,
  },
  {
    color: '#ffd300',
    value: 200,
  },
  {
    color: '#ff7800',
    value: 300,
  },
  {
    color: '#f00',
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
      }, 300);
      return () => clearTimeout(timer);
    }
    setActiveModal(false);
    return false;
  }, [active]);

  return (
    <div id="modal-fadeInScale-fs" className={`modal modal-full-screen modal-fx-fadeInScale ${activeModal ? 'is-active' : ''}`}>
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
        <ScrollAnimation animateIn="animate__fadeInUp" animateOnce="true" scrollableParentSelector="#index-modal">
          <h2 style={active ? { animationDuration: '1s', opacity: '1' } : {}} className={`modal-index-title ${active ? 'animated animate__fadeInUp' : ''}`}>What means</h2>
        </ScrollAnimation>
        <div className="columns mt-0">
          <div style={active ? { animationDuration: '1s', opacity: '1' } : {}} className={`column is-one-third ${active ? 'animated animate__fadeInUp' : ''}`}>
            <ScrollAnimation animateIn="animate__fadeInUp" animateOnce="true" scrollableParentSelector="#index-modal">
              <h2 className="modal-index-subtitle">ECHO INDEX?</h2>
              <div className="pt-6">
                <b>Adipiscing</b>
                <div className="columns">
                  <div className="column is-half">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras non semper diam.
                  </div>
                  <div className="column is-half">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras non semper diam.
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div style={active ? { animationDuration: '1s', opacity: '1' } : {}} className={`column is-one-third pt-6 pr-0 ${active ? 'animated animate__fadeInUp' : ''}`}>
            <ScrollAnimation animateIn="animate__fadeInUp" animateOnce="true" scrollableParentSelector="#index-modal">
              <div className="pr-4">
                <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non semper diam. Pellentesque ultricies elit ut scelerisque fringilla</b>
                <br />
                <br />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non semper diam. Pellentesque ultricies
                  elit ut scelerisque fringilla. Cras convallis pulvinar ante nec auctor. Nulla aliquam eu tellus a accumsan.
                  Mauris dapibus, risus id auctor pellentesque, turpis mauris pretium sem, eget pulvinar tellus mauris ut tortor
                </p>
                <br />
                <br />
              </div>
              <div className="scale-container">
                <p style={{ letterSpacing: '3px', fontWeight: 'bold', fontSize: '0.5rem' }}>ESCALA TITLE</p>
                <div style={{ display: 'flex', marginTop: '10px' }}>
                  {chartItems.map((item) => (
                    <div key={item.value} style={{ flexGrow: 1 }}>
                      <div style={{ borderBottom: `solid 2px ${item.color}` }} />
                      <div style={{
                        textAlign: 'right', fontSize: '0.7rem', paddingTop: '10px', fontWeight: 'bold',
                      }}
                      >
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div style={active ? { animationDuration: '1s', opacity: '1' } : {}} className={`column is-one-third pl-0 ${active ? 'animated animate__fadeInUp' : ''}`}>
            <ScrollAnimation animateIn="animate__fadeInUp" animateOnce="true" scrollableParentSelector="#index-modal">
              <img src={ToyotaYaris} alt="toyota yaris" />
            </ScrollAnimation>
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
