import React from "react";
import Home from "./pages/home";
import CovidToday from "./pages/covidToday";
import Search from "./pages/search";
import Reading from "./pages/reading";

import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";

const App: React.FC = () => {
  return (
    <Box>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<CovidToday />} path="/covid19" />
        <Route element={<Search />} path="/search" />
        <Route element={<Reading />} path="/reading" />
      </Routes>
    </Box>
  );
};

export default App;
