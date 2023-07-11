import Navbar from "../components/Navbar";
import { useState } from "react";
import "../css/index.css"

function App() {

  const [counter, setCounter] = useState(0)

  function handleClick() {
    setCounter(counter + 1)
  }

  return (
    <div className="App">
      <Navbar />
      <h1>{counter}</h1>
      <button onClick={handleClick}>A</button>
    </div>
  );
}

export default App;
