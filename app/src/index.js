import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
const rootFontStyle = {
  fontSize: '20px'
};
root.render(
  <div style={rootFontStyle}>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  </div>
);
