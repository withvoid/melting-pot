import React from 'react';

const useMouseMove = () => {
  const [coords, setCoords] = React.useState({ x: 0, y: 0 });

  return {
    ...coords,
    bind: {
      onMouseMove: event => {
        setCoords({ x: event.screenX, y: event.screenY });
      },
    },
  };
};

export default useMouseMove;
