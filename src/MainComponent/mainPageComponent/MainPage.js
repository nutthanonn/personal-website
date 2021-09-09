import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

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
}));

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffb74d",
    },
  },
});

const MainPage = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar>
          <Toolbar>
            <Typography variant="h5" className={classes.title} color="inherit">
              KMUTT LAB
            </Typography>
            <IconButton
              edge="start"
              aria-label="menu"
              color="inherit"
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
};

export default MainPage;
