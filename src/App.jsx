import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/home";
import Detail from "./routes/detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movies/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
