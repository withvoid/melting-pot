import React from 'react';

const useHover = () => {
  const [hover, setHover] = React.useState(false);
  return {
    hover,
    bind: {
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
    },
  };
};

export default useHover;
