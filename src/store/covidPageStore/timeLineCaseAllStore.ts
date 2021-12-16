import { makeObservable, action, observable } from "mobx";
import { TimeLineCaseAllInterfaceProps } from "../../interface/covidPage/timeLineCaseAllInterface";

export class TimeLineCaseAllImpl {
  @observable DataTimeLineCaseAll: TimeLineCaseAllInterfaceProps[] = [];
  @observable Province: string = "default";
  @observable Month: string = "default";

  constructor() {
    makeObservable(this);
  }

  @action
  change_Province(province: string) {}

  @action
  change_Month(month: string) {}
}

export const TimeLineCaseAllStore = new TimeLineCaseAllImpl();
