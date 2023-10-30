import React from "react";
import ReactDOM from "react-dom/client";
import App from "./main/components/App/App";
import { Provider } from "react-redux";
import "./main/components/index.css";
import { store } from "./infra/services/redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
