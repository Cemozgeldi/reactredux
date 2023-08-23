import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [], // birçok içerik tutacağı için array tanımlıyoruz.
};

export const dataSlice = createSlice({
  name: "data",
  reducers: {
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

export const {} = dataSlice.actions;
export default dataSlice.reducer;
