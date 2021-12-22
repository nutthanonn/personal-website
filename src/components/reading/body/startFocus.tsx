import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Countdown from "react-countdown";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import { makeStyles } from "@mui/styles";

import { observer } from "mobx-react";
import { DataReadingStoreImpl } from "../../../store/reading/dataReadingStore";
import ReactPlayer from "react-player";
import useSound from "use-sound";
import success from "../../../sound/asmr/successFocus.mp3";

interface StartFocusProps {
  store: DataReadingStoreImpl;
}
interface boxSoundProps {
  id: number;
  audio: string;
  pic: string;
  title: string;
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
    fontSize: 100,
    color: "black",
    background: "linear-gradient(to right, #0052d4, #4364f7, #6fb1fc)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    opacity: 0.7,
    fontWeight: "lighter",
  },
});

const StartFocus: React.FC<StartFocusProps> = observer(({ store }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [boxSound, setBoxSound] = useState<boxSoundProps[]>([]);
  const [bg, setBg] = useState<string>("");
  const [play] = useSound(success);

  useEffect(() => {
    setBg(store.get_bg());
  }, [store, store.Background]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    setBoxSound(store.start_focus());
    setOpen(!open);
  };
  const complete = () => {
    play();
    setOpen(false);
  };

  return (
    <Box>
      <Button
        variant="outlined"
        size="large"
        sx={{ bgcolor: "white", borderColor: "pink" }}
        onClick={handleToggle}
      >
        Start focus
      </Button>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={open}
        onClick={handleClose}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 50,
            zIndex: 5,
            background: "linear-gradient(to right, #9796f0, #fbc7d4)",
            px: 5,
            borderRadius: 20,
            opacity: 0.8,
          }}
        >
          <Box>
            <Countdown
              date={Date.now() + store.Time * 60000}
              daysInHours={true}
              className={classes.timeCount}
              onComplete={complete}
            />
          </Box>
          <Box className={classes.boxAsmr}>
            {boxSound.map((item, index) => {
              return (
                <Box key={index} className={classes.boxInBackDrop}>
                  <Box
                    component="img"
                    src={item.pic}
                    sx={{ width: 50, height: 50 }}
                  />
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box sx={{ position: "absolute" }}>
          <ReactPlayer
            muted={true}
            url={bg}
            width="100%"
            height="100%"
            controls={false}
            loop={true}
            playing={true}
          />
        </Box>
      </Backdrop>
    </Box>
  );
});

export default StartFocus;
