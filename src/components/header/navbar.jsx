import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    top: 0,
    left: 0,
    position: "sticky",
    backgroundColor: "#FDFDFD",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    zIndex: 10,
    opacity: 0.95,
  },
  logo: {
    flexGrow: 1,
  },
  linkTab: {
    minWidth: 400,
    display: "flex",
    justifyContent: "space-around",
  },
});

const Nav = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <Toolbar>
        <Box className={classes.logo}>
          <Typography variant="h4">Portfolio</Typography>
        </Box>
        <Box className={classes.linkTab}>
          <Link href="/" underline="none">
            Home
          </Link>
          <Link href="/performance" underline="none">
            Performance
          </Link>
          <Link href="/Blog" underline="none">
            Blog
          </Link>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            pages
            <MdOutlineKeyboardArrowDown />
          </Typography>
        </Box>
      </Toolbar>
    </Box>
  );
};

export default Nav;
