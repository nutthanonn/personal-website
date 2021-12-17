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
  @observable Month: string = "defaultMonth";
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

  //ทุกเดือน ทุกจังหวัด --> sol(n) => total[i] += ...
  @action
  default_month_data() {
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
    var total = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.DataTimeLineCaseAll.forEach((item) => {
      const monthNo = item.txn_date.slice(5, 7);
      total[parseInt(monthNo) - 1] += item.new_case;
    });

    const newMonthData: any[] = [];
    const newTotalData: any[] = [];

    total.forEach((item, index) => {
      if (item !== 0) {
        newMonthData.push(month[index]);
        newTotalData.push(total[index]);
      }
    });

    this.useData = [newMonthData, newTotalData];
    this.dataTitle = [newMonthData, newTotalData];
  }

  //ทุกเดือน บางจังหวัด --> sol(n) => หาจังหวัดมา reduce
  @action
  case_by_province() {
    this.DataTimeLineCaseByProvince.map((item) => {});
  }

  //ทำงานเมื่อเกิด Action ขณะผู้ใช้เปลี่ยน Select Province
  @action
  change_Province(province: string) {
    this.Province = province;
    if (this.Month === "defaultMonth") {
      if (this.Province === "defaultProvince") {
        this.default_month_data();
      }
    } else {
      this.case_by_province();
    }
  }

  //ทำงานเมื่อเกิด Action ขณะผู้ใช้เปลี่ยน Select Month
  @action
  change_Month(month: string) {
    this.Month = month;
    if (this.Province === "defaultProvince") {
      if (this.Month === "defaultMonth") {
        this.default_month_data();
      }
    } else {
    }
  }
}

export const TimeLineCaseAllStore = new TimeLineCaseAllImpl();
