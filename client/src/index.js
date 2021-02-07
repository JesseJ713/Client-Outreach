import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import App from "./components/App";

// Redux store that is accessible to every component
const store = createStore(() => [], {}, applyMiddleware());

ReactDOM.render(<App />, document.querySelector("#root"));
