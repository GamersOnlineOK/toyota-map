/* eslint-disable react/jsx-one-expression-per-line */
import { useEffect, useState } from 'react';
import * as React from 'react';
import DatePicker from 'react-datepicker';
import addDays from 'date-fns/addDays';
import $ from 'jquery';
import Map from '../components/map';
import Layout from './Layout';
import ControlPanel from '../components/controlPanel';
import { ReactComponent as CurcioLogo } from '../assets/images/logo-curcio.svg';
import CurcioLogoChico from '../assets/images/logo-curcio-chico.png';
import MapLegend from '../components/mapLegend';
import EchoIndexModal from '../components/echoIndexModal';
import AboutModal from '../components/aboutModal';
import ValueDescription from '../components/valueDescription';

const dropdownOptions = [
  {
    id: '1092021',
    text: <p><b>September 2021</b> &nbsp;First Week</p>,
  },
  {
    id: '2092021',
    text: <p><b>September 2021</b> &nbsp;Second Week</p>,
  },
  {
    id: '3092021',
    text: <p><b>September 2021</b> &nbsp;Third Week</p>,
  },
  {
    id: '4092021',
    text: <p><b>September 2021</b> &nbsp;Fourth Week</p>,
  },
];

const valueOptions = [
  {
    id: 'pm2.5',
    text: 'PM2.5',
    title: 'PM2.5',
    description: 'La materia articulada fina o PM2.5 es un contaminante del aire que es una preocupación para la salud en altos niveles. Las partículas de este tamaño pueden viajar profundamente en el tracto respiratorio y llegar a los pulmones. Provienen principalmente de los escapes de automotores.',
  },
  {
    id: 'pm10',
    text: 'PM10',
    title: 'PM10',
    description: 'Estas partículas pueden permanecer en la atmósfera suspendidas desde días a semanas y viajar largas distancias. Provienen de fuentes como: humo, polvo suciedad, la construcción, agricultura, fuentes industriales, escapes de automotores.',
  },
  {
    id: 'db',
    text: 'DB',
    title: 'DB',
    description: 'La contaminación sonora, es la propagación del ruido y tiene diversos impactos en la actividad humana y animal. La mayoría de ellos dañinos, como enfermedades cardiovasculares. En los animales, aumenta el riesgo de detección de depredadores, problemas en la reproducción y pérdida de audición.',
  },
  {
    id: 'voc',
    text: 'VOC',
    title: 'VOC',
    description: 'Son compuestos orgánicos volátiles, que se emiten como gases a partir de ciertos sólidos o líquidos. Los VOC incluyen algunos productos químicos con efectos adversos en la salud. Productos de limpieza pinturas, combustibles, son algunos de sus ejemplos.',
  },
  {
    id: 'uv',
    text: 'UV',
    title: 'UV',
    description: 'La radiación ultravioleta (UV) es una forma de radiación electromagnética que proviene mayormente del Sol. La exposición sin cuidado a los mismos dañan las células de la piel, lo que puede terminar provocando diferentes tipos de enfermedades.',
  },
];

