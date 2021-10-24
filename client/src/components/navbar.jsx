import {
  Box,
  Button,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Badge,
} from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import MemoryIcon from "@mui/icons-material/Memory";
import { useSelector } from "react-redux";

export default function Nav() {
  const programData = useSelector((state) => state.program);
  const count = programData.length;
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 10 }}>
      <AppBar>
        <Toolbar>
          <IconButton sx={{ color: "white" }}>
            <CloudIcon size="large" />
          </IconButton>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            Cloud
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <Button
              color="inherit"
              endIcon={
                <Badge badgeContent={count} color="error">
                  <MemoryIcon sx={{ color: "white" }} size="large" />
                </Badge>
              }
            >
              Memory
            </Button>
          </Box>
          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <IconButton>
              <Badge badgeContent={count} color="error">
                <MemoryIcon sx={{ color: "white" }} size="large" />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
