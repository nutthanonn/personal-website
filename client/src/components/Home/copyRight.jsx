import { Box, Typography } from "@mui/material";

export default function CopyRight() {
  return (
    <Box
      sx={{
        width: "100%",
        height: 120,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        border: 1,
      }}
    >
      <Typography variant="h6" sx={{ color: "whiteSmoke" }}>
        &copy; All rights reserved Nutthanon @2021
      </Typography>
    </Box>
  );
}
