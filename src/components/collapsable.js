const items = [
  {
    title: 'Toyota Hybrid Synergy Drive.',
    subtitle: 'Introducción y liderazgo en tecnologías híbridas',
  },
  {
    title: 'The Hy Project',
    subtitle: '(Fast Company´s World Changing Idea, SXSW & Cannes Lions Winner)',
  },
  {
    title: 'Huerta en Sede Ayax',
    subtitle: '(Sustentabilidad & Economía Naranja)',
  },
];

export default function Collapsable() {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.title}
          style={{
            borderBottom: 'black solid 1px', paddingLeft: 0, paddingRight: 0, position: 'relative',
          }}
          className="column"
        >
          <div style={{
            top: '35px',
            right: 0,
            position: 'absolute',
            border: 'solid black 1px',
            width: '35px',
            height: '35px',
          }}
          />
          <h4 style={{ fontSize: '2rem', color: 'black' }}>{item.title}</h4>
          <h5 style={{ color: 'black' }}>{item.subtitle}</h5>
        </div>
      ))}
    </div>
  );
}
