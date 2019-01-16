import React from 'react';

const useActive = () => {
  const [active, set] = React.useState(false);
  return {
    active,
    bind: {
      onMouseDown: () => set(true),
      onMouseUp: () => set(false),
    },
  };
};

export default useActive;
