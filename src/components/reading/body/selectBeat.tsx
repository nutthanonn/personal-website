import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Slider from "@mui/material/Slider";
import useSound from "use-sound";
import { makeStyles } from "@mui/styles";

import { BsVolumeDownFill, BsVolumeUpFill } from "react-icons/bs";

const useStyles = makeStyles({
  boxForm: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const SelectBeat: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = useState<number>(100);
  const [play, { stop }] = useSound("", { loop: true, volume: value * 0.01 });
  const [open, setOpen] = useState<boolean>(false);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  useEffect(() => {
    if (open) {
      play();
    } else {
      stop();
    }
  }, [open]);

  return (
    <Box>
      <FormGroup>
        <Box className={classes.boxForm}>
          <FormControlLabel
            control={<Switch />}
            label="Beat Sound"
            // onChange={() => setOpen(!open)}
            defaultChecked
            color="warning"
            labelPlacement="top"
          />
        </Box>
      </FormGroup>
      <Box className={classes.boxForm}>
        <BsVolumeDownFill />
        <Slider
          onChange={handleChange}
          value={value}
          size="small"
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
          sx={{ width: 130, mx: 1, color: "black" }}
        />
        <BsVolumeUpFill />
      </Box>
    </Box>
  );
};

export default SelectBeat;
