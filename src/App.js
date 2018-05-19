import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import Routes from "./routes";
// import NewsContainer from "./container/newsContainer";

console.log("App.js")
export default () =>
  <Provider store={store}>
    <Routes />
  </Provider>;
