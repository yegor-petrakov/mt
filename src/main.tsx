import React from "react";
import ReactDOM from "react-dom/client";
import "./1_app/styles/index.css";
import App from "./1_app/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./1_app/store/store";
import { Provider } from "react-redux";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
