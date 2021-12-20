import React, { useState } from "react";
import PageTool from "../../header/pageTool";
import GoogleAppItem from "./googleAppItem";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { CgMenuGridR } from "react-icons/cg";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
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
    color: "black",
    textDecoration: "none",
    "&:hover": {
      color: "#4285F4",
      textDecoration: "underline",
    },
  },
  linkPage: {
    display: "flex",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
      color: "#71C9CE",
    },
  },
});

const Nav: React.FC = () => {
  const classes = useStyles();

  const [appGoogle, setAppGoogle] = useState<HTMLButtonElement | null>(null);

  const handleClickAppGoogle = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAppGoogle(event.currentTarget);
  };

  const handleCloseAppGoogle = () => {
    setAppGoogle(null);
  };

  const openAppGoogle = Boolean(appGoogle);

  return (
    <Box>
      <Toolbar className={classes.navTool}>
        <Box className={classes.boxLeft}>
          <Typography
            className={classes.linkTypography}
            component="a"
            href="/"
            sx={{ mr: 1 }}
          >
            Home
          </Typography>
          <PageTool />
        </Box>
        <Box className={classes.boxRight}>
          <Typography
            component="a"
            className={classes.linkTypography}
            href="https://mail.google.com/"
            target="_blank"
          >
            Gmail
          </Typography>
          {/* <Typography className={classes.linkTypography}>Image</Typography> */}
          <Tooltip title="แอป Google">
            <IconButton sx={{ mr: 1 }} onClick={handleClickAppGoogle}>
              <CgMenuGridR />
            </IconButton>
          </Tooltip>
          <IconButton>
            <Avatar sx={{ width: 30, height: 30 }}>N</Avatar>
          </IconButton>
        </Box>
      </Toolbar>
      <Popover
        open={openAppGoogle}
        anchorEl={appGoogle}
        onClose={handleCloseAppGoogle}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <GoogleAppItem />
      </Popover>
    </Box>
  );
};

export default Nav;
