import { Box, Typography } from "@mui/material";
import { cyan } from "@mui/material/colors";

//compoenent
import Icon from "./icon";
import CopyRight from "./copyRight";

export default function HomeText() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "75vh",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h1">Hello!</Typography>
          <Box sx={{ display: "flex", flexDirection: "rows" }}>
            <Typography variant="h2">I'm &nbsp;</Typography>
            <Typography sx={{ color: cyan[100] }} variant="h2">
              Nutthanon
            </Typography>
          </Box>
          <Typography variant="h4" sx={{ color: "white", marginTop: 1 }}>
            Web Developer
          </Typography>

          <Icon />
        </Box>
      </Box>
      <CopyRight />
    </Box>
  );
}
