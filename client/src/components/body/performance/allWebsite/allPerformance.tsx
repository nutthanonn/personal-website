import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Item from "./item";

const AllPerformance: React.FC = () => {
  return (
    <Box>
      <Box>
        <Typography></Typography>
      </Box>
      <Box sx={{ mt: 20 }}>
        <Container>
          <Item />
        </Container>
      </Box>
    </Box>
  );
};

export default AllPerformance;
