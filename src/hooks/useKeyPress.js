import React from 'react';

// Reference: https://gist.github.com/gragland/b61b8f46114edbcf2a9e4bd5eb9f47f5

/**
 * @description Returns true if a certain key is pressed
 * @param {Event} targetKey
 * @author Adeel Imran
 */
const useKeyPress = targetKey => {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = React.useState(false);

  // If 'pressed' key is our target then set to true
  const onKeyDownHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  };

  // If 'released' key is our target then set to true
  const onKeyUpHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  // Add event listeners
  React.useEffect(() => {
    window.addEventListener('keydown', onKeyDownHandler);
    window.addEventListener('keyup', onKeyUpHandler);
    return () => {
      window.removeEventListener('keydown', onKeyDownHandler);
      window.removeEventListener('keyup', onKeyUpHandler);
    };
  }, []); // Empty array ensures that effect is run on mount & unmount only.

  // return keyPressed {Boolean}, targetKey {String}
  return [keyPressed, targetKey];
};

export default useKeyPress;
