import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("i run all the time");
  useEffect(() => {
    console.log("CALL THE API...");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);
  useEffect(() => {
    console.log("i run when 'counter' changes");
  }, [counter]);
  return (
    <div className="App">
      <h1 onClick={onClick}>Welcome back to React</h1>
      <h3>{counter}</h3>
      <input
        type="text"
        placeholder="Search here..."
        value={keyword}
        onChange={onChange}
      ></input>
    </div>
  );
}

export default App;
