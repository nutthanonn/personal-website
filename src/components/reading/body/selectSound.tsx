import React from "react";
import SoundBoxItem from "./item/soundBoxItem";
import { dataSet } from "../../../data/asmr/dataSet";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { DataReadingStore } from "../../../store/reading/dataReadingStore";

const useStyles = makeStyles({
  boxCenter: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});

const SelectSound: React.FC = () => {
  const classes = useStyles();

  return (
    <Box sx={{ bgcolor: "#ECE2E1", py: 5 }}>
      <Box className={classes.boxCenter}>
        <Typography
          variant="h2"
          sx={{
            my: 5,
            fontWeight: "lighter",
            fontSize: { md: 50, sm: 30, xs: 20 },
          }}
        >
          Select sound
        </Typography>
      </Box>
      <Box className={classes.boxCenter}>
        {dataSet.map((item) => {
          return (
            <Box key={item.id}>
              <SoundBoxItem
                store={DataReadingStore}
                sound={item.audio}
                pic={item.pic}
                title={item.title}
                id={item.id}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default SelectSound;
