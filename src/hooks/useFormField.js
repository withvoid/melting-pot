import React from 'react';

const useFormField = (initialValue = '') => {
  const [value, set] = React.useState(initialValue);
  const [isDirty, setDirty] = React.useState(false);
  const [isSubmitted, setSubmitted] = React.useState(false);

  React.useEffect(() => {
    if (value.length > 0) {
      setDirty(true);
    }
  }, [value]);

  const reset = () => {
    set(initialValue);
    setDirty(false);
    setSubmitted(false);
  };

  const validate = () => {
    setDirty(true);
    setSubmitted(true);
  };

  const isEmpty = value.length === 0;

  const isValid = (isEmpty && isDirty && isSubmitted) || (isEmpty && isDirty);

  return {
    value,
    set,
    reset,
    validate,
    isEmpty,
    isDirty,
    isSubmitted,
    isValid,
    bind: {
      value,
      onChange: event => set(event.target.value),
    },
  };
};

export default useFormField;
