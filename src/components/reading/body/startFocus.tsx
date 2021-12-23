import React, { useState, useEffect } from "react";
import BackdropItem from "./item/backDropItem";

import Box from "@mui/material/Box";
import ReactPlayer from "react-player";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";

import { observer } from "mobx-react";
import { DataReadingStoreImpl } from "../../../store/reading/dataReadingStore";

interface StartFocusProps {
  store: DataReadingStoreImpl;
}

const StartFocus: React.FC<StartFocusProps> = observer(({ store }) => {
  const [open, setOpen] = React.useState(false);
  const [boxSound, setBoxSound] = useState<string[]>([]);
  const [bg, setBg] = useState<string>("");

  useEffect(() => {
    setBg(store.get_bg());
    setBoxSound(store.start_focus());
  }, [store, store.Background, store.AsmrSong]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  const complete = () => {
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
        <Box sx={{ position: "absolute" }}>
          <ReactPlayer
            muted={true}
            url={bg}
            width="200vh"
            height="100vw"
            controls={false}
            loop={true}
            playing={true}
          />
        </Box>
        <BackdropItem
          time={store.Time}
          url={bg}
          boxSounds={boxSound}
          complete={complete}
        />
      </Backdrop>
    </Box>
  );
});

export default StartFocus;
