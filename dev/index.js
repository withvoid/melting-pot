import React from 'react';
import ReactDOM from 'react-dom';

// Components (Use one at a time)
import Size from '../docs/useWindowSize/Size';

const App = () => {
  return (
    <div>
      <Size />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
