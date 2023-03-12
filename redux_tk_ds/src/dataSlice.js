import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateValue } = dataSlice.actions;

console.log('dataSlice', dataSlice);
export default dataSlice.reducer;
