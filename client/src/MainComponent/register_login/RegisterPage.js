import { TextField } from "@material-ui/core";
import NavbarRegister from "./NavbarComponent/navbarRegister";

const RegisterPage = () => {
  return (
    <div>
      <NavbarRegister />
      <form>
        <TextField variant="outlined" label="username" />
      </form>
    </div>
  );
};

export default RegisterPage;
