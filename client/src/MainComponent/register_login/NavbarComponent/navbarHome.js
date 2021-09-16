import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  AppBar,
  Toolbar,
  Button,
  makeStyles,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import SchoolIcon from "@material-ui/icons/School";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#ffb74d",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  header: {
    marginTop: 70,
  },
}));

const NavbarHome = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar color="secondary" position="fixed">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <SchoolIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              KMUTT Lab
            </Typography>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/register">
              Register
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
};

export default NavbarHome;
