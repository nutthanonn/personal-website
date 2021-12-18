import React from "react";
import Nav from "../components/search/header/nav";
import Title from "../components/search/body/title";
import TextForm from "../components/search/body/textForm";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "70vh",
    width: "100vw",
  },
});

const Search: React.FC = () => {
  const classes = useStyles();
  return (
    <Box sx={{ width: { md: "100vw", sm: "130vw", xs: "200vw" } }}>
      <CssBaseline />
      <Nav />
      <Container className={classes.center}>
        <Title />
        <TextForm />
      </Container>
    </Box>
  );
};

export default Search;
