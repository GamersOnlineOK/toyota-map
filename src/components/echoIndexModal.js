/* eslint-disable react/prop-types,max-len */
export default function EchoIndexModal(props) {
  const { active, toggle } = props;

  return (
    <div id="modal-fadeInScale-fs" className={`modal modal-full-screen modal-fx-fadeInScale ${active ? 'is-active' : ''}`}>
      <div className="modal-content modal-card">
        <div className="columns mt-6">
          <h2 className="column is-four-fifths">ABOUT THE PROJECT</h2>
          <div className="column is-one-fifths">
            <button type="button" className="padded-close-button boxy-outline" aria-label="close" onClick={toggle}>
              CLOSE
            </button>
          </div>
        </div>
        <div className="columns">
          <div className="column is-two-fifths">
            <p>El Proyecto Echo Index es un sistema de recolección de datos sobre diferentes aspectos relativos a la salud de los espacios y el impacto que puede tener en la vida de los seres vivos.</p>
            <br />
            <p>Las diferentes magnitudes relevadas son comunicadas a un servicio en la nube a través del smartphone de los colaboradores, donde son almacenados y preparados para el cálculo del índice Echo de calidad ambiental.</p>
            <br />
            <p>Dicho índice comprende desde magnitudes simples y perceptibles por una persona, como la temperatura ambiente e intensidad sonora, hasta parámetros más sutiles y solo perceptibles a través de instrumentos especiales, como el nivel CO2 junto con la cantidad de partículas y compuestos orgánicos en el aire.</p>
          </div>
          <div className="column is-two-fifths">
            <p>Estos datos se envían de forma anónima y geolocalizada a la nube, conformando la arquitectura del sistema completo compuesto por varios sensores Echo en movimiento constante. Este movimiento permite generar un mapa dinámico de la calidad ambiental, de cada zona del país.</p>
          </div>
          <div className="column is-one-fifth">
            pics
          </div>
        </div>

        {/*  <header className="modal-card-head"> */}
        {/*    <p className="modal-card-title">Modal title</p> */}
        {/*  </header> */}
        {/*  <section className="modal-card-body"> */}
        {/*    ECHO INDEX */}
        {/*  </section> */}
        {/*  <footer className="modal-card-foot"> */}
        {/*    <button type="button" className="modal-button-close button">Cancel</button> */}
        {/*  </footer> */}
      </div>
    </div>
  );
}
