import Nav from "../components/navbar";
import { programData } from "../data/programData";
import CardProgram from "../components/CardProgram";

//material-UI
import { Box, Grid } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Nav />
      <Grid container spacing={4}>
        {programData.map((item) => {
          return (
            <Grid item md={3} key={item.id}>
              <CardProgram data={item} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
