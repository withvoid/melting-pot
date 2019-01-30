import React from 'react';

const useToggle = (initialState = false) => {
  let [on, setState] = React.useState(initialState);
  const toggle = () => setState((on = !on));
  return { on, toggle };
};

export default useToggle;
