import React from "react";
import { Box } from "@mui/material";
import Body from "../components/body/body";
import Nav from "../components/header/nav";

const Main: React.FC = () => {
  return (
    <Box>
      <Nav />
      <Body />
    </Box>
  );
};

export default Main;
