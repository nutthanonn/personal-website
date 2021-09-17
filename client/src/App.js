import { Route } from "react-router-dom";
import LoginPage from "./MainComponent/register_login/LoginPage";
import RegisterPage from "./MainComponent/register_login/RegisterPage";
import Home from "./MainComponent/register_login/Home";
import { SnackbarProvider } from "notistack";
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
        <RegisterPage />
      </Route>
      <Route path="/test">
        <MainPage />
      </Route>
    </div>
  );
};

export default App;
