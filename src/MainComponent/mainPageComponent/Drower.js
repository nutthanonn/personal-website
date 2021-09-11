import React from "react";
import clsx from "clsx";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ContactsIcon from "@material-ui/icons/Contacts";
import SettingsIcon from "@material-ui/icons/Settings";
import {
  makeStyles,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function DrowerInApp() {
  const classes = useStyles();
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
        <ListItem button key={"Seting"}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary={"Seting"} />
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
          anchor="right"
          open={state["MENU"]}
          onClose={toggleDrawer("MENU", false)}
        >
          {list("MENU")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
