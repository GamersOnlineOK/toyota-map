import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Routes from '../constants/routes';
import { ReactComponent as EchoLogo } from '../assets/images/logo-white.svg';
import GlobeVid from '../assets/video/globe.webm';

export default function IntroPage() {
  const history = useHistory();

  const [isLoaded, setLoaded] = useState(false);
  const [fillBar, setFillBar] = useState(false);
  const [loadedFadeOut, setLoadedFadeOut] = useState(false);
  const onLoadedVideo = () => {
    const timer = setTimeout(() => {
      setFillBar(true);
      const timer2 = setTimeout(() => {
        setFillBar(false);
        const timer3 = setTimeout(() => {
          setLoadedFadeOut(true);
          const timer4 = setTimeout(() => {
            setLoaded(true);
          }, 1000);
          return () => clearTimeout(timer4);
        }, 3000);
        return () => clearTimeout(timer3);
      }, 1000);
      return () => clearTimeout(timer2);
    }, 2000);
    return () => clearTimeout(timer);
  };

  const [isPageChange, setPageChange] = useState(false);
  const clickEnter = () => {
    setPageChange(true);
    const timer = setTimeout(() => {
      history.push(Routes.MAP_PREVIEW);
      return () => clearTimeout(timer);
    }, 500);
  };

  return (
    <>
      <div className={`default-background loading-screen opacity-0 ${isPageChange ? 'fade-in-fast' : 'is-hidden'}`} />
      <div className={`default-background loading-screen  ${loadedFadeOut ? 'loaded-fade-out' : ''} ${isLoaded ? 'is-hidden' : ''}`}>
        <div className={`loading-logo ${fillBar ? 'fully-loaded' : ''}`} />
      </div>
      <div className="show-loaded">
        <video autoPlay loop muted id="globe-video" onLoadedData={onLoadedVideo} className={`${isLoaded ? 'animate-up' : ''}`}>
          <source src={GlobeVid} type="video/webm" />
        </video>
        <div style={{ height: '100vh' }} className="container default-background">
          <div style={{ height: '100vh' }} className="columns is-vcentered">
            <div className="column is-half intro-container">
              <div className={`is-centered has-text-centered is-halfheight intro-p-container ${isLoaded ? 'text-animate-up' : ''}`}>
                <div className="mask" style={{ height: '37px' }}>
                  <EchoLogo className={`text-animation-up ${isLoaded ? 'show' : ''}`} style={{ display: 'inline-block' }} />
                </div>
                <p style={{ padding: '60px' }} className={`intro-p has-text-centered is-2 opacity-0 ${isLoaded ? 'fade-in' : ''}`}>
                  UN Environment Assembly concludes with an urgent call for action
                  to solve planetary emergencies”
                  {' '}
                  <br />
                  <br />
                  Introducing Echo Index, un proyecto para medir el estado de salud
                  de los lugares y el efecto en la vida humana, en tiempo real.
                </p>
                <button className={`opacity-0 intro-button ${isLoaded ? 'fade-in-delay-1' : ''}`} type="button" onClick={clickEnter}>ENTER</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
