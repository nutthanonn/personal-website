import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { BsFacebook } from "react-icons/bs";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    zIndex: 3,
    position: "relative",
    bottom: 0,
    left: 0,
    backgroundColor: "#c6fad2",
    paddingTop: 10,
    marginTop: 10,
  },
  toolbar: {
    margin: "0 1 0 1",
  },
  logoText: {
    flexGrow: 1,
  },
  iconButton: {
    color: "black",
  },
});

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <CssBaseline />
      <Toolbar className={classes.toolbar}>
        <Box className={classes.logoText}>&copy; Nutthanon Studio</Box>
        <Box>
          <IconButton
            className={classes.iconButton}
            href="https://www.facebook.com/Nutthanon.tho"
            target="_blank"
          >
            <BsFacebook />
          </IconButton>
        </Box>
      </Toolbar>
    </Box>
  );
};

export default Footer;
