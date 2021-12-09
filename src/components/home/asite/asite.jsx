import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    flexDirection: "column",
  },
});

const Asite = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="h2">NUTTHANON</Typography>
      <Typography>Hello my name is nutthanon</Typography>
    </Box>
  );
};

export default Asite;
