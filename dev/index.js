import React from 'react';
import ReactDOM from 'react-dom';

import { useWindowSize } from '../src';

const App = () => {
  const { width } = useWindowSize();
  return (
    <div>
      <p>width is {width}px.</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
