import { useState, useEffect } from "react";

function Hello() {
  function ByFn() {
    console.log("Destroyed :(");
  }
  function HiFn() {
    console.log("Created :)");
    return ByFn;
  }
  useEffect(HiFn, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div className="App">
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
