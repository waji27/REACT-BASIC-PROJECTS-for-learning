import { useState } from "react";
import "./App.css";

function App() {

const [counter, setCounter] = useState(0)

function addValue(){
  setCounter(counter+1)
}

function removeValue(){
  if(counter > 0){
    setCounter(counter-1)
  }
}

function resetValue(){
  setCounter(counter - counter)
}

  return (
    <>

      <h1>Counter using react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>

      <button
      onClick={removeValue}
      >Remove value</button>

      <button
      onClick={resetValue}
      >Reset Value</button>

    </>
  );
}

export default App;
