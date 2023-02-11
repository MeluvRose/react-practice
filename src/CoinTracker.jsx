import { useState, useEffect } from "react";

function App() {
  const [loading, setLoding] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      // .then((json) => console.log(json));
      .then((json) => {
        setCoins(json);
        setLoding(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? null : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <ul>
          {coins.map((coin) => (
            <li key={coin.id}>
              {coin.name} ({coin.symbol}):${coin.quotes.USD.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
