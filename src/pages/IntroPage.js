import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import * as Routes from '../constants/routes';
import { ReactComponent as EchoLogo } from '../assets/images/logo-white.svg';
import GlobeVid from '../assets/video/globe.webm';

export default function IntroPage() {
  const [isLoaded, setLoaded] = useState(false);
  const [fillBar, setFillBar] = useState(false);
  const loadFully = () => {
    setFillBar(false);
    const timer = setTimeout(() => setLoaded(true), 3000);
    return () => clearTimeout(timer);
  };
  const setupLoaded = () => {
    setFillBar(true);
    const timer = setTimeout(() => loadFully(), 1000);
    return () => clearTimeout(timer);
  };
  const onLoadedVideo = () => {
    const timer = setTimeout(() => setupLoaded(), 2000);
    return () => clearTimeout(timer);
  };

  return (
    <>
      <div className={`loading-screen ${isLoaded ? 'is-hidden' : ''}`}>
        <div className={`loading-logo ${fillBar ? 'fully-loaded' : ''}`} />
      </div>
      <div className="show-loaded">
        <video autoPlay loop muted id="globe-video" onLoadedData={onLoadedVideo}>
          <source src={GlobeVid} type="video/webm" />
        </video>
        <div style={{ height: '100vh' }} className="container default-background">
          <div style={{ height: '100vh' }} className="columns is-vcentered">
            <div className="column is-half intro-container">
              <div className="is-centered has-text-centered is-halfheight">
                <EchoLogo style={{ display: 'inline-block', marginBottom: '10px' }} />
                <p style={{ padding: '60px' }} className="intro-p has-text-centered is-2">
                  UN Environment Assembly concludes with an urgent call for action
                  to solve planetary emergencies”
                  {' '}
                  <br />
                  <br />
                  Introducing Echo Index, un proyecto para medir el estado de salud
                  de los lugares y el efecto en la vida humana, en tiempo real.
                </p>
                <NavLink to={Routes.MAP_PAGE}>
                  <button className="intro-button" type="button">ENTER</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
