import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
  createTheme,
  ThemeProvider,
  CssBaseline,
  useScrollTrigger,
  Fab,
  Zoom,
  Hidden,
} from "@material-ui/core";
import React from "react";
import SchoolIcon from "@material-ui/icons/School";
import PropTypes from "prop-types";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import DrowerInApp from "./Drower";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },

  title: {
    flexGrow: 1,
  },
}));

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffb74d",
    },
  },
});

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const AppbarComponent = (props) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography
            className={classes.title}
            color="inherit"
            variant="subtitle1"
          >
            <DrowerInApp />
          </Typography>
          <Typography variant="h5">KMUTT LAB</Typography>
          <IconButton>
            <SchoolIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Hidden mdDown={true}>
        <ScrollTop {...props} position="absolute">
          <Fab color="primary" size="large">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </Hidden>
    </ThemeProvider>
  );
};

export default AppbarComponent;
