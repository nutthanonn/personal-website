import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Item from "./item";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: 100,
    marginBottom: 10,
  },
});

const AllPerformance: React.FC = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.root}>
        <Typography variant="h3" color="black">
          Performance
        </Typography>
      </Box>
      <Box>
        <Container>
          <Item />
        </Container>
      </Box>
    </Box>
  );
};

export default AllPerformance;
