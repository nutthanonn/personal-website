import { Button, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import NearMeIcon from "@material-ui/icons/NearMe";
import { Grid, makeStyles } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

const useStyle = makeStyles({
  btn: {
    marginTop: 20,
    marginLeft: 55,
    "&:hover": {
      backgroundColor: "primary",
    },
  },
  main: {
    paddingLeft: 50,
  },
});

const LoginPage = () => {
  const classes = useStyle();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [formCheck, setFormCheck] = useState(false);
  const [checkUser, setCheckUser] = useState(false);
  const [checkPassword, setCheckPasssword] = useState(false);

  const Username = (event) => {
    setUser(event.target.value);
  };

  const Password = (event) => {
    setPass(event.target.value);
  };

  const test = (event) => {
    event.preventDefault();
    console.log("username : " + user);
    console.log("password : " + pass);
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
      <form noValidate autoComplete="off" onSubmit={test}>
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
