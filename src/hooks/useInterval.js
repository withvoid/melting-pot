import React from 'react';

// Reference:
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/

const useInterval = (callback, delay) => {
  const savedCallback = React.useRef();

  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback;
  });

  // Set up the interval.
  React.useEffect(
    () => {
      const tick = () => {
        savedCallback.current();
      };
      if (delay !== null) {
        const id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
      return () => {};
    },
    [delay],
  );
};

export default useInterval;
