import React from 'react';
import ReactDOM from 'react-dom';
// @withvoid/melting-pot components
// import useWindowSize from '../src/useWindowSize';
import { useWindowSize } from '../src';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'yellow',
  },
  button: {
    margin: '0 15px',
    padding: 15,
    height: 40,
    backgroundColor: 'teal',
    color: '#fff',
    border: 0,
  },
};

const App = () => {
  const size = useWindowSize();
  return (
    <div style={styles.root}>
      <p>{JSON.stringify(size)}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
