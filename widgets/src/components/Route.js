import React, { useState, useEffect } from 'react';

const Route = ({ path, children }) => {
  const [ active, setActive] = useState(path === window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setActive(path === window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);
  return active ? children : null;
};

export default Route;
