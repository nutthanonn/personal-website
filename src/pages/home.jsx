import Asite from "../components/home/asite/asite";
import Body from "../components/home/body/body";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const Home = () => {
  return (
    <Box>
      <Container>
        <Grid container>
          <Grid item md={6}>
            <Body />
          </Grid>
          <Grid item md={6}>
            <Asite />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
