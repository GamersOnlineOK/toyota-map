import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Lottie from 'react-lottie-player';
import * as Routes from '../constants/routes';
import { ReactComponent as EchoLogo } from '../assets/images/logo-white.svg';
import GlobeVid from '../assets/video/globe.webm';
import UneaLogo from '../assets/images/unea-logo-white.png';
import echoAnimation from '../assets/lotties/echo.json';

export default function IntroPage() {
  const history = useHistory();

  const [isLoaded, setLoaded] = useState(false);
  const [isVideoLoaded, setVideoLoaded] = useState(false);
  const [loaderFinished, setLoaderFinished] = useState(false);
  const [loadedFadeOut, setLoadedFadeOut] = useState(false);
  const [isPaused, setPaused] = useState(false);

  const onLoadedVideo = () => {
    setVideoLoaded(true);
  };

  useEffect(() => {
    if (isVideoLoaded && loaderFinished) {
      // unpause animation and fade out
      const timer = setTimeout(() => {
        setPaused(false);
        const timer2 = setTimeout(() => {
          setLoadedFadeOut(true);
          const timer3 = setTimeout(() => {
            setLoaded(true);
          }, 1000);
          return () => clearTimeout(timer3);
        }, 800);
        return () => clearTimeout(timer2);
      }, 1000);
      return () => clearTimeout(timer);
    }

    return false;
  }, [isVideoLoaded, loaderFinished]);

  const pauseTimeout = (pause, time, cb) => {
    setPaused(pause);
    const timer = setTimeout(() => {
      cb();
    }, time);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    pauseTimeout(false, 1500, () => {
      pauseTimeout(true, 1300, () => {
        pauseTimeout(false, 1000, () => {
          pauseTimeout(true, 1100, () => {
            pauseTimeout(false, 800, () => {
              setPaused(true);
              setLoaderFinished(true);
            });
          });
        });
      });
    });
  }, []);

  const [isPageChange, setPageChange] = useState(false);
  const clickEnter = () => {
    setPageChange(true);
    const timer = setTimeout(() => {
      history.push(Routes.MAP_PREVIEW);
      return () => clearTimeout(timer);
    }, 500);
  };

/*
  const echoLottieOptions = {
    loop: false,
    autoplay: true,
    animationData: echoAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const echoLottieOptions = {
    loop={false}
    autoplay= {true}
    animationData= {echoAnimation}
    rendererSettings= {
      preserveAspectRatio: 'xMidYMid slice',
    }
  };*/


  return (
    <>
      <div className={`default-background loading-screen opacity-0 ${isPageChange ? 'fade-in-fast' : 'is-hidden'}`} />
      <div
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}
        className={`default-background loading-screen  ${loadedFadeOut ? 'loaded-fade-out' : ''} ${isLoaded ? 'is-hidden' : ''}`}
      >
        <Lottie
          loop={false}
          autoplay= {true}
          animationData= {echoAnimation}
          rendererSettings= {
            preserveAspectRatio: 'xMidYMid slice',
          }
        />
      
      </div>
      <div className="show-loaded">
        <video autoPlay loop muted id="globe-video" onLoadedData={onLoadedVideo} className={`${isLoaded ? 'animate-up' : ''}`}>
          <source src={GlobeVid} type="video/webm" />
        </video>
        <div style={{ height: '100vh' }} className="container default-background">
          <div style={{ height: '100vh' }} className="columns is-vcentered">
            <div className="column is-half intro-container">
              <div id="start" className={`is-halfheight intro-p-container ${isLoaded ? 'text-animate-up' : ''}`}>
                <div className="mask" style={{ height: '37px' }}>
                  <EchoLogo className={`text-animation-up ${isLoaded ? 'show' : ''}`} style={{ display: 'inline-block' }} />
                </div>
                <p style={{ paddingTop: '40px', textAlign: 'left' }} className={`intro-p is-2 opacity-0 ${isLoaded ? 'fade-in' : ''}`}>
                  La asamblea Ambiental de las Naciones Unidas concluye con un urgente
                  llamado a la acción para resolver las emergencias planetarias.
                  {' '}
                  <br />
                  <br />
                </p>
                <div className={`unea-logo-wrapper  opacity-0 ${isLoaded ? 'fade-in-delay-1' : ''}`}>
                  <img className="une-logo" src={UneaLogo} alt="UNEA logo" />
                </div>
                <button className={`opacity-0 intro-button ${isLoaded ? 'fade-in-delay-1' : ''}`} type="button" onClick={clickEnter}>ENTER</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
