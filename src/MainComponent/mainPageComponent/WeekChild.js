import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  makeStyles,
  Toolbar,
} from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";

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
                {head}
                <Typography variant="body2" color="textSecondary">
                  {sub}
                </Typography>
              </Typography>
              <Typography fontSize="small">
                <EditIcon />
              </Typography>
            </Toolbar>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default WeekChild;
