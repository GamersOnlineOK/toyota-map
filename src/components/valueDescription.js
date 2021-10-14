export default function ValueDescription(props) {
  const { showValueDescription, setShowValueDescription } = props;

  const closeSelectedValue = () => {
    setShowValueDescription(null);
  };

  return (
    <div className={`map-value-desc-container ${showValueDescription ? '' : 'map-value-desc-container-hide'}`}>
      <div style={{ background: 'none', paddingRight: '0' }} className="notification">
        <button type="button" onClick={closeSelectedValue} className="close-button-wrapper">
          x
        </button>
        <h5 className="map-value-desc-title">
          {showValueDescription && showValueDescription.title}
        </h5>
        <p style={{ color: 'white', marginTop: '-20px' }}>{showValueDescription && showValueDescription.description}</p>
      </div>
    </div>
  );
}
