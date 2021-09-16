import { Typography, makeStyles } from "@material-ui/core";
import NavbarHome from "./NavbarComponent/navbarHome";

const useStyle = makeStyles({
  root: {
    marginTop: 60,
  },
  title: {
    textAlign: "center",
  },
});

const Home = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <NavbarHome />
      <Typography className={classes.title} variant="h3">
        HomePage
      </Typography>
    </div>
  );
};

export default Home;
