import React from 'react';

const useToggle = (initialState = false) => {
  const [on, setState] = React.useState(initialState);
  const onToggle = () => setState(prevState => !prevState);
  return { on, onToggle };
};

export default useToggle;
