import React, { useState } from "react";
import "../style.css";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import { makeStyles } from "@mui/styles";
import { useSound } from "use-sound";
import { motion } from "framer-motion";
import { BsVolumeDownFill, BsVolumeUpFill } from "react-icons/bs";

import { observer } from "mobx-react";
import { DataReadingStoreImpl } from "../../../../store/reading/dataReadingStore";

interface SoundBoxItemProps {
  id: number;
  sound: any;
  pic: string;
  title: string;
  store: DataReadingStoreImpl;
}

const useStyles = makeStyles({
  BoxRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
    width: 200,
    height: 200,
    borderRadius: 30,
    margin: 10,
    overflow: "hidden",
  },
  boxControl: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

const animationSound = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 5,
      type: "spring",
    },
  },
};

const SoundBoxItem: React.FC<SoundBoxItemProps> = observer(
  ({ id, sound, pic, title, store }) => {
    const classes = useStyles();
    const [isStart, setIsStart] = useState<boolean>(false);
    const [value, setValue] = useState<number>(100);
    const [play, { stop }] = useSound(sound, { volume: value * 0.01 });
    const [isPlay, setIsPlay] = useState<boolean | null>(null);

    const handleChange = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number);
    };

    const setSound = (event: React.MouseEvent<HTMLElement>) => {
      const element = document.getElementById(id.toString());
      element?.classList.toggle("play");
      if (isStart) {
        stop();
        setIsStart(false);
        setIsPlay(null);
      } else {
        play();
        setIsStart(true);
        setIsPlay(true);
      }
    };

    const pushBox = (id: number) => {
      const check = store.AsmrSong.find((item) => item === id);
      console.log(check);

      if (check) {
        store.filter_asmrSound(id);
        console.log("kick");
      } else {
        store.add_asmrSound(id);
        console.log("add");
      }
    };

    return (
      <Box
        sx={{ p: 0.1, m: 2, borderRadius: 10 }}
        onClick={() => pushBox(id)}
        id={id.toString()}
      >
        <Box className={classes.BoxRoot}>
          <Box
            component="img"
            src={pic}
            sx={{ width: 150, height: 150 }}
            onClick={setSound}
          />
          {!isPlay && (
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className={classes.boxControl}
            >
              <Typography variant="h5">{title}</Typography>
            </motion.div>
          )}
          {isPlay && (
            <motion.div
              variants={animationSound}
              animate="visible"
              initial="hidden"
              className={classes.boxControl}
            >
              <BsVolumeDownFill />
              <Slider
                onChange={handleChange}
                value={value}
                size="small"
                defaultValue={70}
                aria-label="Small"
                valueLabelDisplay="auto"
                sx={{ width: 130, mx: 1, color: "#CABBE9" }}
              />
              <BsVolumeUpFill />
            </motion.div>
          )}
        </Box>
      </Box>
    );
  }
);

export default SoundBoxItem;
