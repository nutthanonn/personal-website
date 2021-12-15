import { observable, makeObservable, action } from "mobx";
import { fetchData } from "../../api/covidPageApi/dialyCovidApi";
import { DialyInterfaceProps } from "../../interface/covidPage/dialyApiInterface";

export class DialyStoreImpl {
  @observable dataDialy: DialyInterfaceProps[] = [];

  constructor() {
    makeObservable(this);
  }

  @action
  async fetch() {
    const res = await fetchData();
    this.dataDialy = res;
    return res;
  }
}

export const DialyStore = new DialyStoreImpl();
