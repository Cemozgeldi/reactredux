import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [], // birçok içerik tutacağı için array tanımlıyoruz.
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    createDataFunc: (state, action) => {
      state.data = [...state.data, action.payload]; // payload ile gelen veriyi state içerisine ekliyoruz.
    },
    deleteDataFunc: (state, action) => {
      state.data = [...state.data, filter((dt) => dt.id !== action.payload)];
    },
  },
});

export const { createDataFunc, deleteDataFunc } = dataSlice.actions;
export default dataSlice.reducer;
