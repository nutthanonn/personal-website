import { Container } from "@material-ui/core";
import Appbar from "./Appbar.js";
import WeekChild from "./WeekChild.js";

const MainPage = () => {
  return (
    <Container>
      <Appbar />
      <WeekChild />
    </Container>
  );
};

export default MainPage;
