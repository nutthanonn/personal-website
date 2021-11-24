import * as React from "react";
import {
  Slide,
  Box,
  useScrollTrigger,
  CssBaseline,
  AppBar,
  Toolbar,
  Button,
} from "@mui/material";

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
        <AppBar sx={{ bgcolor: "#c6fad2", boxShadow: 0, color: "black" }}>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}></Box>
            <Button>Contact</Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </Box>
  );
};

export default Nav;
