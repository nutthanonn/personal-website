import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  makeStyles,
} from "@material-ui/core";
import { useState } from "react";

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

const WeekChild = () => {
  const initData = [
    { id: "1", head: "Lab1", sub: "String" },
    { id: "1", head: "Lab2", sub: "ForLoop" },
  ];

  const classes = useStyle();
  const [data, setData] = useState(initData);

  return (
    <div>
      {data.map((e) => {
        return (
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {e.head}
                </Typography>
                <Typography variant="body2" color="primary" component="p">
                  {e.sub}
                </Typography>
                <Typography variant="h6">Hello</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </div>
  );
};

export default WeekChild;
