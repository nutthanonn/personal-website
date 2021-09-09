import {
  CardHeader,
  Card,
  CardContent,
  makeStyles,
  IconButton,
  Grid,
} from "@material-ui/core";
import LoginPage from "./LoginPage";
import SchoolIcon from "@material-ui/icons/School";

const useStyles = makeStyles({
  root: {
    width: 350,
    marginLeft: 150,
  },
  text: {
    color: "orange",
    // textDecoration: "underline",
    // textDecorationColor: "#c5cae9",
    // textDecorationThickness: 1,
    marginLeft: 80,
  },
});

const CardComponent = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
      className={classes.root}
    >
      <Grid item xs={3}>
        <Card className={classes.root} elevation={3}>
          <CardHeader
            title="KMUTT Lab"
            className={classes.text}
            action={
              <IconButton>
                <SchoolIcon color="primary" />
              </IconButton>
            }
          />
          <CardContent>
            <LoginPage className={classes.login} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CardComponent;
