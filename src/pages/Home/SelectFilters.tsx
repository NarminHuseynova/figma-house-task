import Select from "../../components/Select/Select";
import {
  ADVERTISEMENT_TYPE_FILTER_VALUES,
  SORT_BY_FILTER_VALUES,
} from "../../stores/AdvertisementStore/constants";
import { ISelectFilters } from "../../types";

function SelectFilters({
  onSortByChange,
  onTypeChange,
  advertisementItemStore,
}: ISelectFilters) {
  return (
    <>
      <Select
        onChange={onSortByChange}
        value={advertisementItemStore.filters.sort_by}
        label={"Sort by"}
        options={SORT_BY_FILTER_VALUES}
      />
      <Select
        onChange={onTypeChange}
        value={advertisementItemStore.filters.type}
        style={{ marginTop: "15px" }}
        label={"Type"}
        options={ADVERTISEMENT_TYPE_FILTER_VALUES}
      />
    </>
  );
}

export default SelectFilters;
