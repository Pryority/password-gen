import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className='text-3xl'>Password Generator</h1>
      <button className='bg-blue-400 font-medium px-6 py-2 rounded-lg border border-2 border-slate-300  hover:text-white'>Generate</button>
    </div>
  );
}

export default App;
