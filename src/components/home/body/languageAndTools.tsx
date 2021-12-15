import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
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

const LanguageAndTools: React.FC = () => {
  const classes = useStyles();

  const languageAndToolsIcon = [
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
  const languageAndToolsText: string[] = [
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

  return (
    <Box sx={{ mt: 10 }}>
      <Container>
        <Box sx={{ pb: 2 }}>
          <Box sx={{ position: "absolute", ml: "10%" }}>
            <Typography
              className={classes.titleContainer}
              variant="h6"
              component="span"
              sx={{ fontSize: { xs: 12, sm: 15, md: 20 } }}
            >
              Language and Tools
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            border: 5,
            borderColor: "#00ADB5",
            borderRadius: 10,
            minHeight: 60,
            mt: 1,
          }}
        >
          <Grid
            container
            sx={{ display: "flex", justifyContent: "space-around" }}
          >
            {languageAndToolsIcon.map((icon, index) => {
              return (
                <Grid item key={index}>
                  <Tooltip title={languageAndToolsText[index]}>
                    <IconButton>{icon}</IconButton>
                  </Tooltip>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default LanguageAndTools;
