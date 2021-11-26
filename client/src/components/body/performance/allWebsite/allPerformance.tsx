import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Item from "./item";

const AllPerformance: React.FC = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center", my: 10 }}>
        <Typography variant="h2" color="#f48882">
          Performance
        </Typography>
      </Box>
      <Box>
        <Container>
          <Item />
        </Container>
      </Box>
    </Box>
  );
};

export default AllPerformance;
