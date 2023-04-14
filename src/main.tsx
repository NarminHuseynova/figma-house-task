import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StoreProvider } from "./stores/storeProvider";
import { RootStore } from "./stores/rootStore";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const rootStore = new RootStore();

root.render(
  <React.StrictMode>
    <StoreProvider store={rootStore}>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
