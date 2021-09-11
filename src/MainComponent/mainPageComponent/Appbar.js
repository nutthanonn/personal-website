import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import SchoolIcon from "@material-ui/icons/School";
import DrowerInApp from "./Drower";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 30,
  },
  menuButton: {
    marginRight: theme.spacing(2),
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

const Appbar = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="sticky">
          <Toolbar>
            <Typography className={classes.title} color="inherit">
              <DrowerInApp />
            </Typography>
            <Typography variant="h5">KMUTT LAB</Typography>
            <IconButton>
              <SchoolIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
};

export default Appbar;
