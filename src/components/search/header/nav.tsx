import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { CgMenuGridR } from "react-icons/cg";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {},
  boxLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    minWidth: 100,
    flexGrow: 1,
  },
  boxRight: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  navTool: {
    display: "flex",
  },
  linkTypography: {
    marginRight: 10,
    textDecoration: "none",
    "&:hover": {
      color: "#4285F4",
      textDecoration: "underline",
    },
  },
});

const Nav: React.FC = () => {
  const classes = useStyles();
  return (
    <Box>
      <Toolbar className={classes.navTool}>
        <Box className={classes.boxLeft}>
          <Typography className={classes.linkTypography}>About</Typography>
          <Typography component="a" className={classes.linkTypography}>
            Store
          </Typography>
        </Box>
        <Box className={classes.boxRight}>
          <Typography component="a" className={classes.linkTypography}>
            Gmail
          </Typography>
          <Typography className={classes.linkTypography}>Image</Typography>
          <IconButton>
            <CgMenuGridR />
          </IconButton>
          <Avatar sx={{ width: 30, height: 30 }}>N</Avatar>
        </Box>
      </Toolbar>
    </Box>
  );
};

export default Nav;
