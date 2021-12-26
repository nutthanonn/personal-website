import React from "react";

import Zoom from "@mui/material/Zoom";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: 16,
    right: 16,
    zIndex: 1,
  },
});

const ScrollTop = (props: Props) => {
  const classes = useStyles();
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
      <Box onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </Box>
    </Zoom>
  );
};
export default ScrollTop;
