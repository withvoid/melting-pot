import React from 'react';

const useTitle = title => {
  React.useEffect(() => {
    document.title = title;
  }, [title]);
};

export default useTitle;
