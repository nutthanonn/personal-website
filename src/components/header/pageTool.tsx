import React, { useState } from "react";
import MenuPage from "./menuPage";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import { makeStyles } from "@mui/styles";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

const useStyles = makeStyles({
  page: {
    display: "flex",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
      color: "#71C9CE",
    },
  },
});

const PageTool: React.FC = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <Box>
      <Typography className={classes.page} onClick={handleClick}>
        Page
        {open ? <MdOutlineArrowDropDown /> : <MdOutlineArrowDropUp />}
      </Typography>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box sx={{ p: 2 }}>
          <MenuPage />
        </Box>
      </Popover>
    </Box>
  );
};

export default PageTool;
