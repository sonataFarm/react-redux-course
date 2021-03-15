import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {

  const [ open, setOpen ] = useState(false);
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      if (ref.current && ref.current.contains(e.target)) {
        return;
      }

      setOpen(false);
    });
  }, []);

  const renderedOptions = options.filter(
    o => o.value != selected.value
  ).map((option) => {
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => { onSelectedChange(option)}}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form" ref={ref}>
      <div className="field">
        <label className="label">{ label }</label>
        <div
          onClick={(e) => setOpen(!open) }
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
