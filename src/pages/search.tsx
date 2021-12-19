import React from "react";
import Nav from "../components/search/header/nav";
import Title from "../components/search/body/title";
import TextForm from "../components/search/body/textForm";
import Footer from "../components/search/footer/footer";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { makeStyles } from "@mui/styles";

import { SearchStore } from "../store/search/searchStore";

const useStyles = makeStyles({
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "70vh",
  },
});

const Search: React.FC = () => {
  const classes = useStyles();
  return (
    <Box sx={{ width: { md: "100vw", sm: "130vw", xs: "200vw" } }}>
      <CssBaseline />
      <Nav />
      <Box className={classes.center}>
        <Title />
        <TextForm store={SearchStore} />
      </Box>
      <Footer />
    </Box>
  );
};

export default Search;
