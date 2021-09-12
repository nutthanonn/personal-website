import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import ContactsIcon from "@material-ui/icons/Contacts";

const ContactDrawer = () => {
  return (
    <ListItem button key={"Contact"}>
      <ListItemIcon>
        <ContactsIcon />
      </ListItemIcon>
      <ListItemText primary={"Contact"} />
    </ListItem>
  );
};

export default ContactDrawer;
