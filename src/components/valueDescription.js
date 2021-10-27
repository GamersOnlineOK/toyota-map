import { useEffect, useState } from 'react';
import closeIcon from '../assets/images/Close-icon.svg';

export default function ValueDescription(props) {
  const { showValueDescription, setShowValueDescription } = props;

  const [showDesc, setShowDesc] = useState(false);

  const closeSelectedValue = () => {
    setShowDesc(false);
    const timer = setTimeout(() => {
      setShowValueDescription(null);
    }, 1000);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    if (showValueDescription) {
      setShowDesc(!!showValueDescription);
    }
  }, [showValueDescription]);

  return (
    <div className={`map-value-desc-container ${showDesc ? 'map-value-desc-container-show' : ''} ${showValueDescription ? '' : 'map-value-desc-container-hide'}`}>
      <div style={{ background: 'none', paddingRight: '0' }} className="notification">
        <button type="button" onClick={closeSelectedValue} className="close-button-wrapper">
          <img src={closeIcon} alt="Close" />
        </button>
        <h5 className="map-value-desc-title">
          {showValueDescription && showValueDescription.title}
        </h5>
        <p className="map-value-desc-text">
          {showValueDescription && showValueDescription.description}
        </p>
      </div>
    </div>
  );
}
