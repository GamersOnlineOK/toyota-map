import { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const items = [
  {
    id: 1,
    title: 'Toyota Hybrid Synergy Drive.',
    subtitle: 'Introducción y liderazgo en tecnologías híbridas',
    active: true,
    content: '<div style="padding: 0px 20px;"><iframe width="100%" height="600" src="https://www.youtube.com/embed/bzCuN5SVMQ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><div>',
  },
  {
    id: 2,
    title: 'The Hy Project',
    subtitle: '(Fast Company´s World Changing Idea, SXSW & Cannes Lions Winner)',
    active: false,
    content: 'A completar',
  },
  {
    id: 3,
    title: 'Huerta en Sede Ayax',
    subtitle: '(Sustentabilidad & Economía Naranja)',
    active: false,
    content: 'A completar',
  },
];

export default function Collapsable() {
  const [collapsableItems, setCollapsableItems] = useState(items);
  const toggleCollapsable = (itemId) => () => {
    const newItems = collapsableItems.map((item) => {
      const newItem = { ...item };
      if (newItem.id === itemId) {
        newItem.active = !item.active;
      }
      return newItem;
    });

    setCollapsableItems(newItems);
  };

  return (
    <ScrollAnimation animateIn="animate__fadeIn" scrollableParentSelector="#about-modal" offset="5">
      <div>
        {collapsableItems.map((item) => (
          <div
            key={item.title}
            style={{
              borderBottom: 'black solid 1px', paddingLeft: 0, paddingRight: 0, position: 'relative',
            }}
            className="column"
          >
            <button
              className="collapsable-toggle"
              type="button"
              onClick={toggleCollapsable(item.id)}
            >
              {item.active ? '-' : '+'}
            </button>
            <h4 style={{ fontSize: '2rem', color: 'black' }}>{item.title}</h4>
            <h5 style={{ color: 'black' }}>{item.subtitle}</h5>
            <div className={`collapsable-content ${item.active ? 'expanded' : ''}`} dangerouslySetInnerHTML={{ __html: item.content }}>
              {/* {item.content} */}
            </div>
          </div>
        ))}
      </div>
    </ScrollAnimation>
  );
}
