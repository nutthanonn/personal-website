import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    width: "100%",
  },
});

const Title: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box>
        <Typography variant="h2" color="#f48882">
          Kawpad Studio
        </Typography>
      </Box>
      <Divider className={classes.divider} />
    </Box>
  );
};

export default Title;
