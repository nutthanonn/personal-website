import React from "react";
import clsx from "clsx";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
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
    console.log(state);
  };

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
        {["Inbox"].map((text) => (
          <ListItem button key={text}>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        <Divider />
        <br />
        <ListItem button key={"Login"}>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary={"Login"} />
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
