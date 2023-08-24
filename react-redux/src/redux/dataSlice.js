import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [], // birçok içerik tutacağı için array tanımlıyoruz.
  keyword: "",
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    createDataFunc: (state, action) => {
      state.data = [...state.data, action.payload]; // payload ile gelen veriyi state içerisine ekliyoruz.
    },
    sortingDataFunc: (state, action) => {
      state.data = [
        ...state.data.sort((a, b) =>
          action.payload == "asc"
            ? a.price - b.price
            : action.payload == "desc"
            ? b.price - a.price
            : null
        ),
      ]; // payload ile gelen veriyi state içerisine ekliyoruz.
    },
    deleteDataFunc: (state, action) => {
      state.data = [...state.data.filter((dt) => dt.id != action.payload)];
    },
    updateDataFunc: (state, action) => {
      state.data = [
        ...state.data.map((dt) =>
          dt.id == action.payload.id ? { ...dt, ...action.payload } : dt
        ),
      ];
    },
    searchDataFunc: (state, action) => {
      state.keyword = action.payload;
    },
  },
});

export const {
  createDataFunc,
  deleteDataFunc,
  updateDataFunc,
  sortingDataFunc,
  searchDataFunc,
} = dataSlice.actions;
export default dataSlice.reducer;
