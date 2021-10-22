import { Router, Switch } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Router path="/">
          <Home />
        </Router>
      </Switch>
    </div>
  );
}
