/* eslint-disable react/prop-types,max-len */

import ToyotaYaris from '../assets/images/toyota-yaris.png';

const chartItems = [
  {
    color: '#fff',
    value: 25,
  },
  {
    color: '#c4ffa3',
    value: 50,
  },
  {
    color: '#6fc73f',
    value: 100,
  },
  {
    color: '#ffd300',
    value: 200,
  },
  {
    color: '#ff7800',
    value: 300,
  },
  {
    color: '#f00',
    value: 400,
  },
];

export default function EchoIndexModal(props) {
  const { active, toggle } = props;

  return (
    <div id="modal-fadeInScale-fs" className={`modal modal-full-screen modal-fx-fadeInScale ${active ? 'is-active' : ''}`}>
      <div style={{ paddingRight: 0 }} className="modal-content modal-card">
        <h2 style={{ textAlign: 'left', marginTop: '70px', lineHeight: '0.9' }}>What means</h2>
        <div className="columns mt-0">
          <div className="column is-one-third">
            <h2 style={{ textAlign: 'left', lineHeight: '1' }}>ECHO INDEX?</h2>
            <div className="pt-6">
              <b>Adipiscing</b>
              <div className="columns">
                <div className="column is-half">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Cras non semper diam.
                </div>
                <div className="column is-half">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Cras non semper diam.
                </div>
              </div>
            </div>
          </div>
          <div className="column is-one-third pl-6 pt-6">
            <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non semper diam. Pellentesque ultricies elit ut scelerisque fringilla</b>
            <br />
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non semper diam. Pellentesque ultricies
              elit ut scelerisque fringilla. Cras convallis pulvinar ante nec auctor. Nulla aliquam eu tellus a accumsan.
              Mauris dapibus, risus id auctor pellentesque, turpis mauris pretium sem, eget pulvinar tellus mauris ut tortor
            </p>
            <br />
            <br />
            <div style={{ border: 'solid rgba(0,0,0,0.2) 2px', padding: '30px' }}>
              <p style={{ letterSpacing: '3px', fontWeight: 'bold', fontSize: '0.5rem' }}>ESCALA TITLE</p>
              <div style={{ display: 'flex', marginTop: '10px' }}>
                {chartItems.map((item) => (
                  <div key={item.value} style={{ flexGrow: 1 }}>
                    <div style={{ borderBottom: `solid 2px ${item.color}` }} />
                    <div style={{ textAlign: 'right', fontSize: '0.5rem' }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="column is-one-third">
            <img src={ToyotaYaris} alt="toyota yaris" />
          </div>
          <button type="button" className="padded-close-button boxy-outline" aria-label="close" onClick={toggle}>
            CLOSE
          </button>
        </div>
        <div className="columns modal-container" />
      </div>
    </div>
  );
}
