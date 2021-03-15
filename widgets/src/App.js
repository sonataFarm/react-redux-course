import React, { useState } from 'react';

import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';


const options = [
  {
    label: "Red",
    value: 'red'
  },
  {
    label: "Green",
    value: 'green'
  },
  {
    label: "Blue",
    value: 'blue'
  }
];

const items = [
  {
    title: 'What is React?',
    content: 'React is a front-end JavaScript framework.'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite front-end library among engineers.'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components.'
  },
];

export default () => {
  const [ selected, setSelected ] = useState(options[0]);

  return (
    <div>
    <Header />
      <Route path='/'>
        <Accordion items={items} />
      </Route>

      <Route path='/dropdown'>
        <Dropdown options={options} selected={selected} onSelectedChange={setSelected} label="Choose a color!"/>
      </Route>

      <Route path='/translate'>
        <Translate />
      </Route>

      <Route path='/list'>
        <Search />
      </Route>
    </div>
  );
}
