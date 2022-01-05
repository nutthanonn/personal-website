import React, { useState } from "react";
import PageTool from "../../header/pageTool";
import ScrollTop from "./scrollTop";
import DrawerItem from "../../header/drawerItem";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Fab from "@mui/material/Fab";
import { makeStyles } from "@mui/styles";
import { AiOutlineArrowUp, AiOutlineMenu } from "react-icons/ai";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#D3E0DC",
  },
  modal: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    padding: 20,
    background: "#A1EAFB",
  },
});

const Nav: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false); //Drawer
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box className={classes.root}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5">Reading</Typography>
        </Box>
        <Box sx={{ mr: 2 }}>
          <Button onClick={handleOpen} size="small" sx={{ color: "#064663" }}>
            How to use
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className={classes.modal}>
              <Typography id="modal-modal-title" variant="h6" component="h1">
                วิธีการใช้งาน
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 3 }}>
                เว็ปไซต์นี้จะเกี่ยวกับการจับเวลาอ่านหนังสือ
                โดยที่ผู้ใช้งานสามารถเลือกเพลง เลือกเสียงASMR และสามารถเลือก
                Background ในการอ่านหนังสือได้ เเละ
                ผู้ใช้งานสามารถนำลิ้งคลิปวิดีโอจาก Youtube
                มาใส่เพื่อเปิดฟังเพลงที่ต้องการได้
              </Typography>
            </Box>
          </Modal>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none", sm: "flex" } }}>
          <IconButton onClick={() => setIsOpen(!isOpen)}>
            <AiOutlineMenu />
          </IconButton>
          <Drawer
            open={isOpen}
            onClose={() => setIsOpen(!isOpen)}
            anchor="right"
          >
            <Box sx={{ width: 300 }}>
              <DrawerItem />
            </Box>
          </Drawer>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex", sm: "none" } }}>
          <PageTool />
        </Box>
        <Box id="back-to-top-anchor" />
        <ScrollTop>
          <Fab color="secondary" size="medium">
            <AiOutlineArrowUp />
          </Fab>
        </ScrollTop>
      </Toolbar>
    </Box>
  );
};

export default Nav;
