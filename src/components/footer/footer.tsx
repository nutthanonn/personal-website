import React from "react";
import { Box, CssBaseline, Toolbar, IconButton } from "@mui/material";
import { BsFacebook } from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        zIndex: 3,
        position: "relative",
        bottom: 0,
        left: 0,
        bgcolor: "#c6fad2",
        mt: 10,
      }}
    >
      <CssBaseline />
      <Toolbar sx={{ my: 1 }}>
        <Box sx={{ flexGrow: 1 }}>&copy; Nutthanon Studio</Box>
        <Box>
          <IconButton
            sx={{ color: "black" }}
            href="https://www.facebook.com/Nutthanon.tho"
            target="_blank"
          >
            <BsFacebook />
          </IconButton>
        </Box>
      </Toolbar>
    </Box>
  );
};

export default Footer;
