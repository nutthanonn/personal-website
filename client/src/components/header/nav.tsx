import * as React from "react";
import {
  Slide,
  Box,
  useScrollTrigger,
  CssBaseline,
  AppBar,
  Toolbar,
  Button,
  Zoom,
  Fab,
} from "@mui/material";
import { AiOutlineArrowUp } from "react-icons/ai";

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

function ScrollTop(props: Props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
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
            <Button sx={{ color: "#dd9bcf" }}>Contact</Button>
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
