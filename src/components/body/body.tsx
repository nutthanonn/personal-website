import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Title from "./title";
import TitleImage from "./titleImage";
import MainPerforment from "./performance/mainPerformance";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    height: "100vh",
  },
  gridTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  gridImg: {
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
  },
});

const Body: React.FC = () => {
  const classes = useStyles();
  return (
    <Box>
      <Grid container className={classes.root}>
        <Grid item md={5} sm={12} xs={12} className={classes.gridTitle}>
          <Title />
        </Grid>
        <Grid
          item
          md={7}
          className={classes.gridImg}
          sx={{
            display: { md: "flex", xs: "none", sm: "none" },
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
