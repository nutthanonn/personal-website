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
          fermentum tempor. Maecenas nec nulla lacinia, pretium lorem sed,
          iaculis mi. Donec id neque et odio fermentum tincidunt et eu augue.
          Aenean ultricies tempus facilisis. Nulla metus sapien, posuere non
          suscipit ut, maximus ornare leo. Vivamus eget risus non ex malesuada
          elementum. Maecenas non dapibus lectus. Nam euismod,
        </Typography>
      </Box>
    </Box>
  );
}
