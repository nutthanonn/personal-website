import React from "react";
import Box from "@mui/material/Box";
import GithubP from "./githubP";
import AllPerformance from "./allWebsite/allPerformance";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    marginTop: 20,
  },
});

const MainPerforment: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <GithubP />
      <AllPerformance />
    </Box>
  );
};

export default MainPerforment;
