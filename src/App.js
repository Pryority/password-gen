import React, { useState } from 'react';
import './App.css';
import options from './utils/Options'
import OptionsArray from './components/OptionsArray';

function App() {

  const [checkedState, setCheckedState] = useState(
    new Array(options.length).fill(false)
  );

  const handleOnChange = () => {
    setCheckedState(!checkedState);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className='text-3xl'>Password Generator</h1>
      <button className='bg-blue-400 font-medium px-6 py-2 rounded-lg border-2 border-slate-300  hover:text-white'>Generate</button>
      <OptionsArray />
    </div>
  );
}

export default App;
