import React, { useState } from 'react';
import './App.css';
import options from './utils/Options'
import MainColumn from './components/MainColumn';

function App() {

  const [checkedState, setCheckedState] = useState(
    new Array(options.length).fill(false)
  );

  const handleOnChange = () => {
    setCheckedState(!checkedState);
  };

  return (
    <div>
      <MainColumn />
    </div>
  );
}

export default App;
