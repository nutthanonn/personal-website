import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import CountUp from "react-countup";
import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";

import { DialyStoreImpl } from "../../../store/covidPageStore/dialyStore";
import { DialyInterfaceProps } from "../../../interface/covidPage/dialyApiInterface";

interface TitleProps {
  DialyStore: DialyStoreImpl;
}

const useStyles = makeStyles({
  newCase: {
    fontSize: 80,
    color: "#FFAAA5",
  },
  count: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

const animationTitle = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 2,
    },
  },
};

const animationSubHeader = {
  hidden: {
    opacity: 0,
    x: 70,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 3,
    },
  },
};

const Title: React.FC<TitleProps> = ({ DialyStore }) => {
  const classes = useStyles();
  const [dialyData, setDialyData] = useState<DialyInterfaceProps | null>(null);

  useEffect(() => {
    async function fetch() {
      const res = await DialyStore.fetch();
      setDialyData(res[0]);
    }
    fetch();
  });

  return (
    <Box>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: 2,
        }}
      >
        <motion.div
          variants={animationTitle}
          animate="visible"
          initial="hidden"
        >
          <Typography
            color="#494949"
            variant="h3"
            sx={{ fontSize: { md: 30, xs: 20, sm: 25 } }}
          >
            ยอดผู้ติดเชื้อวันนี้
          </Typography>
        </motion.div>
        <motion.div
          variants={animationSubHeader}
          animate="visible"
          initial="hidden"
        >
          <Box className={classes.count}>
            <CountUp
              end={dialyData ? dialyData.new_case : 0}
              duration={1.5}
              className={classes.newCase}
            />
            <Typography variant="h4">ราย</Typography>
          </Box>
          <Typography>
            ข้อมูลอัพเดท ณ วันที่/เวลา: <b>{dialyData?.update_date}</b>
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Title;
