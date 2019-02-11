import React from 'react';

const useUpdate = ({ action = () => {}, exit = () => {} }, ...args) => {
  React.useEffect(
    () => {
      if (action && typeof action === 'function') {
        action();
      }
      return exit;
    },
    args.length ? [...args] : undefined,
  );
};

export default useUpdate;
