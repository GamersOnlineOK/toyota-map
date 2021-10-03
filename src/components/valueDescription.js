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
        <h5 style={{
          marginLeft: '-120px', fontWeight: 'bold', fontSize: '2em', textDecoration: 'underline #00ff9d', paddingBottom: '10px', textUnderlineOffset: '20px',
        }}
        >
          {showValueDescription && showValueDescription.title}
        </h5>
        <p style={{ color: 'white', marginTop: '-20px' }}>{showValueDescription && showValueDescription.description}</p>
      </div>
    </div>
  );
}
