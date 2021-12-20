import React, { useState } from "react";
import DrawerItem from "./drawerItem";
import PageTool from "./pageTool";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { AiOutlineMenu } from "react-icons/ai";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    position: "sticky",
    top: 0,
    left: 0,
    backgroundColor: "#EEEEEE",
    zIndex: 10,
  },
  logo: {
    flexGrow: 1,
  },
  page: {
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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <Toolbar sx={{ display: { xs: "none", md: "flex", sm: "none" } }}>
        <Box className={classes.logo}>
          <Typography>PORTFOLIO</Typography>
        </Box>
        <PageTool />
      </Toolbar>

      <Toolbar sx={{ display: { xs: "flex", md: "none", sm: "flex" } }}>
        <Typography sx={{ flexGrow: 1 }}>Nut</Typography>
        <IconButton onClick={() => setIsOpen(!isOpen)}>
          <AiOutlineMenu />
        </IconButton>
        <Drawer open={isOpen} onClose={() => setIsOpen(!isOpen)} anchor="right">
          <Box sx={{ width: 300 }}>
            <DrawerItem />
          </Box>
        </Drawer>
      </Toolbar>
    </Box>
  );
};

export default Nav;
