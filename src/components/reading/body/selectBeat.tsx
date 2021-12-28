import React, { useState } from "react";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Slider from "@mui/material/Slider";
import ReactPlayer from "react-player/youtube";
import { makeStyles } from "@mui/styles";
import { BsVolumeDownFill, BsVolumeUpFill } from "react-icons/bs";
import TextField from "@mui/material/TextField";

const useStyles = makeStyles({
  boxForm: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  urlControl: {
    display: "flex",
    alignItems: "flex-end",
  },
  slider: {
    width: 130,
    marginInline: 10,
  },
});

const lofiBeat: string[] = [
  "https://youtu.be/8Th4BWkfFDE",
  "https://youtu.be/msNh_Ou_nwU",
  "https://youtu.be/5PRFQ_FnyM8",
  "https://youtu.be/Cx1qHKE_y9Q",
  "https://youtu.be/PFq5ZRRAjY4",
  "https://youtu.be/xVf4Zk8CBj0",
  "https://youtu.be/d3ivPRg8XfI",
  "https://youtu.be/IUYaCe95dxw",
  "https://youtu.be/RqA8RFyofvk",
  "https://youtu.be/QCzRXx1DA_U",
  "https://youtu.be/IMgyOORAUTs",
];

const SelectBeat: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = useState<number>(100);
  const [open, setOpen] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");

  const handleChangeVolume = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const handleChangeUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const startSong = (e: React.SyntheticEvent) => {
    if (url) {
      setOpen(!open);
    } else {
      setUrl(lofiBeat[Math.floor(Math.random() * lofiBeat.length)]);
      setOpen(!open);
    }
  };

  const endBeat = () => {
    if (!(url in lofiBeat) || open) {
      const number = Math.floor(Math.random() * lofiBeat.length);
      setUrl(lofiBeat[number]);
    }
  };

  return (
    <Box>
      <FormGroup>
        <Box className={classes.boxForm}>
          <FormControlLabel
            control={<Switch color="warning" />}
            label="Beat Sound"
            onChange={startSong}
            defaultChecked
            labelPlacement="top"
          />
        </Box>
      </FormGroup>
      <Box className={classes.boxForm}>
        <BsVolumeDownFill />
        <Slider
          onChange={handleChangeVolume}
          value={value}
          size="small"
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
          className={classes.slider}
          color="secondary"
        />
        <BsVolumeUpFill />
      </Box>
      <Box className={classes.urlControl}>
        <TextField
          label="url youtube"
          variant="standard"
          autoComplete="off"
          color="warning"
          onChange={handleChangeUrl}
          value={url}
        />
      </Box>
      <ReactPlayer
        url={url}
        width="0"
        height="0"
        volume={value * 0.01}
        playing={open}
        onEnded={endBeat}
      />
    </Box>
  );
};

export default SelectBeat;
