import React, { useState } from 'react';
import './App.css';
import options from './utils/Options'
import Main from './components/Main';

function App() {

  const [checkedState, setCheckedState] = useState(
    new Array(options.length).fill(false)
  );

  const handleOnChange = () => {
    setCheckedState(!checkedState);
  };

  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
