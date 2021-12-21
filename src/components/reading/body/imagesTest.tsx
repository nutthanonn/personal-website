import React, { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { useSound } from "use-sound";

interface TestProps {
  sound: any;
  pic: string;
  title: string;
}

const Test: React.FC<TestProps> = ({ sound, pic, title }) => {
  const [soundVolume, setSoundVolume] = useState<number>(0.5);
  const [isStart, setIsStart] = useState<boolean>(false);

  const [play, { stop }] = useSound(sound);

  const setSound = () => {
    if (isStart) {
      stop();
      setIsStart(false);
    } else {
      play();
      setIsStart(true);
    }
  };

  return (
    <Box
      sx={{
        m: 1,
        width: 200,
        height: 200,
        bgcolor: "white",
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      onClick={setSound}
    >
      <Box component="img" src={pic} sx={{ width: 150, height: 150 }} />
      <Typography variant="h5">{title}</Typography>
    </Box>
  );
};

export default Test;