export default function MapPage() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isPageChange, setPageChange] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setPageChange(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const [selectedWeek, setWeek] = useState(dropdownOptions[0]);
  const selectWeek = (id) => {
    // Load week data to map for selected value
    const week = dropdownOptions.find((w) => w.id === id);
    setWeek(week);
  };

  const [showValueDescription, setShowValueDescription] = useState(null);
  // const [showBtnWhatIsThis, setshowBtnWhatIsThis] = useState(false);
  const [selectedValue, setValue] = useState({
    id: 'pm2.5', text: 'PM2.5', title: 'PM2.5', description: 'La materia articulada fina o PM2.5 es un contamina…nen principalmente de los escapes de automotores.',
  });
  const selectValue = (id) => {
    // Load value data to map for selected week
    const val = valueOptions.find((v) => v.id === id);
    setValue(val);
    if (showValueDescription) {
      setShowValueDescription(val);
      // setshowBtnWhatIsThis(true);
    }
  };
  const toggleValueDescription = () => {
    setShowValueDescription(selectedValue);
  };

  const [showEchoIndexModal, setShowEchoIndexModal] = useState(false);
  const [playVideo, setPlayvideo] = useState(false);
  const toggleEchoIndexModal = () => {
    setPlayvideo(!playVideo);
    setShowEchoIndexModal(!showEchoIndexModal);
    if (playVideo) {
      $('#videoIndexModal').attr('src', '');
    } else {
      $('#videoIndexModal').attr('src', 'https://www.youtube.com/embed/bzCuN5SVMQ8');
    }
  };
  const [showAboutModal, setShowAboutModal] = useState(false);
  const toggleAboutModal = () => {
    setShowAboutModal(!showAboutModal);
    if (playVideo) {
      $('#videoAboutModal').attr('src', '');
    } else {
      $('#videoAboutModal').attr('src', 'https://www.youtube.com/embed/bzCuN5SVMQ8');
    }
  };
  const [isActive, setActive] = useState(false);
  const toggleDropdown = () => {
    setActive(!isActive);
  };
  const [textDatepicker, setTextdatepicker] = useState('Seleccione una Fecha');
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if (end != null) {
      setActive(!isActive);
    }
    // eslint-disable-next-line
    if ((start !== null) && (end !== null)) {
      // eslint-disable-next-line
      const text = start.getDate() + '-' + (start.getMonth()+1) + '-' + start.getFullYear() + ' al ' + end.getDate() + '-' + (end.getMonth()+1) + '-' + end.getFullYear()
      setTextdatepicker(text);
    }
    const btnOutSideMonth = document.getElementsByClassName('react-datepicker__day--outside-month');
    btnOutSideMonth.disabled = true;
  };

  return (
    // eslint-disable-next-line max-len
    <Layout toggleEchoIndexModal={toggleEchoIndexModal} toggleAboutModal={toggleAboutModal} showAboutModal={showAboutModal} showEchoIndexModal={showEchoIndexModal}>
      <div className={`default-background loading-screen fade-out-fast ${isPageChange ? 'is-hidden' : ''}`} />
      <EchoIndexModal toggle={toggleEchoIndexModal} active={showEchoIndexModal} />
      <AboutModal toggle={toggleAboutModal} active={showAboutModal} />
      <div id="main-info-container" className="controls-container opacity-0 fade-in-delay-2">
        <h1>MONTEVIDEO</h1>
        <div>
          <div className={isActive ? 'dropdown is-active' : 'dropdown'}>
            <div className="dropdown-trigger">
              <button type="button" className={`button dropdown-control ${isActive ? 'green-border' : ''}`} aria-haspopup="true" aria-controls="dropdown-menu" onClick={toggleDropdown}>
                <span>{textDatepicker}</span>
                <span className={`icon is-small dropdown-arrow ${isActive ? 'green-border' : ''}`}>
                  {/* <i className="fas fa-angle-down" aria-hidden="true" /> */}
                </span>
              </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className={`dropdown-content ${isActive ? 'green-border' : ''}`} style={{ marginTop: '-2px' }}>
                <button
                  type="button"
                  style={{ backgroundColor: 'black', border: '1px solid rgba(249, 249, 249, 0.4)', paddingBottom: '4px' }}
                >
                  <DatePicker
                    selected={startDate}
                    onChange={onChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    inline
                    maxDate={addDays(new Date(), 0)}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <ControlPanel
          dropdownOptions={dropdownOptions}
          selectedWeek={selectedWeek}
          selectWeek={selectWeek}
          valueOptions={valueOptions}
          selectedValue={selectedValue}
          selectValue={selectValue}
        />
      </div>
      <div className="map-mobile-overlay is-hidden-tablet" />
      <div className="map-container">
        <Map
          width="100%"
          selectedWeek={selectedWeek}
          selectedValue={selectedValue}
          startDate={startDate}
          endDate={endDate}
        />
      </div>
      <div className="bottom-container columns opacity-0 fade-in-delay-3">
        <div className="investor-logo column">
          <CurcioLogo className="is-hidden-mobile" />
          <img src={CurcioLogoChico} className="is-hidden-tablet" alt="curcio" />
        </div>
        <div className="column"><MapLegend toggleValueDescription={toggleValueDescription} selectedValue={selectedValue} /></div>
      </div>
      <ValueDescription
        showValueDescription={showValueDescription}
        setShowValueDescription={setShowValueDescription}
      />
    </Layout>
  );
}
