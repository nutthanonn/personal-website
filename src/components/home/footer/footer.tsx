import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@mui/styles";
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";

const useStyles = makeStyles({
  footer: {
    backgroundColor: "#393E46",
    height: "10vh",
    marginTop: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: {
    display: "flex",
    justifyContent: "flex-end",
    marginBlock: 12,
  },

  boxInContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <Box sx={{ mt: 30 }}>
      <CssBaseline />
      <Toolbar className={classes.footer}>
        <Typography
          variant="h6"
          color="white"
          sx={{ display: { md: "flex", sm: "flex", xs: "none" } }}
        >
          Nutthanon Studio
        </Typography>
        <Box className={classes.boxInContainer}>
          <Typography variant="h6" color="white">
            Contact
          </Typography>
          <Tooltip title="Instagram">
            <IconButton
              href="https://www.instagram.com/_n.tc__/"
              target="_blank"
            >
              <BsInstagram color="white" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Facebook">
            <IconButton
              href="https://www.facebook.com/Nutthanon.tho/"
              target="_blank"
            >
              <BsFacebook color="white" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Github">
            <IconButton href="https://github.com/nutthanonn" target="_blank">
              <BsGithub color="white" />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </Box>
  );
};

export default Footer;
