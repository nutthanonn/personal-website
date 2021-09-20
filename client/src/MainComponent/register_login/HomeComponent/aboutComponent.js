import * as React from "react";
import { Grid } from "@material-ui/core";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import ContactsIcon from "@mui/icons-material/Contacts";
import { makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles({
  title: {
    marginTop: 80,
    textAlign: "center",
  },
  option: {
    marginTop: 20,
  },
});

const AboutComponent = () => {
  const classes = useStyle();

  return (
    <div>
      <Grid container className={classes.title}>
        <Grid item md={4} xs={12} className={classes.option}>
          <PeopleIcon sx={{ fontSize: 40 }} />
          <Typography>
            Professor
            <Typography variant="body2" color="textSecondary">
              Nutthanon Thongcharoen
            </Typography>
            <Typography variant="body2" color="textSecondary">
              ReactJS
            </Typography>
          </Typography>
        </Grid>
        <Grid item md={4} xs={12} className={classes.option}>
          <SchoolIcon sx={{ fontSize: 40 }} />
          <Typography>
            College
            <Typography variant="body2" color="textSecondary">
              มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
            </Typography>
          </Typography>
        </Grid>
        <Grid item md={4} xs={12} className={classes.option}>
          <ContactsIcon sx={{ fontSize: 40 }} />
          <Typography>
            Contact
            <Typography variant="body2" color="textSecondary">
              Facebook : Nutthanon Thongcharoen
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutComponent;
