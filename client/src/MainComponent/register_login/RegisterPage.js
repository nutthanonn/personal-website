import * as React from "react";
import axios from "axios";
import {
  Button,
  TextField,
  makeStyles,
  Typography,
  Box,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import CheckIcon from "@material-ui/icons/Check";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import NavbarRegister from "./NavbarComponent/navbarRegister";

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

const RegisterPage = () => {
  const classes = useStyle();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [email, setEmail] = useState("");

  //Buttoncheck
  const [formCheck, setFormCheck] = useState(false);
  const [checkUser, setCheckUser] = useState(false);
  const [checkPassword, setCheckPasssword] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);

  //sanckBar
  const { enqueueSnackbar } = useSnackbar();
  const handleClickVariant = (variant) => {
    enqueueSnackbar(`Register ${variant}`, { variant });
  };

  const Username = (event) => {
    setUser(event.target.value);
  };

  const Password = (event) => {
    setPass(event.target.value);
  };

  const ConfirmPassword = (event) => {
    setConfirm(event.target.value);
  };

  const Email = (event) => {
    setEmail(event.target.value);
  };

  async function fetchData() {
    await axios.post(`http://localhost:8080/register`, {
      username: user,
      password: pass,
    });
  }

  //formSubmit
  const SubmitFul = (event) => {
    event.preventDefault();
    // CheckSamePass();
    fetchData();
    handleClickVariant("success"); // รอเเก้ BackEnd เเล้วค่อยมาเปลี่ยนตรงนี้
    setUser("");
    setPass("");
    setConfirm("");
    setEmail("");
  };

  //change
  useEffect(() => {
    const check =
      user.trim().length > 1 &&
      pass.length > 1 &&
      confirm.length > 1 &&
      email.length > 5;
    const userCheck = user.trim().length > 1;
    const passwordCheck = pass.length > 1;
    const EmailCheck = email.length > 5;
    setCheckPasssword(passwordCheck);
    setCheckUser(userCheck);
    setCheckEmail(EmailCheck);
    setFormCheck(check);
  }, [user, pass, confirm, email]);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.main}>
        <NavbarRegister />
        <form
          noValidate
          autoComplete="off"
          onSubmit={SubmitFul}
          className={classes.root}
        >
          <Typography variant="h3" color="primary" className={classes.title}>
            Register
          </Typography>

          {/* UserID */}
          <div>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <AccountCircle
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
                className={classes.icon}
                color="primary"
              />
              <TextField
                id="input-with-sx"
                label="UserID"
                value={user}
                onChange={Username}
                color="primary"
                error={!checkUser}
                variant="standard"
                type="text"
              />
            </Box>
          </div>

          {/* Pass */}
          <div>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <VpnKeyIcon
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
                className={classes.icon}
                color="primary"
              />
              <TextField
                id="input-with-icon-grid"
                label="Password"
                value={pass}
                onChange={Password}
                color="primary"
                type="password"
                error={!checkPassword}
              />
            </Box>
          </div>

          {/* Confirm */}
          <div>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <CheckIcon
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
                className={classes.icon}
                color="primary"
              />
              <TextField
                id="input-with-icon-check"
                label="Comfirm Password"
                value={confirm}
                onChange={ConfirmPassword}
                color="primary"
                type="password"
                error={!checkPassword}
              />
            </Box>
          </div>

          {/* Email */}
          <div>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <AlternateEmailIcon
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
                className={classes.icon}
                color="primary"
              />
              <TextField
                id="input-with-icon-email"
                label="Email"
                value={email}
                onChange={Email}
                color="primary"
                type="email"
                error={!checkEmail}
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

export default RegisterPage;
