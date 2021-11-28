import React from "react";
import { Box } from "@mui/material";
import Body from "../components/body/body";
import Nav from "../components/header/nav";
import Footer from "../components/footer/footer";

//
const Main: React.FC = () => {
  return (
    <Box>
      <Nav />
      <Body />
      <Footer />
    </Box>
  );
};

export default Main;
