import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'purple',
  },
  paragraph: {
    margin: 10,
    padding: 0,
    fontSize: 32,
    color: '#fff',
    textAlign: 'center',
  },
  empashis: {
    color: 'yellow',
  },
};

const Faces = ({ types }) => {
  const facesToShow = types.filter(type => type.isActive);
  const allKeys = types.map(type => type.key);
  return (
    <div style={styles.root}>
      <p style={styles.paragraph}>
        <span role="img" aria-label="emoji">
          🎒
        </span>
        <span>Press a key:</span>
        <span style={styles.empashis}> {allKeys.join(', ')} </span>
        <span role="img" aria-label="emoji">
          🎒
        </span>
      </p>
      <p style={styles.paragraph}>
        {facesToShow.map(item => (
          <span key={item.face} role="img" aria-label="emoji">
            {item.face}
          </span>
        ))}
      </p>
    </div>
  );
};

Faces.propTypes = {
  types: PropTypes.arrayOf(
    PropTypes.shape({
      isActive: PropTypes.bool.isRequired,
      key: PropTypes.string.isRequired,
      face: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Faces;
