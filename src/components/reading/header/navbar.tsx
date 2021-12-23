import React from "react";
import PageTool from "../../header/pageTool";
import ScrollTop from "./scrollTop";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import { makeStyles } from "@mui/styles";
import { AiOutlineArrowUp } from "react-icons/ai";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#D3E0DC",
    top: 0,
    left: 0,
    position: "sticky",
    zIndex: 10,
  },
});

const Nav: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5">Reading</Typography>
        </Box>
        <PageTool />
        <ScrollTop>
          <Fab color="secondary" size="large">
            <AiOutlineArrowUp />
          </Fab>
        </ScrollTop>
      </Toolbar>
    </Box>
  );
};

export default Nav;
