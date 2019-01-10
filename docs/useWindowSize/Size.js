import React from 'react';
import PropTypes from 'prop-types';
// Components
import Emoji from '../components/Emoji';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#B61173',
  },
  paragraph: {
    margin: 10,
    padding: 0,
    fontSize: 28,
    color: '#fff',
    textAlign: 'center',
  },
  empashis: {
    color: '#000',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
};

const Size = ({ width, height }) => {
  return (
    <div style={styles.root}>
      <p style={styles.paragraph}>
        <Emoji emoji="🤪🤪🤩" />
        Width <span style={styles.empashis}>{width} px</span>
        <Emoji emoji="🤩" />
        Height <span style={styles.empashis}>{height} px</span>
        <Emoji emoji="🤩🤪🤪" />
      </p>
      <p style={styles.paragraph}>
        <Emoji emoji="✌🏻" />
        Resize Browser & Watch The Emoji Change At 800px
        <Emoji emoji="✌🏻" />
      </p>
      <p style={styles.paragraph}>
        {[...Array(8).keys()].map(i => (
          <Emoji key={i} emoji={width <= 800 ? '🐶' : '🦅'} />
        ))}
      </p>
    </div>
  );
};

Size.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default Size;
