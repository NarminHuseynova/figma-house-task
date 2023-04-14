import styles from "./Home.module.scss";
import { observer } from "mobx-react";
import { useCallback, useState } from "react";
import { useStores } from "../../stores/useStore";
import Search from "../../components/Search/Search";
import SelectFilters from "./SelectFilters";
import List from "../../components/List/List";
import { HomeFilters, IDropDownSelect } from "../../types";
import { Skeleton } from "antd";

const Home = observer(({ isLoading }: any) => {
  const [search, setSearch] = useState<string>("");
  const { advertisementItemStore } = useStores();

  const onFiltersChange = useCallback(
    (value: string, field: string) => {
      const { filters, defaultFilters } = advertisementItemStore;
      if (field !== HomeFilters.PAGE) {
        advertisementItemStore.filters = {
          ...filters,
          page: defaultFilters.page,
          [field]: value,
        };
        return;
      }
      advertisementItemStore.filters.page = Number(value);
    },
    [advertisementItemStore]
  );

  const onSearchButtonClick = useCallback(() => {
    onFiltersChange(search, HomeFilters.SEARCH);
  }, [onFiltersChange, search]);

  const onSortByChange = useCallback(
    (e: IDropDownSelect) => {
      onFiltersChange(e.value, HomeFilters.SORT_BY);
    },
    [onFiltersChange]
  );

  const onTypeChange = useCallback(
    (e: IDropDownSelect) => {
      onFiltersChange(e.value, HomeFilters.TYPE);
    },
    [onFiltersChange]
  );

  return (
    <div className={styles.container}>
      <div className={styles.filterSelectTopBorder}>
        <div className={styles.filterSelectContainer}>
          <SelectFilters
            advertisementItemStore={advertisementItemStore}
            onSortByChange={onSortByChange}
            onTypeChange={onTypeChange}
            onReset={function (): void {
              throw new Error("Function not implemented...");
            }}
          />
        </div>
      </div>
      <div className={styles.content}>
        <Search
          value={search}
          onEnter={onSearchButtonClick}
          isLoading={advertisementItemStore.isLoading}
          onClick={onSearchButtonClick}
          onChange={(e) => setSearch(e)}
          hideButton={false}
        />
        <div className={styles.advertisementContainer}>
          {!advertisementItemStore.isLoading &&
            advertisementItemStore.items.map((item) => (
              <div className={styles.advertisementListContainer} key={item.id}>
                {isLoading ? (
                  <Skeleton
                    active
                    avatar={{ shape: "square" }}
                    paragraph={{ rows: 3 }}
                  />
                ) : (
                  <List item={item} search={search} />
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
});

export default Home;
