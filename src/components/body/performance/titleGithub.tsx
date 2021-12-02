import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  title: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

const TitleGithub: React.FC = () => {
  const classes = useStyles();
  return (
    <Box>
      <Typography
        variant="h4"
        color="#f48882"
        component="a"
        href="https://github.com/nutthanonn"
        target="_blank"
        className={classes.title}
      >
        This is my Github profile
      </Typography>
    </Box>
  );
};

export default TitleGithub;
