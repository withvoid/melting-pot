import React from 'react';
import ReactDOM from 'react-dom';

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
  const [count, setCount] = React.useState(1);
  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
  return (
    <div style={styles.root}>
      <button type="button" style={styles.button} onClick={decrement}>
        -
      </button>
      <p>Count {count}</p>
      <button type="button" style={styles.button} onClick={increment}>
        +
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
