import * as React from "react";
import { makeStyles, Grid, Hidden } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardComponent from "./cardComponent";
import CalendarComponent from "./calendarComponent";
import TitleComponent from "./titleComponent";

const useStyle = makeStyles({
  root: {
    marginTop: 60,
    backgroundColor: "#333",
  },
  calendar: {
    marginRight: 50,
  },
});

const GridComponent = () => {
  const classes = useStyle();
  return (
    <Grid container>
      <Grid item md={5}>
        <TitleComponent />
      </Grid>
      <Hidden smDown={true}>
        <Grid item md={7} xs={6}>
          <Card className={classes.root}>
            <Grid container>
              <Grid item md={6}>
                <CardComponent />
              </Grid>
              <Grid item md={6}>
                <div className={classes.calendar}>
                  <CalendarComponent />
                </div>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default GridComponent;
