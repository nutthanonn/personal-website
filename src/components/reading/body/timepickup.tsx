import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { makeStyles } from "@mui/styles";
import { BiTimeFive, BiTimer } from "react-icons/bi";
import "moment/locale/th";
import moment from "moment";

import { observer } from "mobx-react";
import { ReadingStoreImpl } from "../../../store/reading/readingStore";

interface TimePickUpProps {
  store: ReadingStoreImpl;
}

const useStyles = makeStyles({
  root: {
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  boxSelect: {
    width: 400,
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  boxHeader: {
    display: "flex",
    justifyContent: "center",
  },
});

const TimePickUp: React.FC<TimePickUpProps> = observer(({ store }) => {
  moment.locale("th");
  const classes = useStyles();
  const [minute, setMinute] = useState<string>("0");
  const [hour, setHour] = useState<string>("0");
  const [time, setTime] = useState<string | null>(null);

  const handleChangeHour = (e: SelectChangeEvent) => {
    setHour(e.target.value);
    const allTime = parseInt(minute) + parseInt(e.target.value) * 60;
    setTime(moment().add(allTime, "minute").format("LT"));
  };

  const handleChangeMinute = (e: SelectChangeEvent) => {
    setMinute(e.target.value);
    const allTime = parseInt(e.target.value) + parseInt(hour) * 60;
    console.log(allTime);
    setTime(moment().add(allTime, "minute").format("LT"));
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.boxHeader}>
        <Typography variant="h2" sx={{ my: 5, fontWeight: 10 }}>
          Select time focus
        </Typography>
      </Box>
      <Box className={classes.boxHeader}>
        <Box className={classes.boxSelect}>
          <Box>
            <FormControl>
              <Select
                value={hour}
                onChange={handleChangeHour}
                size="small"
                sx={{ width: 150 }}
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
                sx={{ width: 150 }}
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
          <Typography variant="h4">
            ตั้งเเต่ {moment().format("LT")} ถึง {time}
          </Typography>
        )}
      </Box>
    </Box>
  );
});

export default TimePickUp;
