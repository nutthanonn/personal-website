import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

interface BackdropItemProps {
  time: number;
  boxSounds: string[];
}

const useStyles = makeStyles({
  boxInBackDrop: {
    backgroundColor: "white",
    borderRadius: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 6,
    width: 70,
    height: 70,
  },
  boxAsmr: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
    opacity: 0.4,
    zIndex: 5,
  },

  timeCount: {
    color: "black",
    background: "linear-gradient(to right, #0052d4, #4364f7, #6fb1fc)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    opacity: 0.7,
    fontWeight: "lighter",
  },
  boxTimer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 70,
    opacity: 0.75,
    zIndex: 5,
    background: "black",
    paddingInline: 30,
  },
});

const BackdropItem: React.FC<BackdropItemProps> = ({ time, boxSounds }) => {
  const classes = useStyles();
  const [timer, setTimer] = useState<string>("00:00");

  useEffect(() => {
    //secound
    const minute = Math.floor(time / 60);
    const secound = time - minute * 60;
    const compressTime = `${minute.toString().padStart(2, "0")}:${secound
      .toString()
      .padStart(2, "0")}`;
    setTimer(compressTime);
  }, [time]);

  return (
    <div>
      <Box sx={{ mt: 50 }} className={classes.boxTimer}>
        <Box>
          <Typography
            className={classes.timeCount}
            sx={{ fontSize: { md: 50, sm: 40, xs: 20 }, mx: 5 }}
          >
            {timer}
          </Typography>
        </Box>
        <Box className={classes.boxAsmr}>
          {boxSounds.map((item, index) => {
            return (
              <Box key={index} className={classes.boxInBackDrop}>
                <Box
                  component="img"
                  src={item}
                  sx={{ width: 50, height: 50 }}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
    </div>
  );
};

export default BackdropItem;
