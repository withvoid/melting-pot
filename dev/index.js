import React from 'react';
import ReactDOM from 'react-dom';

import { pipe } from '../src';

const App = () => {
  const onCapital = (string = '') => string.toUpperCase();
  const onRemoveSpaces = (string = '') => string.replace(' ', '');
  const onAppendSymbol = symbol => string => {
    return `${string}${symbol}`;
  };
  const onPreAppendSymbol = symbol => string => {
    return `${symbol}${string}`;
  };

  return (
    <div>
      <p>{onAppendSymbol('@')(onRemoveSpaces(onCapital('Adeel Imran')))}</p>
      <p>
        {pipe({
          value: 'Adeel Imran',
          toPipe: [onCapital, onRemoveSpaces, onAppendSymbol('!'), onPreAppendSymbol('==> ')],
        })}
      </p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
