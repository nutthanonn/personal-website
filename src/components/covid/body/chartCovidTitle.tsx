import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "รักษาหายแล้ว",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "ผู้ติดเชื้อรายใหม่",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774",
    },
  ],
};

const ChartCovidTitle: React.FC = () => {
  Chart.register(CategoryScale);
  return (
    <Box>
      <Container>
        <Typography variant="h5">ข้อมูลผู้ติดเชื้อเดือนธันวาคม</Typography>
        <Line data={data} />
      </Container>
    </Box>
  );
};

export default ChartCovidTitle;
