import React from 'react';

const getScreenType = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  const screenSizes = {
    xSmall: false,
    small: false,
    medium: false,
    large: false,
    xLarge: false,
  };

  if (window.matchMedia('(max-width: 575px)').matches) {
    return { ...screenSizes, xSmall: true };
  }
  if (window.matchMedia('(max-width: 767px)').matches) {
    return { ...screenSizes, small: true };
  }
  if (window.matchMedia('(max-width: 991px)').matches) {
    return { ...screenSizes, medium: true };
  }
  if (window.matchMedia('(max-width: 1199px)').matches) {
    return { ...screenSizes, large: true };
  }
  return { ...screenSizes, xLarge: true };
};

/**
 * @description returns an object
 * @returns {Object} xSmall, small, medium, large, xLarge
 * @summary Each returned value in the Object is a Boolean type
 */
const useScreenType = () => {
  const [type, setType] = React.useState(getScreenType());

  const onHandleResize = () => setType(getScreenType());

  React.useEffect(() => {
    window.addEventListener('resize', onHandleResize);
    return () => {
      window.removeEventListener('resize', onHandleResize);
    };
  });

  return type;
};

export default useScreenType;
