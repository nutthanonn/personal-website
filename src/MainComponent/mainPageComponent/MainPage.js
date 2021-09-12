import { Container } from "@material-ui/core";
import WeekChild from "./WeekChild.js";
import { v4 as uuidv4 } from "uuid";
import AppbarComponent from "./AppbarComponent.js";

const MainPage = () => {
  const setData = [
    { head: "Lab-1", sub: "String" },
    { head: "Lab-2", sub: "ForLoop" },
    { head: "Lab-3", sub: "While-loop" },
    { head: "Lab-4", sub: "Thinking" },
    { head: "Lab-5", sub: "Random" },
    { head: "Lab-5", sub: "Random" },
    { head: "Lab-5", sub: "Random" },
    { head: "Lab-5", sub: "Random" },
    { head: "Lab-5", sub: "Random" },
    { head: "Lab-5", sub: "Random" },
    { head: "Lab-5", sub: "Random" },
    { head: "Lab-5", sub: "Random" },
    { head: "Lab-5", sub: "Random" },
    { head: "Lab-5", sub: "Random" },
    { head: "Lab-5", sub: "Random" },
  ];

  return (
    <div>
      <AppbarComponent />
      <Container>
        {setData.map((e) => {
          return <WeekChild {...e} key={uuidv4()} />;
        })}
      </Container>
    </div>
  );
};

export default MainPage;
