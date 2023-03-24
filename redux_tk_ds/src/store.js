import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { createStateSyncMiddleware, initStateWithPrevTab } from 'redux-state-sync';
import dataSlice from "./dataSlice";


const config = {
  // TOGGLE_TODO will not be triggered in other tabs
  blacklist: ['data/updateValue'],
};
const check = {}
const middlewares = createStateSyncMiddleware(config);
console.log('middlewares', middlewares);
// console.log('default middlewares', typeof(defaults));
// console.log('default middlewares', (defaults));
const store = configureStore({
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), middlewares],
  reducer: {
    data: dataSlice
  },
}, )
initStateWithPrevTab(store);
export default store
