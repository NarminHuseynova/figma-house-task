import { useContext } from "react";
import { RootStore } from "./rootStore";
import { StoreContext } from "./storeProvider";

export const useStores = (): RootStore => useContext(StoreContext);
