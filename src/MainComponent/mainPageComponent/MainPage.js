import { Container } from "@material-ui/core";
import Appbar from "./Appbar.js";
import WeekChild from "./WeekChild.js";
import { v4 as uuidv4 } from "uuid";

const MainPage = () => {
  const setData = [
    { head: "Lab1", sub: "String" },
    { head: "Lab2", sub: "ForLoop" },
    { head: "Lab3", sub: "WhileLoop" },
    { head: "Lab4", sub: "SquartThinking" },
  ];

  return (
    <div>
      <Appbar />
      <Container>
        {setData.map((e) => {
          return <WeekChild {...e} key={uuidv4()} />;
        })}
      </Container>
    </div>
  );
};

export default MainPage;
