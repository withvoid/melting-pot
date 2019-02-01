import React from 'react';

const useToggle = (initialState = false) => {
  let [on, setState] = React.useState(initialState);
  const onToggle = () => setState((on = !on));
  return { on, onToggle };
};

export default useToggle;
