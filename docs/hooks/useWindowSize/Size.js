import React from 'react';
import PropTypes from 'prop-types';

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
        <span role="img" aria-label="emoji">
          🤪🤪🤩
        </span>
        Width <span style={styles.empashis}>{width} px</span>
        <span role="img" aria-label="emoji">
          🤩
        </span>
        Height <span style={styles.empashis}>{height} px</span>
        <span role="img" aria-label="emoji">
          🤩🤪🤪
        </span>
      </p>
      <p style={styles.paragraph}>
        <span role="img" aria-label="emoji">
          ✌🏻
        </span>
        Resize Browser & Watch The Emoji Change At 800px
        <span role="img" aria-label="emoji">
          ✌🏻
        </span>
      </p>
      <p style={styles.paragraph}>
        {[...Array(8).keys()].map(i => (
          <span key={i} role="img" aria-label="emoji">
            {width <= 800 ? '🐶' : '🦅'}
          </span>
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
