import { Button, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import NearMeIcon from "@material-ui/icons/NearMe";

const LoginPage = () => {
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
          <TextField
            label="Username"
            variant="outlined"
            color="primary"
            required
            onChange={Username}
            value={user}
          />
        </div>
        <Button
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
