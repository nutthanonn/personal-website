import "./App.css";
import React, { useState } from "react";
import Title from "./component/Title";
import Form from "./component/form";
import "./App.css";
import { Button } from "@material-ui/core";

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
    <div>
      <Button color="secondary" size="large" variant="contained">
        Hello World
      </Button>
      <div className="amount">
        <h1 className={colorAllMoney}>{allMoney}</h1>
      </div>
      <Form onAddItem={onAddNewItem} pushMoney={pushNewMoney} />
      <Title items={items} />
    </div>
  );
};

export default App;
