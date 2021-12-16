import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";

import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#FFFDF6",
  },
  container: {},
  selectBox: {
    display: "flex",
    flexDirection: "row",
  },
});

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "รักษาหายแล้ว",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(73, 73, 73, 0.3)",
      borderColor: "#FAF3F3",
    },
    {
      label: "ผู้ติดเชื้อรายใหม่",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#3B14A7",
    },
  ],
};

const ChartAllType: React.FC = () => {
  const classes = useStyles();
  Chart.register(CategoryScale);

  return (
    <Box className={classes.root}>
      <Container>
        <Line data={data} />
      </Container>
    </Box>
  );
};

export default ChartAllType;
