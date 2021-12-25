import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  linkText: {
    textDecoration: "none",
    color: "black",
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
      color: "#FC5185",
    },
  },
  boxItem: {
    display: "flex",
    flexDirection: "column",
  },
});

const MenuPage: React.FC = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.boxItem}>
        <Typography component="a" className={classes.linkText} href="/">
          Home Page
        </Typography>
        <Typography component="a" className={classes.linkText} href="/covid19">
          Covid19 Page
        </Typography>
        <Typography component="a" className={classes.linkText} href="/reading">
          Reading Page
        </Typography>
        <Typography component="a" className={classes.linkText} href="/search">
          Search Page
        </Typography>
      </Box>
    </Box>
  );
};

export default MenuPage;
