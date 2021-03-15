import './SeasonDisplay.css';
import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return (lat > 0 ? 'summer' : 'winter');
  } else {
    return (lat > 0 ? 'winter' : 'summer');
  }
}

const SeasonDisplay = props => {
  const seasonConfig = {
    summer: {
      text: "Let's hit the beach",
      iconName: 'sun'
    },
    winter: {
      text: 'Burr, it is chilly',
      iconName: 'snowflake'
    }
  }


  const season = getSeason(props.latitude, new Date().getMonth());
  console.log(new Date().getMonth());

  return (
    <div className={`season-display ${season}`}>
      <i className={`${seasonConfig[season].iconName} icon massive icon-left`}></i>
      <h1>{seasonConfig[season].text}</h1>
      <i className={`${seasonConfig[season].iconName} icon massive icon-right`}></i>
    </div>
  );
};

export default SeasonDisplay;
