import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { makeStyles } from "@mui/styles";
import animationData from "../../../lotties/lotties-webdesign.json";
import Lottie from "react-lottie";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    flexDirection: "column",
  },
});

const animationTitle = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2.5,
      type: "spring",
    },
  },
};

const animateName = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      type: "spring",
    },
  },
};

const animateWebsiteLottie = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
    },
  },
};

const Asite = () => {
  const classes = useStyles();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <Box className={classes.root}>
      <motion.div
        variants={animateName}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <Typography variant="h2">Welcome to my website</Typography>
      </motion.div>
      <motion.div
        variants={animationTitle}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <Typography variant="body2">
          สวัสดีครับ ผมชื่อณัฐนนท์ หรือ จะเรียกว่า 'นัท' ก็ได้นะ
        </Typography>
        <Typography variant="body2">
          ผมอายุ <b>18</b> ปี เเละชื่นชอบการพัฒนาเว็ปไซต์เป็นอย่างมาก
        </Typography>
      </motion.div>
      <motion.div
        variants={animateWebsiteLottie}
        animate="visible"
        initial="hidden"
      >
        <Lottie options={defaultOptions} width={300} height={300} />
      </motion.div>
    </Box>
  );
};

export default Asite;
