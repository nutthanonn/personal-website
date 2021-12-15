import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NutthanonProfile from "../../../../images/nutthanonProfile.jpeg";
import Avatar from "@mui/material/Avatar";
import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";

const useStyles = makeStyles({
  name: {
    color: "#00ADB5",
  },
});

const animateName = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      type: "spring",
    },
  },
};

const TitleAbout: React.FC = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", sm: "column", xs: "column" },
          alignItems: "center",
        }}
      >
        <Box>
          <Avatar
            src={NutthanonProfile}
            sx={{
              width: { md: 200, sm: 150, xs: 100 },
              height: { md: 200, sm: 150, xs: 100 },
            }}
          />
        </Box>
        <Box>
          <Typography
            paragraph={true}
            color="white"
            sx={{
              ml: { md: 3, sm: 0, xs: 0 },
              mt: 1,
              fontSize: { md: 20, sm: 15, xs: 10 },
            }}
          >
            สวัสดีครับ ผมชื่อ
            <span className={classes.name}> นายณัฐนนท์ ทองเจริญ </span>
            ปัจจุบันอายุ <b>18 </b>ปีครับ
            <br />
            ผมชื่นชอบการพัฒนาเว็ปไซต์ด้วย ReactJS
            และนี่เป็นเว็ปไซต์ที่ผมสร้างขึ้น
            <br />
            เพื่อ รวบรวมผลงานที่เกี่ยวกับการทำเว็ปไซต์ของผมทั้งหมด
            คุณสามารถเลือกรับชมเว็ปไซต์ต่างๆที่ผมได้จัดทำขึ้นมาได้จากทางมุมขวาบนของหน้าจอ
            <br />
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mt: 5,
              color: "white",
            }}
          >
            <motion.div
              variants={animateName}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
            >
              <Typography>นายณัฐนนท์ ทองเจริญ</Typography>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TitleAbout;
