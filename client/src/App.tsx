import React from "react";
import axios from "axios";
import { Typography } from "@mui/material";

const App: React.FC = () => {
  const [state, setState] = React.useState<string>("");

  React.useEffect(() => {
    async function fetch() {
      const res = await axios.get("http://localhost:3000/person");
      setState(res.data.message);
    }

    fetch();
  }, []);

  return (
    <div>
      <Typography>{state}</Typography>
    </div>
  );
};

export default App;
