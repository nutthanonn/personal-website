import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Performance } from "../../../../api/performanceApi";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

const useStyles = makeStyles({
  root: {
    paddingTop: 100,
  },
  gridTextLink: {
    textDecoration: "none",
    color: "black",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

const Item: React.FC = () => {
  const classes = useStyles();
  return (
    <Box>
      {Performance.map((item) => {
        return (
          <Grid container className={classes.root} spacing={5}>
            <Grid item md={6} sm={12}>
              <img src={item.pic} width="100%" height="" alt="คนละครึ่ง" />
            </Grid>
            <Grid item md={6} sm={12}>
              <Typography variant="h4">{item.name}</Typography>
              <Typography variant="body1">
                Responsive :
                {item.responsive === "y" ? (
                  <AiOutlineCheck />
                ) : (
                  <AiOutlineClose />
                )}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Tools
              </Typography>

              <ul>
                {item.tools.map((e) => {
                  return <li>{e}</li>;
                })}
              </ul>
              <Typography
                component="a"
                href={item.link}
                target="_blank"
                className={classes.gridTextLink}
              >
                You can see more...
              </Typography>
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
};

export default Item;
