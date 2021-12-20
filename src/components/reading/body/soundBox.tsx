import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {},
});

const item = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const SoundBox: React.FC = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {item.map((item) => {
        return (
          <Box
            sx={{
              width: 200,
              height: 200,
              bgcolor: "white",
              m: 1,
              borderRadius: 10,
            }}
          ></Box>
        );
      })}
    </Box>
  );
};

export default SoundBox;
