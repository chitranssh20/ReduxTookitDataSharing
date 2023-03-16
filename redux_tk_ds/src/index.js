import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import First from "./First";
import Second from "./Second";
import App from "./App";


// store.subscribe(()=>store.getState())
store.subscribe (()=> { console.log ( 'index.js file', store.getState ());})
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
