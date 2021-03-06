import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

// Development Only Axios Helpers!
import axios from "axios";
window.axios = axios;

// Redux store that is accessible to every component
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// Provider component houses the store at top level
// App child will have access to Redux store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

// DEBUGGING STRIPE CHECKOUT PRODUCTION KEY
console.log("Stripe Key is: ", process.env.REACT_APP_STRIPE_KEY);
console.log("Environment is: ", process.env.NODE_ENV);
