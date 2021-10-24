import { React, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addText } from "../slices/cartSlice";

export default function TextArea() {
  const dispatch = useDispatch();
  //state
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  return (
    <Box
      sx={{
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ m: 1 }}>
          <TextField
            label="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </Box>
        <Box
          sx={{
            width: 800,
            maxWidth: "50%%",
          }}
        >
          <TextField
            label="Comment"
            fullWidth
            multiline
            rows={4}
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </Box>
      </Box>
      <Box sx={{ m: 2 }}>
        <Button
          type="submit"
          variant="contained"
          onClick={() => {
            return (
              dispatch(addText({ id: uuidv4(), title: title, text: text })),
              setTitle(""),
              setText("")
            );
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}
