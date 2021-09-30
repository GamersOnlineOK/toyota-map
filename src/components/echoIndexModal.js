/* eslint-disable react/prop-types,max-len */

export default function EchoIndexModal(props) {
  const { active, toggle } = props;

  return (
    <div id="modal-fadeInScale-fs" className={`modal modal-full-screen modal-fx-fadeInScale ${active ? 'is-active' : ''}`}>
      <div className="modal-content modal-card">
        <div className="columns mt-6">
          <h2 className="column is-four-fifths">ECHO INDEX</h2>
          <div className="column is-one-fifths">
            <button type="button" className="padded-close-button boxy-outline" aria-label="close" onClick={toggle}>
              CLOSE
            </button>
          </div>
        </div>
        <div className="columns modal-container" />
      </div>
    </div>
  );
}
