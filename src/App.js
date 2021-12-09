import Box from "@mui/material/Box";
import Home from "./pages/home";
import Nav from "./components/header/navbar";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Box sx={{ bgcolor: "#FCD1D1", height: "1000vh" }}>
      <CssBaseline />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Box>
  );
};

export default App;
