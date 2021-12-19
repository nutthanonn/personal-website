import React from "react";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#F5F5F5",
    position: "fixed",
    bottom: 0,
  },
  boxFooter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
});

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <CssBaseline />
      <Toolbar sx={{ width: "100vw" }}>
        <Box className={classes.boxFooter}>
          <Typography>Idea from Google</Typography>
        </Box>
        <Typography></Typography>
      </Toolbar>
    </Box>
  );
};

export default Footer;
