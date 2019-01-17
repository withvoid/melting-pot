import React from 'react';

const useWindowScrollPosition = () => {
  const [scroll, setScroll] = React.useState({
    x: window.pageXOffset,
    y: window.pageYOffset,
  });

  const onHandle = () => {
    setScroll({
      x: window.pageXOffset,
      y: window.pageYOffset,
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', onHandle);
    return () => {
      window.removeEventListener('scroll', onHandle);
    };
  }, []);

  return scroll;
};

export default useWindowScrollPosition;
