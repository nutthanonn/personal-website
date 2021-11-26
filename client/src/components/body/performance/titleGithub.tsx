import React from "react";
import { Box, Typography } from "@mui/material";

const TitleGithub: React.FC = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        color="#f48882"
        component="a"
        href="https://github.com/nutthanonn"
        target="_blank"
        sx={{
          textDecoration: "none",
          "&:hover": { textDecoration: "underline" },
        }}
      >
        This is my Github profile
      </Typography>
    </Box>
  );
};

export default TitleGithub;
