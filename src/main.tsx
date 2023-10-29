import React from "react";
import ReactDOM from "react-dom/client";
import App from "./views/components/App";
import { Provider } from "react-redux";
import "./views/index.css";
import { store } from "./application/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
