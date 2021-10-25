import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
