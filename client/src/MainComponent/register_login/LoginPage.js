import * as React from "react";
import {
  Button,
  TextField,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import NavbarLogin from "./NavbarComponent/navbarLogin";

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
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <AccountCircle color="primary" />
            </Grid>
            <Grid item>
              <TextField
                id="input-with-icon-grid"
                label="Username"
                value={user}
                onChange={Username}
                color="primary"
                error={!checkUser}
              />
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <VpnKeyIcon color="primary" />
            </Grid>
            <Grid item>
              <TextField
                id="input-with-icon-grid"
                label="Password"
                value={pass}
                onChange={Password}
                color="primary"
                type="password"
                error={!checkPassword}
              />
            </Grid>
          </Grid>
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
    </div>
  );
};

export default LoginPage;