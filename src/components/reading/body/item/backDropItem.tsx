import React from "react";

import Box from "@mui/material/Box";
import Countdown from "react-countdown";
import { makeStyles } from "@mui/styles";

interface BackdropItem {
  time: number;
  url: string;
  boxSounds: string[];
  complete: () => void;
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
    fontSize: 60,
    color: "black",
    background: "linear-gradient(to right, #0052d4, #4364f7, #6fb1fc)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    opacity: 0.7,
    fontWeight: "lighter",
  },
});

const BackdropItem: React.FC<BackdropItem> = ({
  time,
  url,
  boxSounds,
  complete,
}) => {
  const classes = useStyles();
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 50,
          zIndex: 5,
          background: "black",
          px: 5,
          borderRadius: 20,
          opacity: 0.75,
        }}
      >
        <Box>
          <Countdown
            date={Date.now() + time * 60000}
            daysInHours={true}
            className={classes.timeCount}
            onComplete={complete}
          />
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
