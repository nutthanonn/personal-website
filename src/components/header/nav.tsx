import * as React from "react";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import { AiOutlineArrowUp } from "react-icons/ai";
import ScrollTop from "./scrollTop";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Nav = () => {
  return (
    <Box>
      <CssBaseline />
      <HideOnScroll>
        <AppBar
          sx={{ boxShadow: 0, backgroundColor: "#c6fad2", color: "black" }}
        >
          <Toolbar>
            <Typography>NUTTHANON</Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />

      <ScrollTop>
        <Fab color="primary" size="large">
          <AiOutlineArrowUp />
        </Fab>
      </ScrollTop>
    </Box>
  );
};

export default Nav;
