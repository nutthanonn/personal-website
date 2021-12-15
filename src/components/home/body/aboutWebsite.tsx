import React from "react";
import TitleAbout from "./aboutItem/titleAbout";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { motion } from "framer-motion";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {},
  container: {
    border: 1,
  },
  titleContainer: {
    backgroundColor: "#EEEEEE",
    paddingInline: 15,
    paddingBlock: 5,
    borderRadius: 10,
  },
});

const animationHeader = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

const AboutWebsite: React.FC = () => {
  const classes = useStyles();

  return (
    <Box>
      <Container>
        <Box sx={{ pb: 2 }}>
          <Box sx={{ position: "absolute", ml: "10%" }}>
            <motion.div
              variants={animationHeader}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
            >
              <Typography
                className={classes.titleContainer}
                variant="h6"
                component="span"
                sx={{ fontSize: { xs: 12, sm: 15, md: 20 } }}
              >
                About This Website
              </Typography>
            </motion.div>
          </Box>
        </Box>
        <Box
          sx={{
            border: 5,
            borderColor: "#00ADB5",
            borderRadius: 10,
          }}
        >
          <Box sx={{ p: 5 }}>
            <TitleAbout />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutWebsite;
