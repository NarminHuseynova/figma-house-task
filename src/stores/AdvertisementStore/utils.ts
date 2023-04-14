import { IFilters } from "../../types";
import {
  SORT_BY_DATE_ADDED_FILTER,
  SORT_BY_HIGHEST_PRICE_FILTER,
  SORT_BY_LOWEST_PRICE_FILTER,
} from "./constants";

function makeSortByParams(filters: IFilters) {
  let sort_by;

  switch (filters.sort_by) {
    case SORT_BY_DATE_ADDED_FILTER.value:
      sort_by = {
        _sort: SORT_BY_DATE_ADDED_FILTER.param,
        _order: "desc",
      };
      break;
    case SORT_BY_HIGHEST_PRICE_FILTER.value:
      sort_by = {
        _sort: SORT_BY_HIGHEST_PRICE_FILTER.param,
        _order: "desc",
      };
      break;
    case SORT_BY_LOWEST_PRICE_FILTER.value:
      sort_by = {
        _sort: SORT_BY_LOWEST_PRICE_FILTER.param,
        _order: "asc",
      };
      break;
    default:
      sort_by = {};
  }

  return sort_by;
}

export function makeParams(filters: IFilters) {
  const sortByParams = makeSortByParams(filters);
  const typeParams = {
    ...(filters.type && { type: filters.type }),
  };

  return {
    ...sortByParams,
    ...typeParams,
    ...(filters.search && { q: filters.search.trim() }),
    _page: filters.page - 1,
  };
}
