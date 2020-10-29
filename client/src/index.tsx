import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

/**
 * the Provider is the component class that we get from react-redux, that once passed the store object, will be able to give that
 * redux store context to the rest of the application. So that we can dispatch action to that store or we can pull values of that store
 * and into our component
 */
