import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import myPicture from "../../../images/my_picture.jpg";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    marginTop: 100,
  },
  avatarSize: {
    width: 100,
    height: 100,
  },
});

const Body = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Avatar src={myPicture} className={classes.avatarSize} />
    </Box>
  );
};

export default Body;
