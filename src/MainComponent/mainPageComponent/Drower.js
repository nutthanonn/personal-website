import React from "react";
import clsx from "clsx";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ContactsIcon from "@material-ui/icons/Contacts";
import SettingsIcon from "@material-ui/icons/Settings";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import { useState } from "react";
import {
  makeStyles,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  styleTime: {
    textAlign: "center",
    margin: 10,
  },
});

export default function DrowerInApp() {
  const classes = useStyles();
  const [time, setTime] = useState();
  const [state, setState] = React.useState({
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  setInterval(() => {
    const currentDate = new Date().toLocaleTimeString();
    setTime(currentDate);
  }, 1000);

  // Drower

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Grid
        container
        spacing={1}
        alignItems="flex-end"
        className={classes.styleTime}
      >
        <Grid item>
          <WatchLaterIcon />
        </Grid>
        <Grid item>
          <Typography variant="h6" color="#212121">
            {time}
          </Typography>
        </Grid>
      </Grid>

      <Divider />

      <List>
        <ListItem button key={"Mail"}>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={"Mail"} />
        </ListItem>
        <ListItem button key={"Contact"}>
          <ListItemIcon>
            <ContactsIcon />
          </ListItemIcon>
          <ListItemText primary={"Contact"} />
        </ListItem>
        <ListItem button key={"Setting"}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary={"Setting"} />
        </ListItem>

        <Divider />

        <ListItem button key={"LogOut"}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary={"LogOut"} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key="MENU">
        <Button onClick={toggleDrawer("MENU", true)} endIcon={<MenuIcon />}>
          MENU
        </Button>
        <Drawer
          anchor="left"
          open={state["MENU"]}
          onClose={toggleDrawer("MENU", false)}
        >
          {list("MENU")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
