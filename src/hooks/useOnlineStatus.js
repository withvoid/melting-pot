import React from 'react';

const useOnlineStatus = () => {
  const [online, setOnline] = React.useState(false);

  const onHandleOnline = () => setOnline(true);

  const onHandleOffline = () => setOnline(false);

  React.useEffect(() => {
    setOnline(window.navigator.onLine);
    window.addEventListener('online', onHandleOnline);
    window.addEventListener('offline', onHandleOffline);
    return () => {
      window.removeEventListener('online', onHandleOnline);
      window.removeEventListener('offline', onHandleOffline);
    };
  });

  return { online };
};

export default useOnlineStatus;
