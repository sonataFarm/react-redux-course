import React, { useState } from 'react';


const Accordion = ({ items }) => {
  const [ activeIndex, setActiveIndex ] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  }

  const renderedItems = items.map(((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${index === activeIndex ? 'active' : null}`}
          onClick={() => onTitleClick(index)}

        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${index === activeIndex ? 'active' : null}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  }));

  return (
    <div>
      <div className="ui styled accordion">{renderedItems}</div>
      <h1>{activeIndex}</h1>
    </div>
  );
};

export default Accordion;
