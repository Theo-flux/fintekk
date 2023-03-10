import React from 'react';

export const useHash = () => {
  const [hash, setHash] = React.useState(() => window.location.hash);

  const hashChangeHandler = () => {
    setHash(window.location.hash);
  };

  React.useEffect(() => {
    window.addEventListener('hashchange', hashChangeHandler);
    return () => {
      window.removeEventListener('hashchange', hashChangeHandler);
    };
  }, []);

  const updateHash = (newHash: any) => {
    if (newHash !== hash) window.location.hash = newHash;
  };

  return [hash, updateHash];
};
