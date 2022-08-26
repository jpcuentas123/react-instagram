import React from 'react';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    console.log('useEffect');
  });
  return <div>App</div>;
};

export default App;
