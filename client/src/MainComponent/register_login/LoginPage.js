import * as React from "react";
import {
  Button,
  TextField,
  makeStyles,
  Typography,
  Box,
  ThemeProvider,
  createTheme,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import NavbarLogin from "./NavbarComponent/navbarLogin";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#ffb74d",
    },
  },
});

const useStyle = makeStyles({
  btn: {
    marginTop: 20,
    "&:hover": {
      backgroundColor: "primary",
    },
  },
  root: {
    marginTop: 200,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginBottom: 20,
  },
  icon: {
    marginRight: 5,
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

const LoginPage = () => {
  const classes = useStyle();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const [formCheck, setFormCheck] = useState(false);
  const [checkUser, setCheckUser] = useState(false);
  const [checkPassword, setCheckPasssword] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant) => {
    enqueueSnackbar(`Login ${variant}`, { variant });
  };

  const Username = (event) => {
    setUser(event.target.value);
  };

  const Password = (event) => {
    setPass(event.target.value);
  };

  const SubmitFul = (event) => {
    event.preventDefault();
    handleClickVariant("warning"); // รอเเก้ BackEnd เเล้วค่อยมาเปลี่ยนตรงนี้
    setUser("");
    setPass("");
  };

  useEffect(() => {
    const check = user.trim().length > 1 && pass.length > 1;
    const userCheck = user.trim().length > 1;
    const passwordCheck = pass.length > 1;
    setCheckPasssword(passwordCheck);
    setCheckUser(userCheck);
    setFormCheck(check);
  }, [user, pass]);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.main}>
        <NavbarLogin />
        <form
          noValidate
          autoComplete="off"
          onSubmit={SubmitFul}
          className={classes.root}
        >
          <Typography variant="h3" color="primary" className={classes.title}>
            Login
          </Typography>
          <div>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <AccountCircle
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
                className={classes.icon}
                color="primary"
              />
              <TextField
                id="input-with-icon-user"
                label="Username"
                value={user}
                onChange={Username}
                color="primary"
                error={!checkUser}
              />
            </Box>
          </div>
          <div>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <VpnKeyIcon
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
                className={classes.icon}
                color="primary"
              />
              <TextField
                id="input-with-icon-pass"
                label="Password"
                value={pass}
                onChange={Password}
                color="primary"
                type="password"
                error={!checkPassword}
              />
            </Box>
          </div>
          <Button
            className={classes.btn}
            variant="outlined"
            color="primary"
            type="submit"
            disabled={!formCheck}
            startIcon={<NearMeIcon />}
            size="small"
          >
            Submit
          </Button>
        </form>
        <div className={classes.footer}>
          <Typography variant="h5" color="primary">
            &copy; Nutthanon
          </Typography>
          <Typography variant="body2" color="secondary">
            king mongkut's university of technology thonburi
          </Typography>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default LoginPage;
