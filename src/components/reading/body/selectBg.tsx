import React, { useState, useEffect } from "react";
import "./style.css";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { makeStyles } from "@mui/styles";
import { dataSet } from "../../../data/reading/dataSet";

import { observer } from "mobx-react";
import { DataReadingStoreImpl } from "../../../store/reading/dataReadingStore";

interface SelectBgProps {
  store: DataReadingStoreImpl;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  boxTitle: {
    display: "flex",
    justifyContent: "center",
  },
  boxImg: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  boxChild: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 5,
  },
});

const pic = dataSet.pic;

const SelectBg: React.FC<SelectBgProps> = observer(({ store }) => {
  const classes = useStyles();
  const [bgUse, setBgUse] = useState<HTMLElement | null>(null);
  const [videoNumber, setVideoNumber] = useState<number>(0);

  const selectBg = (event: React.MouseEvent<HTMLElement>) => {
    if (Boolean(bgUse)) {
      bgUse?.classList.toggle("inUse");
      event.currentTarget.classList.toggle("inUse");
      setBgUse(event.currentTarget);
    } else {
      event.currentTarget.classList.toggle("inUse");
      setBgUse(event.currentTarget);
    }
  };

  const indexVideo = (number: number) => {
    setVideoNumber(number);
  };

  useEffect(() => {
    store.change_bg(videoNumber);
  }, [videoNumber, store]);

  return (
    <Box className={classes.root}>
      <Box className={classes.boxTitle}>
        <Typography
          variant="h2"
          sx={{
            my: 5,
            fontWeight: "lighter",
            fontSize: { md: 50, sm: 30, xs: 20 },
          }}
        >
          Select background
        </Typography>
      </Box>
      <Box className={classes.boxImg}>
        {pic.map((item, index) => {
          return (
            <Box onClick={() => indexVideo(index)} key={item}>
              <Box className={classes.boxChild} onClick={selectBg}>
                <Box
                  component="img"
                  src={item}
                  alt={item}
                  sx={{ height: { md: 200, sm: 150, xs: 150 } }}
                />
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
});

export default SelectBg;
