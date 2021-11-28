import React from "react";
import { Box, Grid } from "@mui/material";
import Title from "./title";
import TitleImage from "./titleImage";
import MainPerforment from "./performance/mainPerformance";

const Body: React.FC = () => {
  return (
    <Box>
      <Grid container sx={{ height: "100vh" }}>
        <Grid
          item
          md={5}
          sm={12}
          xs={12}
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
          md={7}
          sx={{
            justifyContent: "flex-end",
            alignItems: "center",
            display: { md: "flex", xs: "none", sm: "none" },
            overflow: "hidden",
          }}
        >
          <TitleImage />
        </Grid>
      </Grid>
      <MainPerforment />
    </Box>
  );
};

export default Body;
