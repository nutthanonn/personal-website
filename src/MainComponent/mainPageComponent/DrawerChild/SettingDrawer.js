import SettingsIcon from "@material-ui/icons/Settings";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

const SettingDrawer = () => {
  return (
    <ListItem button key={"Setting"}>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary={"Setting"} />
    </ListItem>
  );
};

export default SettingDrawer;
