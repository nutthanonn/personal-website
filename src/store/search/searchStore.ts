import { observable, makeObservable, action } from "mobx";

export class SearchStoreImpl {
  @observable SearchText: string = "";

  constructor() {
    makeObservable(this);
  }

  @action
  change_searchText(text: string) {
    this.SearchText += text;
  }

  @action
  clear_searchText() {
    this.SearchText = "";
  }

  @action
  edit_searchText(text: string) {
    this.SearchText = text;
  }
}

export const SearchStore = new SearchStoreImpl();
