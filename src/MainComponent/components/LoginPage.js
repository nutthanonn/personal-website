import { Button, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import NearMeIcon from "@material-ui/icons/NearMe";
import { Grid, makeStyles } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles({
  btn: {
    margin: "10px",
    "&:hover": {
      backgroundColor: "#f7f7f7",
    },
  },
});

const LoginPage = () => {
  const classes = useStyles();
  const [user, setUser] = useState("");
  const [formCheck, setFormCheck] = useState(false);

  const Username = (event) => {
    setUser(event.target.value);
  };

  const test = (event) => {
    event.preventDefault();
    console.log(user);
    setUser("");
  };

  useEffect(() => {
    const check = user.trim().length > 1;
    setFormCheck(check);
  }, [user]);

  return (
    <div>
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
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
