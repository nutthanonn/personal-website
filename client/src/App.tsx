import React from "react";
import { Box } from "@mui/material";
import Main from "./pages/main";

const App: React.FC = () => {
  return (
    <Box sx={{ bgcolor: "#F6FFEE" }}>
      <Main />
      <Box sx={{ height: "300vh" }}></Box>
    </Box>
  );
};

export default App;
