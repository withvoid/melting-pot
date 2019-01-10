import React from 'react';
// Components
import Emoji from '../components/Emoji';
import { useWindowSize } from '../../src';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'teal',
  },
  paragraph: {
    margin: 10,
    padding: 0,
    fontSize: 21,
    color: '#fff',
    textAlign: 'center',
  },
  empashis: {
    color: 'yellow',
  },
  bigParagraph: {
    margin: 10,
    padding: 0,
    fontSize: 32,
    color: '#fff',
    textAlign: 'center',
  },
};

const Size = () => {
  const { width, height } = useWindowSize();
  return (
    <div style={styles.root}>
      <p style={styles.paragraph}>
        <Emoji emoji="🤩" />
        Width <span style={styles.empashis}>{width}px</span>
        <Emoji emoji="🤩" />
      </p>
      <p style={styles.paragraph}>
        <Emoji emoji="🤪" />
        Height <span style={styles.empashis}>{height}px</span>
        <Emoji emoji="🤪" />
      </p>

      <p style={styles.bigParagraph}>
        <Emoji emoji="✌🏻" />
        Drag The Window Size & Watch The Emoji Change At 900px
        <Emoji emoji="✌🏻" />
      </p>
      <p style={styles.bigParagraph}>
        {[...Array(8).keys()].map(i => (
          <Emoji key={i} emoji={width <= 900 ? '🐶' : '🦅'} />
        ))}
      </p>
    </div>
  );
};

export default Size;
