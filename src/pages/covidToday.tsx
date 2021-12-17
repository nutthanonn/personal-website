import React, { useState, useEffect } from "react";
import Title from "../components/covid/body/title";
import ChartCovidTitle from "../components/covid/body/chartCovidTitle";
import ChartAllType from "../components/covid/body/chartAllType";
import SelectType from "../components/covid/body/selectType";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Backdrop from "@mui/material/Backdrop";
import Lottie from "react-lottie";
import animationBackdrop from "../lottiesAnimation/lottie-stay-safe-stay-home.json";
import { makeStyles } from "@mui/styles";
import { DialyStore } from "../store/covidPageStore/dialyStore";
import { TimeLineCaseAllStore } from "../store/covidPageStore/timeLineCaseAllStore";

const useStyles = makeStyles({
  root: {
    height: "300vh",
    backgroundColor: "#FAF6E9",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "70vh",
  },
});

const CovidToday: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  });

  const defaultAnimation = {
    loop: true,
    autoplay: true,
    animationData: animationBackdrop,
  };

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <Lottie options={defaultAnimation} />
      </Backdrop>
      <Typography
        color="#494949"
        variant="h5"
        sx={{ fontSize: { md: 30, sm: 25, xs: 15 } }}
      >
        เว็ปไซต์รายงานสถาณการณ์ Covid19 รายวัน
      </Typography>
      <Grid container sx={{ bgcolor: "#ECE8D9" }} className={classes.grid}>
        <Grid
          item
          md={6}
          sm={12}
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Title DialyStore={DialyStore} />
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <ChartCovidTitle store={TimeLineCaseAllStore} />
        </Grid>
      </Grid>
      <SelectType store={TimeLineCaseAllStore} />
      <ChartAllType store={TimeLineCaseAllStore} />
    </Box>
  );
};

export default CovidToday;
