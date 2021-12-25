import React, { useEffect, useState } from "react";
import Nav from "../components/header/navbar";
import Title from "../components/home/body/title";
import AboutWebsite from "../components/home/body/aboutWebsite";
import LanguageAndTools from "../components/home/body/languageAndTools";
import Footer from "../components/home/footer/footer";
import carBackDrop from "../assets/lottiesAnimation/lottie-car.json";

import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Backdrop from "@mui/material/Backdrop";
import Lottie from "react-lottie";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#222831",
  },
});

const Home: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(true);

  const animationData = {
    loop: true,
    autoplay: true,
    animationData: carBackDrop,
  };

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 500);
  }, []);

  return (
    <Box className={classes.root}>
      <Nav />
      <Backdrop
        open={open}
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Lottie options={animationData} isClickToPauseDisabled={true} />
      </Backdrop>
      <CssBaseline />
      <Title />
      <Container sx={{ mt: 10 }}>
        <AboutWebsite />
      </Container>
      <LanguageAndTools />
      <Footer />
    </Box>
  );
};

export default Home;
