import React from 'react';
import PropTypes from 'prop-types';

import { useKeyPress } from '../../src';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'purple',
  },
  paragraph: {
    margin: 40,
    padding: 0,
    fontSize: 48,
    color: '#fff',
    textAlign: 'center',
  },
  empashis: {
    color: 'yellow',
  },
};

const Emoji = ({ emoji }) => (
  <span role="img" aria-label="emoji">
    {emoji}
  </span>
);

Emoji.propTypes = {
  emoji: PropTypes.string.isRequired,
};

const Faces = () => {
  const happyPress = useKeyPress('h');
  const sadPress = useKeyPress('s');
  const robotPress = useKeyPress('r');
  const foxPress = useKeyPress('f');

  return (
    <div style={styles.root}>
      <p style={styles.paragraph}>
        <Emoji emoji="🎒" /> Press a key: <span style={styles.empashis}>h, s, r, f</span>{' '}
        <Emoji emoji="🎒" />
      </p>
      <p style={styles.paragraph}>
        <span>{happyPress && '😊'}</span>
        <span>{sadPress && '😢'}</span>
        <span>{robotPress && '🤖'}</span>
        <span>{foxPress && '🦊'}</span>
      </p>
    </div>
  );
};

export default Faces;
