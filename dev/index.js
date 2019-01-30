import React from 'react';
import ReactDOM from 'react-dom';

import { useWindowSize, useToggle  } from '../src';

const App = () => {
  const isOn = true;
  const { width } = useWindowSize();
  const {on, toggle} = useToggle(isOn);

  return (
    <div>
      <p>width is {width}px.</p>
      <button onClick={toggle}>
        {on ? 'on' : 'off'}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
