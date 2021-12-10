import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    bottom: 0,
    left: 0,
    position: "relative",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Box sx={{ bgcolor: "#CABBE9", height: "20vh" }} className={classes.root}>
      <Box>
        <Grid container>
          <Grid item></Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
