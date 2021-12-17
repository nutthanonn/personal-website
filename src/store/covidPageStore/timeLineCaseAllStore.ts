import { makeObservable, action, observable } from "mobx";
import { configure } from "mobx";
import { TimeLineCaseAllInterfaceProps } from "../../interface/covidPage/timeLineCaseAllInterface";
import { timeLineCaseByProvinceInterfaceProps } from "../../interface/covidPage/timeLineCaseByProvinceInterface";
import { fetchData } from "../../api/covidPageApi/timeLineCaseAll";
import { fetchDataTimeLineCaseByProvince } from "../../api/covidPageApi/timeLineCaseByProvince";

configure({
  enforceActions: "never",
});
export class TimeLineCaseAllImpl {
  @observable DataTimeLineCaseAll: TimeLineCaseAllInterfaceProps[] = [];
  @observable
  DataTimeLineCaseByProvince: timeLineCaseByProvinceInterfaceProps[] = [];
  @observable Province: string = "defaultProvince";
  @observable TypeChart: string = "defaultType";
  @observable dataTitle: any[][] = [["Jan"], [0]];
  @observable useData: any[][] = [["Jan"], [0]];

  constructor() {
    makeObservable(this);
  }

  @action
  async fecth_data() {
    const timeLineCaseAll = await fetchData();
    const timeLineCaseByProvince = await fetchDataTimeLineCaseByProvince();
    this.DataTimeLineCaseAll = timeLineCaseAll;
    this.DataTimeLineCaseByProvince = timeLineCaseByProvince;
  }

  //ทุกเดือน ...จังหวัด --> sol(n) => total[i] += ...
  @action
  default_month_data(key?: string) {
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const total = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    if (!key) {
      this.DataTimeLineCaseAll.forEach((item) => {
        const monthNo = item.txn_date.slice(5, 7);
        if (this.TypeChart === "defaultType") {
          total[parseInt(monthNo) - 1] += item.new_case;
        } else {
          total[parseInt(monthNo) - 1] += item.new_death;
        }
      });
    } else {
      const provinceData = this.DataTimeLineCaseByProvince.filter((item) => {
        return item.province === key;
      });

      provinceData.forEach((item) => {
        const monthNo = item.txn_date.slice(5, 7);
        if (this.TypeChart === "defaultType") {
          total[parseInt(monthNo) - 1] += item.new_case;
        } else {
          total[parseInt(monthNo) - 1] += item.new_death;
        }
      });
    }

    const newMonthData: string[] = [];
    const newTotalData: number[] = [];

    total.forEach((item, index) => {
      if (item !== 0) {
        newMonthData.push(month[index]);
        newTotalData.push(total[index]);
      }
    });

    if (key) {
      this.useData = [newMonthData, newTotalData];
    } else {
      this.useData = [newMonthData, newTotalData];
      this.dataTitle = [newMonthData, newTotalData];
    }
  }

  //ทุกเดือน บางจังหวัด --> sol(n) => หาจังหวัดมา reduce
  @action
  case_by_province(target: string) {
    this.default_month_data(target);
  }

  //ทำงานเมื่อเกิด Action ขณะผู้ใช้เปลี่ยน Select Province
  @action
  change_Province(province: string) {
    this.Province = province;
    if (this.Province === "defaultProvince") {
      this.default_month_data();
    } else {
      this.case_by_province(province);
    }
  }

  @action
  change_type(type: string) {
    this.TypeChart = type;
    this.default_month_data(this.Province);
  }
}

export const TimeLineCaseAllStore = new TimeLineCaseAllImpl();
