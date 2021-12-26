import React, { useState } from "react";
import StartFocus from "./startFocus";
import SelectBeat from "./selectBeat";

import "moment/locale/th";
import moment from "moment";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { makeStyles } from "@mui/styles";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { BiTimeFive, BiTimer } from "react-icons/bi";

import { observer } from "mobx-react";
import { ReadingStoreImpl } from "../../../store/reading/readingStore";
import { DataReadingStoreImpl } from "../../../store/reading/dataReadingStore";
import { DataReadingStore } from "../../../store/reading/dataReadingStore";

interface TimePickUpProps {
  store: ReadingStoreImpl;
  startStore: DataReadingStoreImpl;
}

const useStyles = makeStyles({
  root: {
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  boxSelect: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  boxHeader: {
    display: "flex",
    justifyContent: "center",
  },
});

const TimePickUp: React.FC<TimePickUpProps> = observer(
  ({ store, startStore }) => {
    moment.locale("th");
    const classes = useStyles();
    const [minute, setMinute] = useState<string>("0");
    const [hour, setHour] = useState<string>("0");
    const [time, setTime] = useState<string | null>(null);

    const handleChangeHour = (e: SelectChangeEvent) => {
      setHour(e.target.value);
      const allTime = parseInt(minute) + parseInt(e.target.value) * 60;
      startStore.change_time(allTime);
      setTime(moment().add(allTime, "minute").format("LT"));
    };

    const handleChangeMinute = (e: SelectChangeEvent) => {
      setMinute(e.target.value);
      const allTime = parseInt(e.target.value) + parseInt(hour) * 60;
      startStore.change_time(allTime);
      setTime(moment().add(allTime, "minute").format("LT"));
    };

    return (
      <Box className={classes.root}>
        <Box className={classes.boxHeader}>
          <Typography
            sx={{
              my: 5,
              fontWeight: "lighter",
              fontSize: { md: 100, sm: 70, xs: 20 },
              background:
                "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Select time focus
          </Typography>
        </Box>
        <Box className={classes.boxHeader}>
          <Box className={classes.boxSelect}>
            <Box sx={{ mr: 2 }}>
              <FormControl>
                <Select
                  value={hour}
                  onChange={handleChangeHour}
                  size="small"
                  sx={{ width: { md: 200, sm: 150, xs: 100 } }}
                >
                  <MenuItem value="0">
                    <BiTimer />
                    &nbsp; Hour
                  </MenuItem>
                  {store.HourItem.map((item) => {
                    return (
                      <MenuItem value={item} key={item}>
                        <BiTimer />
                        &nbsp; {item} Hour
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl>
                <Select
                  value={minute}
                  onChange={handleChangeMinute}
                  size="small"
                  sx={{ width: { md: 200, sm: 150, xs: 100 } }}
                >
                  <MenuItem value="0">
                    <BiTimeFive />
                    &nbsp; minute
                  </MenuItem>
                  {store.MinuteItem.map((item) => {
                    return (
                      <MenuItem value={item} key={item}>
                        <BiTimeFive />
                        &nbsp; {item} Minute
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
        <Box sx={{ mt: 5 }}>
          {time && (
            <Typography
              sx={{
                fontSize: { md: 30, sm: 30, xs: 20 },
                fontWeight: "lighter",
              }}
            >
              ตั้งเเต่ {moment().format("LT")} ถึง {time}
            </Typography>
          )}
          {!time && <Box sx={{ height: 50 }}></Box>}
        </Box>
        <Box sx={{ my: 5 }}>
          <StartFocus store={DataReadingStore} />
        </Box>
        <SelectBeat />
      </Box>
    );
  }
);

export default TimePickUp;
