import React from "react";
import { Box } from "@mui/material";
import GithubP from "./githubP";
import AllPerformance from "./allWebsite/allPerformance";

const MainPerforment: React.FC = () => {
  return (
    <Box sx={{ mt: 20 }}>
      <GithubP />
      <AllPerformance />
    </Box>
  );
};

export default MainPerforment;
