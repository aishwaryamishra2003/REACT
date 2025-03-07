import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Initialize the counter state
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    console.log("clicked", counter);
    setCounter(counter + 1); // Update the counter state
  }

  const removeValue=()=>{
    setCounter(counter-1);
  } 
  return (
    <>
  <h1>Chai Aur react</h1>
  <h2>Counter value:{counter}</h2>
  <button
  onClick={addValue}>Add Value:{counter}</button>
  <br/>
  <button
  onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;

