import { Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";

import LoginPage from "./MainComponent/register_login/LoginPage";
import RegisterPage from "./MainComponent/register_login/RegisterPage";
import Home from "./MainComponent/register_login/Home";
import MainPage from "./MainComponent/mainpage/MainPage";
const App = () => {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <SnackbarProvider maxSnack={3}>
          <LoginPage />
        </SnackbarProvider>
      </Route>
      <Route path="/register">
        <SnackbarProvider maxSnack={3}>
          <RegisterPage />
        </SnackbarProvider>
      </Route>
      <Route path="/test">
        <MainPage />
      </Route>
    </div>
  );
};

export default App;
