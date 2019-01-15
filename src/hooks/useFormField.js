import React from 'react';

const useFormField = initialValue => {
  const [value, set] = React.useState(initialValue);

  return {
    value,
    set,
    reset: () => set(initialValue),
    bind: {
      value,
      onChange: event => set(event.target.value),
    },
  };
};

export default useFormField;
