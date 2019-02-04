import React from 'react';

const useFormField = (initialValue = '') => {
  const [value, set] = React.useState(initialValue);

  const isEmpty = () => {
    if (typeof value === 'string') {
      return value.trim().length === 0;
    }
    return value === undefined || value === null;
  };

  return {
    value,
    set,
    reset: () => set(initialValue),
    isEmpty,
    bind: {
      value,
      onChange: event => set(event.target.value),
    },
  };
};

export default useFormField;
