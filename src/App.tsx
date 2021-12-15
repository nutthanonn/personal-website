import React from "react";
import Home from "./pages/home";
import Nav from "./components/header/navbar";
import CovidToday from "./pages/covidToday";

import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";

const App: React.FC = () => {
  return (
    <Box>
      <Nav />
      <Routes>
        <Route element={<Home />} path="/home" />
        <Route element={<CovidToday />} path="/" />
      </Routes>
    </Box>
  );
};

export default App;
