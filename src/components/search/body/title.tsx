import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  logo: {
    fontWeight: 1000,
  },
});

const Title: React.FC = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.title}>
        <Typography color="#4285F4" variant="h1" className={classes.logo}>
          S
        </Typography>
        <Typography color="#DB4437" variant="h1" className={classes.logo}>
          e
        </Typography>
        <Typography color="#F4B400" variant="h1" className={classes.logo}>
          a
        </Typography>
        <Typography color="#4285F4" variant="h1" className={classes.logo}>
          r
        </Typography>
        <Typography color="#0F9D58" variant="h1" className={classes.logo}>
          c
        </Typography>
        <Typography color="#DB4437" variant="h1" className={classes.logo}>
          h
        </Typography>
      </Box>
    </Box>
  );
};

export default Title;
