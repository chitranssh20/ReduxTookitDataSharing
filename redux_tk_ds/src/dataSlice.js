import { createSlice } from "@reduxjs/toolkit";
import { withReduxStateSync } from 'redux-state-sync';

const initialState = {
  value: 0,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateValue: (state, action) => {
      console.log('state', state);
      console.log('action', action);
      state.value = action.payload;
    },
  },
});

export const { updateValue } = dataSlice.actions;

console.log('dataSlice', dataSlice);
export default withReduxStateSync(dataSlice.reducer);
