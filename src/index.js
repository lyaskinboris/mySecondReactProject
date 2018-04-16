import React from "react";
import ReactDOM from "react-dom";
import App from "./app.jsx";

import { HashRouter } from "react-router-dom";

import rootReducers from "./reducers/index.js";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(rootReducers);

ReactDOM.render(
    <Provider store={store} >
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById("contacts")
);