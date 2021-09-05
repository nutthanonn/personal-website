import "./App.css";
import React, { useState } from "react";
import Title from "./components/Title";
import Form from "./components/form";
import "./App.css";
import { Typography, Container } from "@material-ui/core";
import DataContext from "./data/DataContext";

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
        <Typography
          variant="h2"
          className={colorAllMoney}
          align="center"
          gutterBottom
        >
          {allMoney}
        </Typography>
        <Form onAddItem={onAddNewItem} pushMoney={pushNewMoney} />
        <Title items={items} />
      </Container>
    </DataContext.Provider>
  );
};

export default App;
