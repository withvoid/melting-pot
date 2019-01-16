import React from 'react';

const useActive = () => {
  const [hover, setHover] = React.useState(false);
  return {
    hover,
    bind: {
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
    },
  };
};

export default useActive;
