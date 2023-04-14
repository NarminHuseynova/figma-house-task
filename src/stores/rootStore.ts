import { makeAutoObservable } from "mobx";
import AdvertisementStore from "./AdvertisementStore/AdvertisementStore";

export class RootStore {
  advertisementItemStore: AdvertisementStore;
  constructor() {
    makeAutoObservable(this);
    this.advertisementItemStore = new AdvertisementStore();
    this.advertisementItemStore.loadItems();
  }
}
