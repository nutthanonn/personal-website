import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import myPicture from "../../../images/my_picture.jpg";
import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";

const useStyles = makeStyles({
  root: {
    marginTop: 100,
  },
});

const animationAvatar = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};

const Body = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <motion.div variants={animationAvatar} animate="visible" initial="hidden">
        <Avatar
          src={myPicture}
          className={classes.avatarSize}
          sx={{
            width: { md: 400, sm: 300, xs: 200 },
            height: { md: 400, sm: 300, xs: 200 },
          }}
        />
      </motion.div>
    </Box>
  );
};

export default Body;
