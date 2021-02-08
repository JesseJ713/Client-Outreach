import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import App from "./components/App";
import reducers from "./reducers";

// Redux store that is accessible to every component
const store = createStore(reducers, {}, applyMiddleware());

// Provider component houses the store at top level
// App child will have access to Redux store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
