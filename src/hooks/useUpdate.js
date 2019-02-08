import React from 'react';

const useUpdate = (func, ...args) => {
  if (args.length) {
    return React.useEffect(() => func && func(), [...args]);
  }
  return React.useEffect(() => func && func());
};

export default useUpdate;
