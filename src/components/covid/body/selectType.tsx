import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import { makeStyles } from "@mui/styles";
import { IoLocationSharp } from "react-icons/io5";
import { FcCalendar } from "react-icons/fc";
import { MdApproval } from "react-icons/md";

import { observer } from "mobx-react";
import { TimeLineCaseAllImpl } from "../../../store/covidPageStore/timeLineCaseAllStore";

interface SelectTypeProps {
  store: TimeLineCaseAllImpl;
}

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

const SelectType: React.FC<SelectTypeProps> = observer(({ store }) => {
  const classes = useStyles();
  const [valueProvince, setValueProvince] = useState<string>("defaultProvince");
  const [valueMonth, setValueMonth] = useState<string>("defaultMonth");

  useEffect(() => {
    store.change_Province(valueProvince);
  }, [valueProvince, store.DataTimeLineCaseAll, store]);

  useEffect(() => {
    store.change_Month(valueMonth);
  }, [valueMonth, store.DataTimeLineCaseAll, store]);

  return (
    <Toolbar className={classes.root}>
      <Container className={classes.selectBox}>
        <Box sx={{ mr: 1 }}>
          <FormControl>
            <InputLabel>
              จังหวัด
              <MdApproval />
            </InputLabel>
            <Select
              size="small"
              label="จังหวัด"
              onChange={(e: SelectChangeEvent) =>
                setValueProvince(e.target.value)
              }
              value={valueProvince}
              sx={{ width: { md: 200, sm: 150, xs: 100 } }}
            >
              <MenuItem value="defaultProvince">
                <IoLocationSharp />
                &nbsp;ทั้งประเทศ
              </MenuItem>
              <MenuItem value="1">
                <IoLocationSharp />
                &nbsp;test
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <InputLabel>เดือน</InputLabel>
            <Select
              size="small"
              label="เดือน"
              onChange={(e: SelectChangeEvent) => setValueMonth(e.target.value)}
              value={valueMonth}
              sx={{ width: { md: 200, sm: 150, xs: 100 } }}
            >
              <MenuItem value="defaultMonth">
                <FcCalendar />
                &nbsp; ทุกเดือน
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Container>
    </Toolbar>
  );
});

export default SelectType;
