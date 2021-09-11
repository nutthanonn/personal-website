import { Container } from "@material-ui/core";
import LoginPage from "./Login/LoginPage";

import MainPage from "./mainPageComponent/MainPage";

const App = () => {
  return (
    <div>
      <MainPage />
      <Container>{/* <LoginPage /> */}</Container>
    </div>
  );
};

export default App;
