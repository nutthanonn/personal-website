import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {},
});

const item = [1, 2, 3];
const SoundBox: React.FC = () => {
  const classes = useStyles();

  return (
    <Box>
      {item.map((item) => {
        return (
          <Box>
            <p>Hello</p>
          </Box>
        );
      })}
    </Box>
  );
};

export default SoundBox;
