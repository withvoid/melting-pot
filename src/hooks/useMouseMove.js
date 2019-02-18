import React from 'react';

const useMouseMove = ({ isWindow = false } = {}) => {
  const [coords, setCoords] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const onSetWindowCoords = event => {
      setCoords({ x: event.screenX, y: event.screenY });
    };
    if (isWindow) {
      window.addEventListener('mousemove', onSetWindowCoords);
    }
    return () => {
      if (isWindow) {
        window.removeEventListener('mousemove', onSetWindowCoords);
      }
    };
  }, []);

  /*
   * @todo: get x & y axis respective of the HTML div element with which
   * the element has been binded with.
   */
  const onSetElementCoords = event => {
    setCoords({ x: event.screenX, y: event.screenY });
  };

  return {
    x: coords.x,
    y: coords.y,
    ...(!isWindow && {
      ...{
        bind: { onMouseMove: onSetElementCoords },
      },
    }),
  };
};

export default useMouseMove;
