import React from 'react';

const useToggle = (initialState = false) => {
  const [on, setToggle] = React.useState(initialState);
  const onToggle = () => setToggle(prevState => !prevState);
  return { on, onToggle };
};

export default useToggle;
