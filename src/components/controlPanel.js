import * as React from 'react';
import { useState } from 'react';

function ControlPanel(props) {
  const {
    dropdownOptions, selectedWeek, selectWeek, valueOptions, selectValue,
  } = props;

  const [isActive, setActive] = useState(false);
  const toggleDropdown = () => {
    setActive(!isActive);
  };

  const proxySelectWeek = (id) => {
    setActive(!isActive);
    selectWeek(id);
  };

  const [activeValueId, setActiveValue] = useState();
  const proxySelectValue = (id) => {
    setActiveValue(id);
    selectValue(id);
  };

  return (
    <div className="control-panel">
      <div className={isActive ? 'dropdown is-active' : 'dropdown'} style={{ visibility: 'hidden' }}>
        <div className="dropdown-trigger">
          <button type="button" className={`button dropdown-control ${isActive ? 'green-border' : ''}`} aria-haspopup="true" aria-controls="dropdown-menu" onClick={toggleDropdown}>
            <span>{selectedWeek.text}</span>
            <span className={`icon is-small dropdown-arrow ${isActive ? 'green-border' : ''}`}>
              {/* <i className="fas fa-angle-down" aria-hidden="true" /> */}
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className={`dropdown-content ${isActive ? 'green-border' : ''}`} style={{ border: '1px solid #00ff9d', marginTop: '-2px' }}>
            {dropdownOptions.map((object) => (
              <button
                type="button"
                id={object.id}
                href="#"
                className="dropdown-item"
                key={object.id}
                onClick={(e) => proxySelectWeek(object.id, e)}
              >
                {object.text}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="property-selector">
        <div className="columns is-multiline is-mobile">
          {valueOptions.map((object) => {
            const className = activeValueId === object.id ? 'is-active' : '';
            return (
              <div key={object.id} className="column is-full pb-1 pt-1">
                <button
                  type="button"
                  className={className}
                  id={object.id}
                  key={object.id}
                  onClick={(e) => proxySelectValue(object.id, e)}
                >
                  {object.text}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default React.memo(ControlPanel);
