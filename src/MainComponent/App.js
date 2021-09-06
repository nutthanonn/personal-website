import { Container, Typography } from "@material-ui/core";
import LoginPage from "./components/LoginPage";

const App = () => {
  return (
    <Container>
      <Typography variant="h3" color="primary" gutterBottom>
        FormPage
      </Typography>
      <LoginPage />
    </Container>
  );
};

export default App;
