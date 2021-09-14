import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";

const MailDrawer = () => {
  return (
    <ListItem button key={"Mail"}>
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary={"Mail"} />
    </ListItem>
  );
};

export default MailDrawer;
