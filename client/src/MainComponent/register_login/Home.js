import * as React from "react";
import { Grid, makeStyles, Hidden } from "@material-ui/core";
import NavbarHome from "./NavbarComponent/navbarHome";
import GridComponent from "./HomeComponent/gridComponent";
import { Typography } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import ContactsIcon from "@mui/icons-material/Contacts";

const theme = createTheme({
  palette: {
    primary: {
      main: orange[300],
    },
  },
});

const useStyle = makeStyles({
  root: {
    marginTop: 60,
  },
  title: {
    marginTop: 20,
    textAlign: "center",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#f7f7f7",
    width: "100%",
    height: 70,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Home = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <NavbarHome />
        <GridComponent />
        <div className={classes.footer}>
          <Typography variant="h5" color="primary">
            &copy; Nutthanon
          </Typography>
          <Typography variant="body2" color="textSecondary">
            king mongkut's university of technology thonburi
          </Typography>
        </div>
      </ThemeProvider>
      <Hidden smDown={true}>
        <Grid container className={classes.title}>
          <Grid item md={4}>
            <AccountBalanceIcon />
            <Typography>Account</Typography>
          </Grid>
          <Grid item md={4}>
            <AssignmentIndIcon />
            <Typography>Assign</Typography>
          </Grid>
          <Grid item md={4}>
            <ContactsIcon />
            <Typography>Contact</Typography>
          </Grid>
        </Grid>
      </Hidden>
    </div>
  );
};
export default Home;
