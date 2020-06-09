import React from 'react';

const useWindowScrollPosition = () => {
  const [scroll, setScroll] = React.useState({
    x: 0,
    y: 0,
  });

  const onHandle = () => {
    setScroll({
      x: window.pageXOffset,
      y: window.pageYOffset,
    });
  };

  React.useEffect(() => {
    onHandle();
    window.addEventListener('scroll', onHandle);
    return () => {
      window.removeEventListener('scroll', onHandle);
    };
  }, []);

  return scroll;
};

export default useWindowScrollPosition;
