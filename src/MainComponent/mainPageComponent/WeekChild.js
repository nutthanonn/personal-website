import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  makeStyles,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

const useStyle = makeStyles({
  root: {
    height: 80,
    marginTop: 20,
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
            <Toolbar>
              <Typography variant="h5" className={classes.test}>
                {head} <ArrowRightIcon /> {sub}
              </Typography>
              {/* <IconButton color="">
                <CloseIcon />
              </IconButton> */}
            </Toolbar>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default WeekChild;
