import { makeObservable, action, observable } from "mobx";
import { dataSet } from "../../data/asmr/dataSet";
import aniamteBg from "../../video/animate-study.mp4";
import narutoBg from "../../video/naruto-bg.mp4";
import sasukeBg from "../../video/sasuke-study.mp4";

interface Startprops {
  id: number;
  audio: string;
  pic: string;
  title: string;
}

export class DataReadingStoreImpl {
  @observable Time: number = 1;
  @observable AsmrSong: number[] = [];
  @observable Background: number = 0;
  @observable timeOut: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action
  change_time(time: number) {
    this.Time = time;
  }

  @action
  add_asmrSound(id: number) {
    this.AsmrSong.push(id);
  }

  @action
  filter_asmrSound(id: number) {
    this.AsmrSong = this.AsmrSong.filter((item) => item !== id);
  }

  @action
  clear_asmr() {
    this.AsmrSong = [];
  }

  @action
  change_bg(index: number) {
    this.Background = index;
  }

  @action
  count_down(time: number) {}

  @action
  start_focus() {
    const newData: Startprops[] = [];
    this.AsmrSong.forEach((id) => {
      dataSet.forEach((sameId) => {
        if (id === sameId.id) {
          newData.push(sameId);
        }
      });
    });
    this.count_down(this.Time);
    console.log(newData);
    return newData;
  }

  @action
  get_bg() {
    const animate = [aniamteBg, narutoBg, sasukeBg];
    return animate[this.Background];
  }
}

export const DataReadingStore = new DataReadingStoreImpl();
