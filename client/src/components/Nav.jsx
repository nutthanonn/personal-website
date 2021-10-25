import { Box, Toolbar, Typography, IconButton } from "@mui/material";
import { cyan } from "@mui/material/colors";
import PortraitIcon from "@mui/icons-material/Portrait";

export default function Nav() {
  return (
    <Box>
      <Toolbar>
        <IconButton>
          <PortraitIcon size="large" sx={{ color: cyan[100] }} />
        </IconButton>
        <Typography sx={{ flexGrow: 1, color: cyan[100] }} variant="h4">
          Portfolio
        </Typography>
        <Typography sx={{ marginRight: 2, color: "white" }}>About</Typography>
        <Typography sx={{ color: "white" }}>Works</Typography>
      </Toolbar>
    </Box>
  );
}
