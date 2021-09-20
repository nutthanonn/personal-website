import React from "react";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  makeStyles,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Grid,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import SettingDrawer from "./DrawerChild/SettingDrawer";
import ContactDrawer from "./DrawerChild/ContactDrawer";
import MailDrawer from "./DrawerChild/MailDrawer";

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
          <Typography variant="h6">{time}</Typography>
        </Grid>
      </Grid>

      <Divider />

      <List>
        <MailDrawer />
        <ContactDrawer />
        <SettingDrawer />

        <Divider />

        <ListItem button key={"LogOut"} component={Link} to="/">
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
      <Tooltip title="menu">
        <IconButton onClick={toggleDrawer("MENU", true)}>
          <MenuIcon />
        </IconButton>
      </Tooltip>
      <Drawer
        anchor="left"
        open={state["MENU"]}
        onClose={toggleDrawer("MENU", false)}
      >
        {list("MENU")}
      </Drawer>
    </div>
  );
}
