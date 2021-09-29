/* eslint-disable react/prop-types */
export default function AboutModal(props) {
  const { active, toggle } = props;

  return (
    <div id="about-modal" className={`modal modal-full-screen modal-fx-fadeInScale ${active ? 'is-active' : ''}`}>
      <div className="modal-content modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Modal title</p>
          <button type="button" className="modal-button-close delete" aria-label="close" onClick={toggle} />
        </header>
        <section className="modal-card-body">
          ABOUT THE PROJECT
        </section>
        <footer className="modal-card-foot">
          <button type="button" className="modal-button-close button is-success">Save changes</button>
          <button type="button" className="modal-button-close button">Cancel</button>
        </footer>
      </div>
    </div>
  );
}
