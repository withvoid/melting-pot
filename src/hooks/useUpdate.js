import React from 'react';

const useUpdate = ({ action, exit }, ...args) => {
  const effect = () => {
    if (action) {
      action();
    }
    return exit;
  };
  if (args.length) {
    return React.useEffect(effect, [...args]);
  }
  return React.useEffect(effect);
};

export default useUpdate;
