import React from "react";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#D3E0DC",
    top: 0,
    left: 0,
    position: "sticky",
  },
});

const Nav: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Toolbar>
        <Typography variant="h5">Reading</Typography>
      </Toolbar>
    </Box>
  );
};

export default Nav;
