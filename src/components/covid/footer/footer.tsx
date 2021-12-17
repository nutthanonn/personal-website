import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { makeStyles } from "@mui/styles";
import { AiFillApi } from "react-icons/ai";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#494949",
    marginTop: 50,
  },
  footerLogo: {
    flexGrow: 1,
  },
});

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Toolbar>
        <Typography color="white" className={classes.footerLogo}>
          Nutthanon Studio
        </Typography>
        <Typography color="white">API from</Typography>
        <Tooltip title="API">
          <IconButton href="https://covid19.ddc.moph.go.th/" target="_blank">
            <AiFillApi color="white" />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </Box>
  );
};

export default Footer;
