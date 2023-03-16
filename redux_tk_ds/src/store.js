import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { createStateSyncMiddleware, initStateWithPrevTab } from 'redux-state-sync';
import dataSlice from "./dataSlice";


const config = {
  // TOGGLE_TODO will not be triggered in other tabs
  blacklist: ['updateValue'],
};
const middlewares = createStateSyncMiddleware(config);
// console.log(middlewares);
const store = configureStore({
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
  reducer: {
    data: dataSlice
  },
}, )
initStateWithPrevTab(store);
export default store
