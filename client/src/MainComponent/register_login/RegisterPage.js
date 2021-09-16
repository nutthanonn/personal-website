import { TextField, Typography, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  root: {
    textAlign: "center",
  },
});

const RegisterPage = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <form>
        <TextField variant="outlined" label="username" />
      </form>
    </div>
  );
};

export default RegisterPage;
