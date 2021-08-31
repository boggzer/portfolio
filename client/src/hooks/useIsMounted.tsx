import React from 'react';

const useIsMounted = () => {
  const [isMounted, setIsMounted] = React.useState(false);
  console.log('outside moutned');
  React.useEffect(() => {
    console.log('inside moutned');
    setIsMounted(true);
  }, []);
  return isMounted;
};

export default useIsMounted;
