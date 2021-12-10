import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";
import { GrReactjs } from "react-icons/gr";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { SiTypescript, SiPostgresql } from "react-icons/si";
import {
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoPython,
  IoLogoNodejs,
} from "react-icons/io";
import { IoTerminal } from "react-icons/io5";

const useStyles = makeStyles({
  toolbar: {
    backgroundColor: "#CABBE9",
    borderRadius: 10,
  },
  tool: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
  },
  titleTool: {
    backgroundColor: "#FDFDFD",
    borderRadius: 10,
    paddingInline: 10,
    paddingBlock: 5,
  },
});

const animationContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      type: "spring",
    },
  },
};

const LanguageAndTool = () => {
  const IconLanguageTool = [
    <GrReactjs size="30" color="#61DBFB" />,
    <AiFillHtml5 size="30" color="#F06529" />,
    <IoLogoCss3 size="30" color="#264de4" />,
    <IoLogoJavascript size="30" color="#F0DB4F" />,
    <SiTypescript size="30" color="#007acc" />,
    <IoLogoPython size="30" color="#4B8BBE" />,
    <SiPostgresql size="30" color="#336791" />,
    <IoTerminal size="30" color="black" />,
    <AiFillGithub size="30" color="black" />,
    <IoLogoNodejs size="30" color="#3C873A" />,
  ];
  const TooltipLanguageTool = [
    "ReactJS",
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "Python",
    "SQL",
    "Terminal",
    "Git",
    "Nodejs",
  ];

  const classes = useStyles();
  return (
    <Box>
      <motion.div
        variants={animationContainer}
        whileInView="visible"
        initial="hidden"
      >
        <Container>
          <span className={classes.titleTool}>Language and Tools</span>
        </Container>
        <Container className={classes.toolbar}>
          <Box className={classes.tool}>
            {IconLanguageTool.map((item, index) => {
              return (
                <Box key={index}>
                  <motion.div
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1 * index }}
                    viewport={{ once: true }}
                  >
                    <Tooltip title={TooltipLanguageTool[index]}>
                      <IconButton>{item}</IconButton>
                    </Tooltip>
                  </motion.div>
                </Box>
              );
            })}
          </Box>
        </Container>
      </motion.div>
    </Box>
  );
};

export default LanguageAndTool;
