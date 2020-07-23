import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import App from "./components/App";
import reducer from "./reducers";
import { Provider } from "react-redux";
import middleware from "./middleware";

const store = createStore(reducer, middleware);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
