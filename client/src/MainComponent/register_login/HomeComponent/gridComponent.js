import * as React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardComponent from "./cardComponent";
import CalendarComponent from "./calendarComponent";
import TitleComponent from "./titleComponent";

const useStyle = makeStyles({
  root: {
    marginTop: 60,
  },
});

const GridComponent = () => {
  const classes = useStyle();
  return (
    <Grid container>
      <Grid item md={6} xs={6}>
        <TitleComponent />
      </Grid>
      <Grid item md={6} xs={6}>
        <Card className={classes.root}>
          <Grid container>
            <Grid item md={6}>
              <CardComponent />
            </Grid>
            <Grid item md={6}>
              <CalendarComponent />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default GridComponent;
