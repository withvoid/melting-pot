import React from 'react';
import ReactDOM from 'react-dom';

// Components (Use one at a time)
import Faces from '../examples/useKeyPress/Faces';

const App = () => {
  return (
    <div>
      <Faces />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
