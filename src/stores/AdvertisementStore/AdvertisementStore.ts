import { makeAutoObservable, reaction } from "mobx";
import { RootStore } from "../rootStore";
import { makeParams } from "./utils";
import baseService from "../../services/baseService";
import {
  IAdvertisementItemsSearch,
  IAdvertisementItem,
  IAdvertisementItemStore,
} from "../../types";

export default class AdvertisementItemStore implements IAdvertisementItemStore {
  readonly defaultFilters = {
    search: "",
    sort_by: "",
    type: "",
    page: 1,
  };
  readonly limit: number = 20;
  abortController: AbortController | undefined;
  isLoading = false;
  total = 0;
  filters = { ...this.defaultFilters };
  searchError = undefined;
  items: IAdvertisementItem[] = [];
  private rootStore?: RootStore;

  constructor(rootStore?: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);

    reaction(
      () =>
        Object.keys(this.filters).map(
          (filter) => (this.filters as any)[filter]
        ),
      () => {
        this.loadItems();
      }
    );
  }

  getAdvertisementItems(
    filters: any,
    limit: number,
    controller?: AbortController
  ) {
    return baseService.get<IAdvertisementItemsSearch[]>("/items", {
      params: {
        ...filters,
        _limit: limit,
      },
      signal: controller?.signal,
    });
  }

  advertisementItemsSearchMapper(
    data: IAdvertisementItemsSearch[]
  ): IAdvertisementItem[] {
    return data.map((item) => ({
      ...item,
      location: {
        vicinity: item.vicinity,
        city: item.city,
        country: item.country,
        type: item.type,
        bathrooms: item.bathrooms,
        bedrooms: item.bedrooms,
      },
      date: new Date(item.date),
      description: item.description,
    }));
  }

  loadItems(filters?: any) {
    this.isLoading = true;
    this.searchError = undefined;

    const params = makeParams(filters || this.filters);

    this.abortController && this.abortController.abort();
    this.abortController = new AbortController();

    this.getAdvertisementItems(params, this.limit, this.abortController)
      .then((e) => {
        this.items = this.advertisementItemsSearchMapper(e.data);
      })
      .catch((e) => {
        this.searchError = e;
        this.items = [];
        this.total = 0;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}
