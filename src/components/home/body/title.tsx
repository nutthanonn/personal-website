import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import animationAvatar from "../../../lottiesAnimation/home/lottie-profile.json";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
  },
  gridChild: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
});

const animateTitle = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 2,
    },
  },
};

const animateSubTitle = {
  hidden: {
    x: 70,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 2.5,
    },
  },
};

const Title: React.FC = () => {
  const defaultAnimation = {
    loop: true,
    autoplay: true,
    animationData: animationAvatar,
  };

  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <CssBaseline />
      <Grid item md={6} xs={12} sm={12} className={classes.root}>
        <Box className={classes.gridChild}>
          <motion.div
            variants={animateTitle}
            initial="hidden"
            animate="visible"
          >
            <Typography variant="h2" color="#00ADB5">
              สวัสดีครับ
            </Typography>
          </motion.div>
          <motion.div
            variants={animateSubTitle}
            initial="hidden"
            animate="visible"
          >
            <Typography variant="body2" color="#EEEEEE">
              ผมชื่อนัท อายุ <b>18</b> ปี
              และนี่เป็นเว็ปไซต์ที่ผมสร้างขึ้นเพื่อเป็น Portfolio
              <br />
              ของมหาวิทยาลัยเกษตรศาสตร์ บางเขน
            </Typography>
          </motion.div>
        </Box>
      </Grid>
      <Grid
        item
        md={6}
        sx={{ display: { md: "flex", sm: "none", xs: "none" } }}
      >
        <Lottie options={defaultAnimation} width={400} />
      </Grid>
    </Grid>
  );
};

export default Title;
