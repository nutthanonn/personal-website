import React, { useState } from "react";
import Test from "./imagesTest";
import { dataSet } from "../../../data/asmr/dataSet";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useSound from "use-sound";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  boxCenter: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  play: {
    background: "linear-gradient(to right, #9796f0, #fbc7d4)",
    borderRadius: 50,
  },
});

const SoundBox: React.FC = () => {
  const classes = useStyles();
  const [data, setData] = useState<any[]>([]);

  const startSound = (event: React.MouseEvent) => {
    event.currentTarget.classList.toggle("makeStyles-play-8");
  };

  return (
    <Box sx={{ bgcolor: "#ECE2E1", py: 5 }}>
      <Box className={classes.boxCenter}>
        <Typography variant="h2" sx={{ my: 5, fontWeight: 10 }}>
          Select sound
        </Typography>
      </Box>
      <Box className={classes.boxCenter}>
        {dataSet.map((item) => {
          return (
            <Box onClick={startSound} key={item.id} sx={{ m: 2 }}>
              <Test sound={item.audio} pic={item.pic} title={item.title} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default SoundBox;
