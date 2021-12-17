import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

import { observer } from "mobx-react";
import { TimeLineCaseAllImpl } from "../../../store/covidPageStore/timeLineCaseAllStore";

interface ChartCovidTitleProps {
  store: TimeLineCaseAllImpl;
}

const ChartCovidTitle: React.FC<ChartCovidTitleProps> = observer(
  ({ store }) => {
    Chart.register(CategoryScale);
    const [dataCovid, setDataCovid] = useState<any[][]>([["Jan"], [0]]);

    //fetch Data
    useEffect(() => {
      store.fecth_data();
    }, [store]);

    useEffect(() => {
      const res = store.dataTitle;
      setDataCovid(res);
    }, [store.useData, store.dataTitle]);

    const dataSet = {
      labels: dataCovid[0],
      datasets: [
        {
          label: "ยอดผู้ติดเชื้อตั้งเเต่ระรอก 3",
          data: dataCovid[1],
          fill: true,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)",
        },
      ],
    };

    return (
      <Box>
        <Container>
          <Line data={dataSet} />
        </Container>
      </Box>
    );
  }
);

export default ChartCovidTitle;
