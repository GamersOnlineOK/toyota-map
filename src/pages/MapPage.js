/* eslint-disable react/jsx-one-expression-per-line */
import { useState } from 'react';
import * as React from 'react';
import Map from '../components/map';
import Layout from './Layout';
import ControlPanel from '../components/controlPanel';

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
  },
  {
    id: 'pm10',
    text: 'PM10',
  },
  {
    id: 'db',
    text: 'DB',
  },
  {
    id: 'voc',
    text: 'VOC',
  },
  {
    id: 'uv',
    text: 'UV',
  },
];

export default function MapPage() {
  const [selectedWeek, setWeek] = useState(dropdownOptions[0]);
  const selectWeek = (id) => {
    // Load week data to map for selected value
    const week = dropdownOptions.find((w) => w.id === id);
    setWeek(week);
  };

  const [selectedValue, setValue] = useState(valueOptions[0]);
  const selectValue = (id) => {
    // Load value data to map for selected week
    const val = valueOptions.find((v) => v.id === id);
    setValue(val);
  };

  return (
    <Layout>
      <div className="controls-container">
        <h1>MONTEVIDEO</h1>
        <ControlPanel
          dropdownOptions={dropdownOptions}
          selectedWeek={selectedWeek}
          selectWeek={selectWeek}
          valueOptions={valueOptions}
          selectedValue={selectedValue}
          selectValue={selectValue}
        />
      </div>
      <div className="map-container">
        <Map
          width="100%"
          selectedWeek={selectedWeek}
          selectedValue={selectedValue}
        />
      </div>
    </Layout>
  );
}
