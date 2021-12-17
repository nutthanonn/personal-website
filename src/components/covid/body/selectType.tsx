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
import { MdApproval } from "react-icons/md";
import { FiType } from "react-icons/fi";

import { observer } from "mobx-react";
import { TimeLineCaseAllImpl } from "../../../store/covidPageStore/timeLineCaseAllStore";

import { fetchProvinceName } from "../../../api/covidPageApi/provinceName";
import { ProvinceNameInterfaceProps } from "../../../interface/covidPage/provinceNameInterface";

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

const typeItem = [
  { word: "ผู้ติดเชื้อรายใหม่", value: "defaultType" },
  { word: "ผู้เสียชีวิตรายใหม่", value: "new_death" },
];

const SelectType: React.FC<SelectTypeProps> = observer(({ store }) => {
  const classes = useStyles();
  const [valueProvince, setValueProvince] = useState<string>("defaultProvince");
  const [valueDataType, setDataType] = useState<string>("defaultType");
  const [provinceName, setProvinceName] = useState<
    ProvinceNameInterfaceProps[]
  >([]);

  //fetch Data
  useEffect(() => {
    async function fetch() {
      const res = await fetchProvinceName();
      setProvinceName(res);
    }
    fetch();
  }, []);

  //target mobx Province
  useEffect(() => {
    store.change_Province(valueProvince);
  }, [
    valueProvince,
    store,
    store.DataTimeLineCaseAll,
    store.DataTimeLineCaseByProvince,
  ]);

  useEffect(() => {
    store.change_type(valueDataType);
  }, [store, valueDataType]);

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
              {provinceName.map((item) => {
                return (
                  <MenuItem value={item.name_th} key={item.id}>
                    <IoLocationSharp />
                    &nbsp;{item.name_th}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <InputLabel>ชนิด</InputLabel>
            <Select
              size="small"
              label="เดือน"
              onChange={(e: SelectChangeEvent) => setDataType(e.target.value)}
              value={valueDataType}
              sx={{ width: { md: 200, sm: 150, xs: 100 } }}
            >
              {typeItem.map((item) => {
                return (
                  <MenuItem value={item.value} key={item.value}>
                    <FiType />
                    &nbsp; {item.word}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
      </Container>
    </Toolbar>
  );
});

export default SelectType;
