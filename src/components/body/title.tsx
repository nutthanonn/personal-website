import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const Title: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography variant="h2" color="#f48882">
          Kawpad Studio
        </Typography>
      </Box>

      <Divider sx={{ width: "100%" }} />
    </Box>
  );
};

export default Title;
