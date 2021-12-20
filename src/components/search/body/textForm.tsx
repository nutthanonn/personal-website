import React, { useEffect } from "react";

import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import useSound from "use-sound";
import { makeStyles } from "@mui/styles";

import activate from "../../../sound/search/sound-microphone-ac.mp3";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import { BiSearch, BiMicrophone } from "react-icons/bi";

import { observer } from "mobx-react";
import { SearchStoreImpl } from "../../../store/search/searchStore";

interface TextFormProps {
  store: SearchStoreImpl;
}

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
    marginLeft: 10,
  },
  boxButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonSearch: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    marginRight: 30,
    borderRadius: 5,
    color: "black",
    borderColor: "#F5F5F5",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#F1F1F1",
    },
  },
});

const TextForm: React.FC<TextFormProps> = observer(({ store }) => {
  const classes = useStyles();

  const { transcript, listening } = useSpeechRecognition();
  const [startMicrophone] = useSound(activate, { volume: 0.5 });

  const linkGoogle = (e: React.ChangeEvent<HTMLInputElement>) => {
    store.edit_searchText(e.target.value);
  };

  useEffect(() => {
    if (!listening) {
      store.change_searchText(transcript);
    }
  }, [transcript, listening, store]);

  const SumbitFul = (e: any) => {
    if (store.SearchText.length > 0) {
      window.location.href =
        "http://www.google.com/search?q=" +
        store.SearchText.replaceAll(" ", "+");
    }
    store.clear_searchText();
    e.preventDefault();
  };

  const SpeechRec = () => {
    SpeechRecognition.startListening();
    startMicrophone();
  };

  return (
    <Box>
      <Box className={classes.paper} component="form" onSubmit={SumbitFul}>
        <Box className={classes.paperChildBox}>
          <BiSearch size="20" />
          <InputBase
            type="text"
            className={classes.paperChildInput}
            onChange={linkGoogle}
            value={listening ? store.SearchText + transcript : store.SearchText}
          />
          <Tooltip title="Microphone">
            <IconButton size="small" onClick={SpeechRec}>
              <BiMicrophone size="20" />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Box className={classes.boxButton}>
        <Box className={classes.buttonSearch} onClick={SumbitFul}>
          ค้นหาด้วย Google
        </Box>
        <Box className={classes.buttonSearch} onClick={SumbitFul}>
          ดีใจจังค้นแล้วเจอเลย
        </Box>
      </Box>
    </Box>
  );
});

export default TextForm;

// <a href="http://www.google.com/search?q=keyword">Cartoon</a>
