export default function ValueDescription(props) {
  const { showValueDescription, setShowValueDescription } = props;

  const closeSelectedValue = () => {
    setShowValueDescription(null);
  };

  return (
    <div className={`map-legend-container ${showValueDescription ? '' : 'map-legend-container-hide'}`}>
      <div style={{ background: 'none' }} className="notification">
        <button onClick={closeSelectedValue} type="button" className="delete" aria-label="close-button" />
        <h5 style={{ }}>{showValueDescription && showValueDescription.title}</h5>
        <p style={{ color: 'white' }}>{showValueDescription && showValueDescription.description}</p>
      </div>
    </div>
  );
}
