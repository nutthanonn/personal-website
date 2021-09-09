import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  makeStyles,
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

const MainPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar
          color="inherit"
          aria-label="menu"
          edge="start"
          className={classes.menuButton}
        >
          <MenuIcon />
          <Typography variant="h5" className={classes.title}>
            Navbar
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MainPage;
