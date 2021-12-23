import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#CABBE9",
    marginTop: 200,
  },
});

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Toolbar>
        <Typography>Create by Nutthanon</Typography>
      </Toolbar>
    </Box>
  );
};

export default Footer;
