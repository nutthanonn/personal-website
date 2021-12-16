import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import { makeStyles } from "@mui/styles";
import { IoLocationSharp } from "react-icons/io5";
import { FcCalendar } from "react-icons/fc";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#FFFDF6",
    paddingBlock: 20,
  },
  selectBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

const SelectType: React.FC = () => {
  const [valueProvince, setValueProvince] = useState<string>("defaultProvince");
  const [valueMonth, setValueMonth] = useState<string>("defaultMonth");
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container className={classes.selectBox}>
        <Box sx={{ mr: 1 }}>
          <FormControl>
            <InputLabel>จังหวัด</InputLabel>
            <Select
              label="จังหวัด"
              onChange={(e: SelectChangeEvent) =>
                setValueProvince(e.target.value)
              }
              value={valueProvince}
              sx={{ width: 200 }}
            >
              <MenuItem value="defaultProvince">
                <IoLocationSharp />
                &nbsp;ทั้งประเทศ
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <InputLabel>เดือน</InputLabel>
            <Select
              label="เดือน"
              onChange={(e: SelectChangeEvent) => setValueMonth(e.target.value)}
              value={valueMonth}
              sx={{ width: 200 }}
            >
              <MenuItem value="defaultMonth">
                <FcCalendar />
                &nbsp;ทั้งเดือน
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Container>
    </Box>
  );
};

export default SelectType;
