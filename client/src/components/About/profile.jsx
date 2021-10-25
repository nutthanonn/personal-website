import { Box, Avatar, Typography } from "@mui/material";

export default function Profile() {
  return (
    <Box sx={{ display: "flex", mt: 10 }}>
      <Avatar sx={{ width: 300, height: 300, mr: 10 }}>N</Avatar>
      <Box
        sx={{
          mt: 5,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h3">ABOUT ME</Typography>
        <Typography variant="h6" sx={{ color: "white" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
          hendrerit eros. Aliquam posuere nulla enim, ac molestie leo consequat
          nec. Integer et facilisis risus. Vivamus egestas ultrices augue
        </Typography>
      </Box>
    </Box>
  );
}
