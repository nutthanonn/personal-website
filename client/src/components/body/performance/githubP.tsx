import React from "react";
import { Box, Container } from "@mui/material";
import TitleGithub from "./titleGithub";
import { motion } from "framer-motion";
import GithubProfile from "../../../images/GithubProfile.png";

const GithubP: React.FC = () => {
  return (
    <Box>
      <Container sx={{ mt: 20 }}>
        <motion.div
          whileInView={{ x: 0 }}
          initial={{ x: 100 }}
          transition={{ duration: 3, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
        >
          <img src={GithubProfile} width="100%" height="" alt="" />
        </motion.div>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <TitleGithub />
        </Box>
      </Container>
    </Box>
  );
};

export default GithubP;
