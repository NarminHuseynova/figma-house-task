import { IDropDownSelect } from "../../types";

export const SORT_BY_DATE_ADDED_FILTER: IDropDownSelect = {
  label: "Date added",
  value: "Date added",
  param: "date",
};

export const SORT_BY_HIGHEST_PRICE_FILTER: IDropDownSelect = {
  label: "Highest price",
  value: "Highest price",
  param: "price",
};

export const SORT_BY_LOWEST_PRICE_FILTER: IDropDownSelect = {
  label: "Lowest price",
  value: "Lowest price",
  param: "price",
};

export const ADVERTISEMENT_TYPE_APARTMENT_TYPE: IDropDownSelect = {
  label: "Apartment",
  value: "Apartment",
  param: "type",
};

export const ADVERTISEMENT_TYPE_VILA_TYPE: IDropDownSelect = {
  label: "Villa",
  value: "Villa",
  param: "type",
};

export const ADVERTISEMENT_TYPE_TOWNHOUSE_TYPE: IDropDownSelect = {
  label: "Townhouse",
  value: "Townhouse",
  param: "type",
};

export const SORT_BY_FILTER_VALUES: IDropDownSelect[] = [
  SORT_BY_DATE_ADDED_FILTER,
  SORT_BY_HIGHEST_PRICE_FILTER,
  SORT_BY_LOWEST_PRICE_FILTER,
];

export const ADVERTISEMENT_TYPE_FILTER_VALUES: IDropDownSelect[] = [
  ADVERTISEMENT_TYPE_APARTMENT_TYPE,
  ADVERTISEMENT_TYPE_VILA_TYPE,
  ADVERTISEMENT_TYPE_TOWNHOUSE_TYPE,
];
