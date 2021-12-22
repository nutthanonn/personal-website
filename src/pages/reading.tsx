import React from "react";
import Nav from "../components/reading/header/navbar";
import TimePickUp from "../components/reading/body/timepickup";
import SoundBox from "../components/reading/body/soundBox";
import BgSound from "../components/reading/body/bgSound";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { makeStyles } from "@mui/styles";

import { ReadingStore } from "../store/reading/readingStore";
import { DataReadingStore } from "../store/reading/dataReadingStore";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#FCD1D1",
    minHeight: "500vh",
  },
});

const Reading: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <CssBaseline />
      <Nav />
      <TimePickUp store={ReadingStore} startStore={DataReadingStore} />
      <SoundBox />
      <BgSound store={DataReadingStore} />
    </Box>
  );
};

export default Reading;
