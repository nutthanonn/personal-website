import React from "react";
import { Box, Container } from "@mui/material";
import TitleGithub from "./titleGithub";
import GithubProfile from "../../../images/GithubProfile.png";

const GithubP: React.FC = () => {
  return (
    <Box>
      <Container sx={{ mt: 20 }}>
        <Box>
          <img src={GithubProfile} width="100%" height="" alt="" />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <TitleGithub />
        </Box>
      </Container>
    </Box>
  );
};

export default GithubP;
