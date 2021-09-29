/* eslint-disable react/prop-types */
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

export default function MapLegend(props) {
  const { toggleValueDescription } = props;

  return (
    <div className="value-legend">
      <p style={{ letterSpacing: '3px' }}>Categorias del ICAire</p>
      <div style={{ display: 'flex', marginTop: '10px' }}>
        {chartItems.map((item) => (
          <div key={item.value} style={{ flexGrow: 1 }}>
            <div style={{ borderBottom: `solid 1px ${item.color}` }} />
            <div style={{ textAlign: 'right' }}>{item.value}</div>
          </div>
        ))}
      </div>
      <button type="button" style={{ marginTop: '10px' }} onClick={toggleValueDescription}>What is this?</button>
    </div>
  );
}
