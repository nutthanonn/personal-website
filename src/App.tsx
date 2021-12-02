import React from "react";
import Box from "@mui/material/Box";
import Main from "./pages/main";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  root: {
    backgroundColor: "#F6FFEE",
  },
});

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Main />
    </Box>
  );
};

export default App;
