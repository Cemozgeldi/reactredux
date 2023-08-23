import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false, // modal açık veya değil durumunu izlemek için boolean tanımlıyoruz.
};

export const modalSlice = createSlice({
  name: "modal",
  reducers: {
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

export const {} = modalSlice.actions;
export default modalSlice.reducer;
