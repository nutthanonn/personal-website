import * as React from "react";
import {
  Button,
  ButtonGroup,
  Divider,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import NavbarHome from "./NavbarComponent/navbarHome";
import GridComponent from "./HomeComponent/gridComponent";
import { Typography } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import AboutComponent from "./HomeComponent/aboutComponent";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const theme = createTheme({
  palette: {
    primary: {
      main: orange[300],
    },
  },
});

const useStyle = makeStyles({
  root: {
    marginTop: 60,
  },
  about: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 170,
    textAlign: "center",
    height: 100,
    width: "100%",
    backgroundColor: "#f7f7f7",
  },
  footer: {
    flexGrow: 1,
  },
});

const Home = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <NavbarHome />
        <GridComponent />
      </ThemeProvider>
      <div className={classes.about}>
        <Typography variant="h4">About</Typography>
      </div>
      <AboutComponent />

      <Divider className={classes.root} />

      {/* เเก้ Responsive */}

      <div>
        <Toolbar>
          <Typography variant="h5" color="primary" className={classes.footer}>
            &copy; Nutthanon
          </Typography>
          <ButtonGroup>
            <Button
              startIcon={<FacebookIcon />}
              color="primary"
              variant="contained"
            >
              Facebook
            </Button>
            <Button
              startIcon={<InstagramIcon />}
              color="secondary"
              variant="contained"
            >
              Instragram
            </Button>
            <Button
              startIcon={<GitHubIcon />}
              color="inherit"
              variant="contained"
            >
              Github
            </Button>
          </ButtonGroup>
        </Toolbar>
      </div>
    </div>
  );
};
export default Home;
