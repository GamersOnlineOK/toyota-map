import externalModuleSmallImg from '../assets/images/modulo-externo-small-about-modal.png';
import externalModuleSmallP2Img from '../assets/images/modulo-externo-small-p2-about-modal.png';
// import devicePieces from '../assets/images/dispositivo-dislocado-about-modal.png';
import devicePieces from '../assets/images/dispositivo-dislocado-text.png';
import carImage from '../assets/images/cuanto-tiempo-circula-hibrido-modo-electrico.png';
import profilePicture from '../assets/images/profile-picture.png';
import Collapsable from './collapsable';

export default function AboutModal(props) {
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
        <div className="columns modal-container">
          <div className="column is-two-fifths pr-6">
            <p>
              El Proyecto Echo Index es un sistema de recolección de datos sobre diferentes aspectos
              relativos a la salud de los espacios y el impacto que
              puede tener en la vida de los seres vivos.
            </p>
            <br />
            <p>
              Las diferentes magnitudes relevadas son comunicadas a un servicio en la nube a
              través del smartphone de los colaboradores, donde son almacenados y preparados para el
              cálculo del índice Echo de calidad ambiental.
            </p>
            <br />
            <p>
              Dicho índice comprende desde magnitudes simples y perceptibles por una persona,
              como la temperatura ambiente e intensidad sonora, hasta parámetros más sutiles y
              solo perceptibles a través de instrumentos especiales, como el nivel CO2 junto
              con la cantidad de partículas y compuestos orgánicos en el aire.
            </p>
          </div>
          <div className="column is-two-fifths pr-6">
            <p>
              Estos datos se envían de forma anónima y geolocalizada a la nube, conformando
              la arquitectura del sistema completo compuesto por varios sensores Echo en
              movimiento constante. Este movimiento permite generar un
              mapa dinámico de la calidad ambiental, de cada zona del país.
            </p>
          </div>
          <div className="column is-one-fifth">
            <p><b>Modulo externo</b></p>
            {/* <p>Dispositivo integrado</p> */}
            <img style={{ width: '237px', margin: '10px 0px' }} src={externalModuleSmallImg} alt="external module" />
            <img style={{ width: '237px' }} src={externalModuleSmallP2Img} alt="external module part 2" />
            <small>
              <small>
                Previsualizacion del dispositivo
                <br />
                {' '}
                integrado en el auto
              </small>
            </small>
          </div>
        </div>
        <p><b>Dispositivo dislocado</b></p>
        <div style={{ marginBottom: '70px' }} className="columns is-full">
          <img src={devicePieces} alt="device pieces" />
        </div>
        {/* <div className="columns is-full"> */}
        {/*  <div className="columns device-indicators"> */}
        {/*    <div style={{ marginLeft: '20%' }} className="column indicator"> */}
        {/*      <p>Carcasa</p> */}
        {/*    </div> */}
        {/*    <div style={{ marginLeft: '30%' }} className="column indicator"> */}
        {/*      <p>Paragolpes</p> */}
        {/*    </div> */}
        {/*    <div style={{ marginLeft: '9%' }} className="column indicator"> */}
        {/*      <p>Sello adhesivo</p> */}
        {/*    </div> */}
        {/*    <div className="column indicator"> */}
        {/*      <p>Pieza frontal</p> */}
        {/*    </div> */}
        {/*  </div> */}
        {/* </div> */}
        <img style={{ minWidth: 'calc(100% + 300px)', marginLeft: '-150px' }} src={carImage} alt="car" />
        <div className="section" />
        <h3>About Curcio Capitals</h3>
        <div style={{ marginTop: '20px' }} className="columns">
          <div className="column is-three-fifths pr-6">
            <p className="pr-6">
              Echo Index es un proyecto impulsado por Curcio Capitals, apoyado sobre sus valores,
              principios y creencias. Bajo los paraguas de “mejora contínua”, “respeto hacia
              las personas” y “crecimiento sustentable”, la compañía persigue el ideal
              de siempre procurar superarse a sí misma, cuidando a las personas y al Medio Ambiente.
              Esta tarea la lleva a cabo mediante la introducción de tecnologías,
              productos y servicios que contribuyan al bienestar ambiental
              y hagan más sencilla la vida de las personas en el mundo.
            </p>
            <br />
            <br />
            <br />
            <b style={{ fontSize: '1.3rem' }}>Curcio Capitals, históricamente ha llevado adelante diferentes iniciativas que reflejan esta filosofía.</b>
          </div>
          <div className="column is-two-fifths">
            <img style={{ width: '70%' }} src={profilePicture} alt="" />
          </div>
        </div>
        <Collapsable />
      </div>
    </div>
  );
}
