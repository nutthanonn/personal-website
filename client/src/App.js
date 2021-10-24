import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

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
