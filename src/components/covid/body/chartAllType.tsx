import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";

import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { observer } from "mobx-react";
import { TimeLineCaseAllImpl } from "../../../store/covidPageStore/timeLineCaseAllStore";

interface ChartAllTypeProps {
  store: TimeLineCaseAllImpl;
}

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

const ChartAllType: React.FC<ChartAllTypeProps> = observer(({ store }) => {
  const classes = useStyles();
  Chart.register(CategoryScale);
  const [dataType, setDataType] = useState<any[]>([]);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    setDataType(store.useData);

    if (store.TypeChart === "defaultType") {
      if (store.Province === "defaultProvince") {
        setTitle(`ผู้ติดเชื้อรายใหม่ต่อเดือน ทั้งหมดในประเทศ`);
      } else {
        const province = store.Province;
        setTitle(`ผู้ติดเชื้อรายใหม่ต่อเดือน จังหวัด ${province}`);
      }
    } else {
      if (store.Province === "defaultProvince") {
        setTitle(`ผู้เสียชีวิตรายใหม่ต่อเดือน ทั้งหมดในประเทศ`);
      } else {
        const province = store.Province;
        setTitle(`ผู้เสียชีวิตรายใหม่ต่อเดือน จังหวัด ${province}`);
      }
    }
  }, [store, store.useData]);

  const data = {
    labels: dataType[0],
    datasets: [
      {
        label: title,
        data: dataType[1],
        fill: true,
        backgroundColor: "rgba(73, 73, 73, 0.3)",
        borderColor: "#FAF3F3",
      },
    ],
  };

  return (
    <Box className={classes.root}>
      <Container>
        <Line data={data} />
      </Container>
    </Box>
  );
});

export default ChartAllType;
