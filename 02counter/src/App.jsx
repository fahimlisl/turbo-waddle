import { useState } from "react";

import "./App.css";

function App() {
  // cosnt [variable , method ] = useState(intial value of that variable)

  const [counter, setCounter] = useState(0);
  // let counter = 15
  const addValue = () => {
    setCounter(counter + 1);
  };
  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>React course wiht hitesh</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>add value</button>{" "}
      <button onClick={removeValue}>rempve value</button>
      <p>footer: {counter} </p>
    </>
  );
}

export default App;
