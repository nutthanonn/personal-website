import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Toolbar from "@mui/material/Toolbar";
import Lottie from "react-lottie";
import animationReactIcon from "../../../lottiesAnimation/home/lottie-react-logo-spinning.json";
import { makeStyles } from "@mui/styles";
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";

const useStyles = makeStyles({
  footer: {
    backgroundColor: "#393E46",
    height: "10vh",
    marginTop: 10,
    display: "flex",
    alignItems: "center",
  },
  container: {
    display: "flex",
    justifyContent: "flex-end",
    marginBlock: 12,
  },
  titleContact: {
    flexGrow: 1,
  },
  footerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

const Footer: React.FC = () => {
  const classes = useStyles();
  const defaultAnimationReactIcon = {
    loop: true,
    autoplay: true,
    animationData: animationReactIcon,
  };

  return (
    <Box sx={{ mt: 30 }}>
      <Container className={classes.container}>
        <Box component="span">
          <Lottie options={defaultAnimationReactIcon} width={100} />
        </Box>
      </Container>
      <CssBaseline />
      <Toolbar className={classes.footer}>
        <Container className={classes.footerContainer}>
          <Typography
            variant="h6"
            className={classes.titleContact}
            color="white"
            sx={{ display: { md: "flex", sm: "flex", xs: "none" } }}
          >
            Nutthanon Studio
          </Typography>
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
        </Container>
      </Toolbar>
    </Box>
  );
};

export default Footer;
