import { Box, IconButton } from "@mui/material";
//Icon fontAwsome
import { FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { DiJavascript1, DiCss3 } from "react-icons/di";
import { SiMaterialui } from "react-icons/si";

export default function Icon() {
  return (
    <Box>
      <IconButton sx={{ bgcolor: "white", mr: 2 }}>
        <AiFillHtml5 size="1em" color="black" />
      </IconButton>
      <IconButton sx={{ bgcolor: "white", m: 2 }}>
        <DiCss3 size="1em" color="black" />
      </IconButton>
      <IconButton sx={{ bgcolor: "white", m: 2 }}>
        <DiJavascript1 size="1em" color="black" />
      </IconButton>
      <IconButton sx={{ bgcolor: "white", m: 2 }}>
        <FaReact size="1em" color="black" />
      </IconButton>
      <IconButton sx={{ bgcolor: "white", m: 2 }}>
        <SiMaterialui size="1em" color="black" />
      </IconButton>
    </Box>
  );
}
