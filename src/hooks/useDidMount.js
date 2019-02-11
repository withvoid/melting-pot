import React from 'react';

const useDidMount = func => {
  React.useEffect(() => func && func(), []);
};

export default useDidMount;
