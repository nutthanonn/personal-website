import React, { useState } from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { makeStyles } from "@mui/styles";

import { BiSearch, BiMicrophone } from "react-icons/bi";

const useStyles = makeStyles({
  paper: {
    borderRadius: 50,
    border: 3,
    borderColor: "gray",
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;",
    marginTop: 30,
    overflow: "hidden",
  },
  paperChildBox: {
    display: "flex",
    alignItems: "center",
    padding: "5px 12px",
  },
  paperChildInput: {
    width: 500,
    height: 20,
  },
  boxButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonSearch: {
    backgroundColor: "#F5F5F5",
    marginRight: 40,
    color: "black",
  },
});

const TextForm: React.FC = () => {
  const classes = useStyles();
  const [data, setData] = useState<string>("");

  const [placeholder, setPlaceholder] = useState<string>("");

  const linkGoogle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const txt: string =
      "https://www.google.com/search?q=" + e.target.value.replaceAll(" ", "+");
    setData(txt);
    setPlaceholder(e.target.value);
  };

  const test = (e: any) => {
    if (data) {
      window.location.href = data;
    }
    setPlaceholder("");
    e.preventDefault();
  };

  return (
    <Box>
      <Paper className={classes.paper} elevation={1}>
        <Box className={classes.paperChildBox}>
          <BiSearch size="20" />
          <InputBase
            type="text"
            className={classes.paperChildInput}
            onChange={linkGoogle}
            value={placeholder}
          />
          <Tooltip title="Microphone">
            <IconButton size="small">
              <BiMicrophone size="20" />
            </IconButton>
          </Tooltip>
        </Box>
      </Paper>
      <Box className={classes.boxButton}>
        <Button
          className={classes.buttonSearch}
          type="submit"
          variant="text"
          onClick={test}
        >
          ค้นหาด้วย Google
        </Button>
        <Button
          className={classes.buttonSearch}
          type="submit"
          variant="text"
          onClick={test}
        >
          ดีใจจังค้นแล้วเจอเลย
        </Button>
      </Box>
    </Box>
  );
};

export default TextForm;

// <a href="http://www.google.com/search?q=keyword">Cartoon</a>
