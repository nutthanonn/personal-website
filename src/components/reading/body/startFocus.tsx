import React, { useState, useEffect } from "react";
import BackdropItem from "./item/backDropItem";

import Box from "@mui/material/Box";
import ReactPlayer from "react-player";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

import { observer } from "mobx-react";
import { DataReadingStoreImpl } from "../../../store/reading/dataReadingStore";

interface StartFocusProps {
  store: DataReadingStoreImpl;
}

const useStyles = makeStyles({
  boxModal: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: 10,
  },
});

const StartFocus: React.FC<StartFocusProps> = observer(({ store }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [boxSound, setBoxSound] = useState<string[]>([]);
  const [bg, setBg] = useState<string>("");
  const [timeAll, setTimeAll] = useState<number>(store.Time);
  const [check, setCheck] = useState<boolean>(true);

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const countDown = () => {
    var time = store.Time;
    const startTime = setInterval(() => {
      time -= 1;
      console.log(time);
      setTimeAll(time);
      if (time <= 0 || check === false) {
        setOpen(false);
        setTimeAll(0);
        clearInterval(startTime);
      }
    }, 1000);
  };

  useEffect(() => {
    setBg(store.get_bg());
    setBoxSound(store.start_focus());
  }, [store, store.Background, store.AsmrSong]);

  const handleClose = () => {
    setOpen(false);
    //target countdown
    setCheck(false);
  };

  const handleToggle = () => {
    setOpen(true);
    if (check) {
      countDown();
    }
    handleCloseModal();
  };

  return (
    <Box>
      <Button
        variant="outlined"
        size="large"
        sx={{ bgcolor: "white", borderColor: "pink" }}
        onClick={handleOpenModal}
      >
        Start focus
      </Button>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.boxModal}>
          <Typography sx={{ fontSize: { md: 20, sm: 15, xs: 10 } }}>
            เมื่อทำการกด Start จะไม่สามารถเปลี่ยนเวลาได้ กรุณาตรวจสอบเวลาให้ดี
          </Typography>
          <Button
            onClick={handleToggle}
            variant="text"
            size="large"
            sx={{ bgcolor: "white", borderColor: "pink" }}
          >
            Start focus
          </Button>
        </Box>
      </Modal>
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
        <BackdropItem time={timeAll} boxSounds={boxSound} />
      </Backdrop>
    </Box>
  );
});

export default StartFocus;
