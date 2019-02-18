import React from 'react';
import ReactDOM from 'react-dom';

import { useWindowSize, useFormField, useTitle, useHover, useMouseMove } from '../src';

const PADDING = 15;
const MARGIN = 15;
const THEME = {
  oliver: {
    primary: '#008C72',
    secondary: '#FFF',
    button: '#003840',
    hoverLight: '#02A676',
    hoverDark: '#003840',
  },
  superman: {
    primary: '#03588C',
    secondary: '#FFF',
    button: '#034C8C',
    hoverLight: '#D99414',
    hoverDark: '#A6600A',
  },
};

const myStyles = theme => {
  const selectedColor = THEME[theme] ? THEME[theme] : THEME.oliver;
  return {
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      height: '100vh',
      backgroundColor: selectedColor.primary,
      color: selectedColor.secondary,
    },
    sidebar: {
      width: '250px',
      paddingLeft: PADDING,
    },
    main: {
      paddingRight: PADDING,
      marginBottom: MARGIN,
    },
    heading: {
      fontSize: 24,
    },
    paragraph: {
      fontSize: 18,
    },
    input: {
      padding: PADDING,
      borderRadius: 6,
      backgroundColor: selectedColor.secondary,
      color: selectedColor.primary,
      border: 0,
      outline: 0,
    },
    formWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    button: {
      padding: PADDING,
      marginLeft: MARGIN,
      backgroundColor: selectedColor.button,
      color: selectedColor.secondary,
      border: 0,
    },
    hoverSection: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 200,
      backgroundColor: selectedColor.hoverLight,
      padding: PADDING,
      marginTop: MARGIN,
      transition: 'all 350ms ease',
    },
    hoverSectionActive: {
      backgroundColor: selectedColor.hoverDark,
    },
    miniBox: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: selectedColor.hoverLight,
    },
  };
};

const App = () => {
  const size = useWindowSize();
  const titleInput = useFormField('Melting Pot');
  const hoverEl = useHover();
  const mouseCoords = useMouseMove();
  const yellowBoxCoords = useMouseMove();
  useTitle(titleInput.value || 'Empty');

  const styles = myStyles('superman');
  return (
    <div style={styles.wrapper} {...mouseCoords.bind}>
      <aside style={styles.sidebar}>
        <h2 style={styles.heading}>Meltin Pot</h2>
      </aside>
      <main style={styles.main}>
        <h2 style={styles.heading}>Facts!</h2>
        <p style={styles.paragraph}>
          Did you know that the current width of this window is {size.width}px & the height of this
          window is {size.height}px. Try resizing the window horizontally/vertically & see the
          values of width & height change.
        </p>
        <h2>Mouse Coordinates</h2>
        <p>
          Did you know your mouse coordinates are w.r.t screen are x: {mouseCoords.x} and y:{' '}
          {mouseCoords.y}
        </p>
        <section {...yellowBoxCoords.bind} style={styles.miniBox}>
          {/* <section ref={yellowBoxRef} style={styles.miniBox}> */}
          <p>
            mouse x,y with respect to blue box {yellowBoxCoords.x}, {yellowBoxCoords.y}
          </p>
        </section>
        <h2 style={styles.heading}>Fun!</h2>
        <p style={styles.paragraph}>
          Try changing the title of the input field below & watch as the title of the browser window
          as you change the input field.
        </p>
        <div style={styles.formWrapper}>
          <input {...titleInput.bind} style={styles.input} />
          <button type="button" style={styles.button} onClick={titleInput.reset}>
            Reset
          </button>
        </div>
        <section
          {...hoverEl.bind}
          style={{ ...styles.hoverSection, ...(hoverEl.hover && { ...styles.hoverSectionActive }) }}
        >
          <p style={styles.paragraph}>
            Just for the sake of fun, can you kindly hover mouse over me & see some magic tricks.
          </p>
          <h2 style={styles.heading}>I am being hovered {JSON.stringify(hoverEl.hover)}</h2>
        </section>
      </main>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
