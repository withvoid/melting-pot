import React from 'react';

const useTouch = () => {
  const [touched, setTouched] = React.useState(false);
  return {
    touched,
    bind: {
      onTouchStart: () => setTouched(true),
      onTouchEnd: () => setTouched(false),
    },
  };
};

export default useTouch;
