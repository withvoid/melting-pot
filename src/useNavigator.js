import React from 'react';

const useNavigator = () => {
  const [online] = React.useState(false);
  return online;
};

export default useNavigator;
