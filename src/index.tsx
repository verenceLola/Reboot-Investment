import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import IndexPage from "./pages";
import { store } from "./store";

import "./index.css";

ReactDOM.render(
    <Provider store={store}>
        <IndexPage />
    </Provider>,
    document.getElementById("root")
);
