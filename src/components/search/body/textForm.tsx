import React, { useState } from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import { BiSearch, BiMicrophone } from "react-icons/bi";

const TextForm: React.FC = () => {
  const [data, setData] = useState<string>("");
  const [placeholder, setPlaceholder] = useState<string>("");

  const linkGoogle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const txt: string =
      "https://www.google.com/search?q=" + e.target.value.replaceAll(" ", "+");
    setData(txt);
    setPlaceholder(e.target.value);
  };

  const test = (e: any) => {
    window.location.href = data;
    setPlaceholder("");
    e.preventDefault();
  };

  return (
    <Box>
      <Paper
        component="form"
        onSubmit={test}
        sx={{
          width: "100%",
          borderRadius: 10,
          borderColor: "gray",
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;",
          mt: 5,
        }}
        elevation={1}
      >
        <Box sx={{ display: "flex", alignItems: "center", p: "5px 12px" }}>
          <BiSearch size="20" />
          <InputBase
            type="text"
            sx={{ width: 500, ml: 0.5, height: 20 }}
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          mt: 5,
        }}
      >
        <Button sx={{ bgcolor: "#F5F5F5", mr: 5, color: "black" }}>
          ค้นหาด้วย Google
        </Button>
        <Button sx={{ bgcolor: "#f5f5f5", color: "black" }}>
          ดีใจจังค้นแล้วเจอเลย
        </Button>
      </Box>
    </Box>
  );
};

export default TextForm;

// <a href="http://www.google.com/search?q=keyword">Cartoon</a>
