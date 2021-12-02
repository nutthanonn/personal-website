import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TitleGithub from "./titleGithub";
import GithubProfile from "../../../images/GithubProfile.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    marginTop: 20,
  },
  title: {
    display: "flex",
    justifyContent: "center",
  },
});

const GithubP: React.FC = () => {
  const classes = useStyles();
  return (
    <Box>
      <Container className={classes.root}>
        <Box>
          <img src={GithubProfile} width="100%" height="" alt="" />
        </Box>
        <Box className={classes.title}>
          <TitleGithub />
        </Box>
      </Container>
    </Box>
  );
};

export default GithubP;
