import React, { useState, useEffect } from "react";
import Nav from "../components/reading/header/navbar";
import TimePickUp from "../components/reading/body/timepickup";
import SelectSound from "../components/reading/body/selectSound";
import SelectBg from "../components/reading/body/selectBg";
import Footer from "../components/reading/footer/footer";

import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import CssBaseline from "@mui/material/CssBaseline";
import { makeStyles } from "@mui/styles";

import Lottie from "react-lottie";
import animationData from "../assets/lottiesAnimation/lottie-welcome.json";

import { ReadingStore } from "../store/reading/readingStore";
import { DataReadingStore } from "../store/reading/dataReadingStore";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#FCD1D1",
  },
});

const defaultAnimation = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};

const Reading: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  }, []);

  return (
    <Box className={classes.root}>
      <Backdrop
        open={open}
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Lottie options={defaultAnimation} isClickToPauseDisabled={true} />
      </Backdrop>
      <CssBaseline />
      <Nav />
      <TimePickUp store={ReadingStore} startStore={DataReadingStore} />
      <SelectSound />
      <SelectBg store={DataReadingStore} />
      <Footer />
    </Box>
  );
};

export default Reading;
