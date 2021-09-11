import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  makeStyles,
} from "@material-ui/core";

const useStyle = makeStyles({
  root: {
    height: 80,
    marginBottom: 20,
    "&:hover": {
      backgroundColor: "#e5e5e5",
    },
  },
  test: {
    flexGrow: 1,
  },
});

const WeekChild = (props) => {
  const { head, sub } = props;
  const classes = useStyle();

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5">
              {head}
            </Typography>
            <Typography variant="body2" color="primary" component="p">
              {sub}
            </Typography>
            <Typography variant="h6">Hello</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default WeekChild;
