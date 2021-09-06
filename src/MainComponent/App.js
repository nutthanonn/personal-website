import "./App.css";
import React, { useState } from "react";
import Title from "./components/Title";
import Form from "./components/form";
import "./App.css";
import { Typography, Container } from "@material-ui/core";
import DataContext from "./data/DataContext";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  const [items, setItems] = useState([]);
  const [allMoney, setMoney] = useState(0);

  const onAddNewItem = (newItem) => {
    setItems((prev) => {
      return [newItem, ...prev];
    });
  };

  const pushNewMoney = (money) => {
    setMoney((nowMoney) => {
      return Number(money + nowMoney);
    });
  };

  const colorAllMoney = allMoney < 0 ? "negative" : "positive";

  return (
    <DataContext.Provider value={"hello"}>
      <Container>
        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/">Form</Link>
              </li>
              <li>
                <Link to="/insert">Data</Link>
              </li>
            </ul>
            <Switch>
              <Route path="/" exact>
                <Typography
                  variant="h2"
                  className={colorAllMoney}
                  align="center"
                  gutterBottom
                >
                  {allMoney}
                </Typography>
              </Route>
              <Route path="/insert">
                <Form onAddItem={onAddNewItem} pushMoney={pushNewMoney} />
                <Title items={items} />
              </Route>
            </Switch>
          </div>
        </Router>
      </Container>
    </DataContext.Provider>
  );
};

export default App;
