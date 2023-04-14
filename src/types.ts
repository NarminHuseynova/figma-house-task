import { AxiosError } from "axios";
import { InputHTMLAttributes, ReactElement } from "react";
import AdvertisementStore from "./stores/AdvertisementStore/AdvertisementStore";

export interface IFilters {
  search: string;
  sort_by: string;
  type: string;
  page: number;
}

export interface IAdvertisementItemStore {
  items: IAdvertisementItem[];
  isLoading: boolean;
  total: number;
  filters: IFilters;
  searchError?: AxiosError;
}

export interface IAdvertisementItem {
  id: number;
  price: number;
  image: string;
  date: Date;
  location: {
    vicinity: string;
    city: string;
    country: string;
    type: string;
  };
  description: string[];
  type: string;
  bedrooms: string;
  bathrooms: string;
}

export interface IDropDownSelect {
  label: string;
  value: string;
  param: string;
}

export interface IAdvertisementItemsSearch {
  id: number;
  image: string;
  price: number;
  vicinity: string;
  city: string;
  country: string;
  description: string[];
  date: string;
  type: string;
  bedrooms: string;
  bathrooms: string;
}

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactElement;
  isLoading?: boolean;
}

export interface ISearchInput {
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  onEnter?: () => void;
  value?: string;
  onChange?: (e: string) => void;
  hideButton: boolean;
}

export interface ISelect extends InputHTMLAttributes<HTMLInputElement> {
  options: ISelectItem[];
  label: string;
  onChange?: (e: any) => void;
  isClearable?: boolean;
}

interface ISelectItem {
  value: string;
  label: string;
}

export enum HomeFilters {
  SEARCH = "search",
  PAGE = "page",
  SORT_BY = "sort_by",
  TYPE = "type",
}

export interface ISelectFilters {
  advertisementItemStore: AdvertisementStore;
  onSortByChange: (e: IDropDownSelect) => void;
  onTypeChange: (e: IDropDownSelect) => void;
  onReset: () => void;
}
