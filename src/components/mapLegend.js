/* eslint-disable react/prop-types */
const chartItems = [
  {
    color: '#00ff02',
    value: 25,
  },
  {
    color: '#93bd5b',
    value: 50,
  },
  {
    color: '#017f01',
    value: 100,
  },
  {
    color: '#fefe01',
    value: 200,
  },
  {
    color: '#ff9966',
    value: 300,
  },
  {
    color: '#fe0000',
    value: 400,
  },
];

export default function MapLegend(props) {
  const { toggleValueDescription, selectedValue } = props;

  return (
    <div className="value-legend">
      <p style={{ letterSpacing: '3px' }}>Categorias del ICAire</p>
      <div style={{ display: 'flex', marginTop: '10px' }}>
        <div style={{
          textAlign: 'right', fontSize: '0.8em', paddingTop: '11px', fontWeight: 'bold',
        }}
        >
          0
        </div>
        {chartItems.map((item) => (
          <div key={item.value} style={{ flexGrow: 1 }}>
            <div style={{ borderBottom: `solid 1px ${item.color}` }} />
            <div style={{
              textAlign: 'right', paddingTop: '10px', fontSize: '0.8em', fontWeight: 'bold',
            }}
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>
      <button
        className={selectedValue !== '' ? 'map-legend-button' : 'opacity-0'}
        type="button"
        onClick={toggleValueDescription}
      >
        <span style={{ marginRight: '7px' }} className="map-legend-exclamation">!</span>
        What is this
      </button>
    </div>
  );
}
