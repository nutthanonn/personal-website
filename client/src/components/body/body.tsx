import React from "react";
import { Box, Grid } from "@mui/material";
import Title from "./title";
import TitleImage from "./titleImage";

const Body: React.FC = () => {
  return (
    <Box>
      <Grid container sx={{ height: "100vh" }}>
        <Grid
          item
          md={7}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Title />
        </Grid>
        <Grid
          item
          md={5}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <TitleImage />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Body;
