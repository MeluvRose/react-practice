import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((prev) => prev + 1);
  const iRunOnlyOnce = () => console.log("i run only once");

  console.log("i run all the time");
  useEffect(iRunOnlyOnce, []);
  return (
    <div className="App">
      <h1 onClick={onClick}>Welcome back to React</h1>
      <h3>{counter}</h3>
    </div>
  );
}

export default App;
